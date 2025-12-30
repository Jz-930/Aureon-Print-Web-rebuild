import os
import re

# Define paths
base_dir = r"F:\12-28-Aureon-Print-Web-rebuild\restore"
root_dir = r"F:\12-28-Aureon-Print-Web-rebuild"
html_path = os.path.join(base_dir, "index.html")
# Output to root as index.html
output_path = os.path.join(root_dir, "index.html") 

css_files = [
    r"_next\static\chunks\665dc3aa4aa2d85c.css",
    r"_next\static\chunks\05707f2ba494b8b2.css",
    r"_next\static\chunks\7ab45bd6815cdea3.css"
]

# Read CSS
combined_css = ""
for css_rel_path in css_files:
    css_full_path = os.path.join(base_dir, css_rel_path)
    try:
        with open(css_full_path, "r", encoding="utf-8") as f:
            content = f.read()
            # Fix relative paths in CSS for root location:
            # Original: url(../media/...) -> Target: url(restore/_next/static/media/...)
            content = content.replace("../media/", "restore/_next/static/media/")
            combined_css += content + "\n"
    except FileNotFoundError:
        print(f"Warning: CSS file not found: {css_full_path}")

# Read HTML
with open(html_path, "r", encoding="utf-8") as f:
    html_content = f.read()

# 1. Remove existing CSS links
html_content = re.sub(r'<link rel="stylesheet" href="/_next/static/chunks/[^"]+"[^>]*>', '', html_content)

# 2. Remove Next.js Scripts
html_content = re.sub(r'<script src="/_next/static/chunks/[^"]+"[^>]*></script>', '', html_content)
html_content = re.sub(r'<link rel="preload" as="script"[^>]+>', '', html_content)
html_content = re.sub(r'<meta name="next-size-adjust"[^>]*/>', '', html_content)
html_content = re.sub(r'<script src="/_next/static/chunks/[^"]+" noModule=""[^>]*></script>', '', html_content)

# 3. Inject CSS
style_tag = f'<style>{combined_css}</style>'
html_content = html_content.replace('</head>', f'{style_tag}</head>')

# 4. Make paths relative to root (pointing into restore/)
# This handles src="/..." and href="/..." but ignores "//" (protocol relative)
# It captures the character after the slash to ensure we don't match "//"
# Regex explanation:
# (src|href)="/  -> match src="/ or href="/
# (?!(/))        -> negative lookahead, ensure next char is NOT / (avoids //google.com)
# match invalidates if it's protocol relative.
# But wait, checking for / is enough to match /logo.webp but not //google.com?
# /logo starts with /. //google starts with /. 
# We want to match src="/foo" but NOT src="//foo".
# Correct regex: (src|href)="/([^/])" matches src="/f" -> replaces with src="restore/f"

# We also need to handle the root link href="/" -> href="index.html" or href="#"
html_content = html_content.replace('href="/"', 'href="index.html"')

def replace_path(match):
    attr = match.group(1) # src or href
    # char = match.group(2) # the character after /
    # return f'{attr}="restore/{char}'
    
    # Actually, simpler: replace all "/ with "restore/
    # BUT EXCLUDE "//"
    return f'{attr}="restore/'

# Using negative lookahead to ensure we don't match //
# (src|href)="/(?!/)
html_content = re.sub(r'(src|href)="/(?!/)', replace_path, html_content)

# 5. Cleanup Next.js JSON data
html_content = re.sub(r'<script id="__NEXT_DATA__".*?</script>', '', html_content, flags=re.DOTALL)

# 6. Remove hidden hydration div
html_content = re.sub(r'<div hidden="">.*?</div>', '', html_content, flags=re.DOTALL)

# Write Output
with open(output_path, "w", encoding="utf-8") as f:
    f.write(html_content)

print(f"Successfully created {output_path}")
