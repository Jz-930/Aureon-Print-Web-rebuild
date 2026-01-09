import React from 'react';
import { GlareCard } from "./ui/glare-card";

interface ProductsProps {
  dict: any;
  lang: string;
}

export default function Products({ dict, lang }: ProductsProps) {
  const common = dict.common || {}; // safe fallback if common logic not passed in dict yet
  // Actually we need to pass dict.products_section to titles and dict.products_data to items.
  // In page.tsx: <Products dict={dict} ... /> or split?
  // page.tsx passes dict={dict.products_section}. I need to access products_data.
  // The structure in dict files: "products_section": {...}, "products_data": [...]
  // Modifying page.tsx to pass the whole dict or specific parts?
  // It's cleaner to pass the whole dict to components or specific subsets.
  // I currently pass `dict.products_section` in `page.tsx`.
  // I should change `page.tsx` to pass necessary data or `Products` should accept `products` and `section_info`.

  // For now I'm writing `Products.tsx` assuming `dict` contains both or I'll fix `page.tsx` next.
  // Let's assume `dict` has { title, subtitle, items: [...] } 
  // currently `products_section` only has title/subtitle. `products_data` is separate.
  // I should probably combine them or pass them separately.
  // I will update `page.tsx` to pass `dict={dict}` (entire dict) or `dict={{...dict.products_section, items: dict.products_data, common: dict.common}}`.
  // I'll update `page.tsx` next. 

  // Here I assume `dict` has `items` and `common`.

  return (
    <section id="products" className="py-20 bg-gray-50" style={{ padding: '80px 0' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 className="section-title text-4xl font-bold mb-4">{dict.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto" style={{ textAlign: 'center', margin: '0 auto' }}>{dict.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dict.items && dict.items.map((product: any) => (
            <GlareCard key={product.id} className="h-full">
              <div className="relative w-full h-full bg-white rounded-2xl overflow-hidden shadow-sm">
                {/* HOT Badge */}
                {product.hot && (
                  <div className="absolute top-3 right-3 z-10">
                    <span className="inline-block bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                      {dict.common?.hot || 'HOT'}
                    </span>
                  </div>
                )}

                {/* Image Container - full width, no padding */}
                <div style={{ width: '100%', aspectRatio: '4/3', backgroundColor: '#f3f4f6', overflow: 'hidden' }}>
                  <img
                    alt={product.title}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    src={product.image}
                  />
                </div>

                {/* Content Area */}
                <div style={{ padding: '20px' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#111827', marginBottom: '8px' }}>{product.title}</h3>
                  <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.5', marginBottom: '16px', minHeight: '48px' }}>{product.description}</p>

                  {/* Meta Info */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '12px', color: '#9ca3af', marginBottom: '16px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <i className="fa-regular fa-clock"></i> {product.time}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <i className="fa-solid fa-print"></i> {product.qty}
                    </span>
                  </div>

                  {/* CTA Button */}
                  <a
                    href="#quote"
                    className="product-cta-btn"
                    style={{
                      display: 'block',
                      width: '100%',
                      padding: '12px 0',
                      textAlign: 'center',
                      fontSize: '14px',
                      fontWeight: 600,
                      borderRadius: '9999px',
                      border: '2px solid #059669',
                      color: '#059669',
                      backgroundColor: 'transparent',
                      textDecoration: 'none',
                    }}
                  >
                    {dict.common?.get_quote || 'Get Quote'}
                  </a>
                </div>
              </div>
            </GlareCard>
          ))}
        </div>
      </div>
    </section>
  );
}
