import React from 'react';

interface FAQProps {
  dict: any;
  lang: string;
}

export default function FAQ({ dict, lang }: FAQProps) {
  // dict is dict.faq
  return (
    <>
      <section id="faq" className="section"><div className="container"><h2 className="section-title text-center" style={{ display: 'block', marginBottom: '40px', fontSize: '1.8rem' }}>{dict.title}</h2><div style={{ maxWidth: '800px', margin: '0 auto', display: 'grid', gap: '20px' }}>{dict.items && dict.items.map((item: any, i: number) => (<details key={i} style={{ background: '#f9fafb', padding: '20px', borderRadius: '8px', cursor: 'pointer', border: '1px solid #eee' }}><summary style={{ fontWeight: '600', color: 'var(--primary-color)' }}>{item.q}</summary><p style={{ marginTop: '10px', color: '#555', fontSize: '0.95rem' }}>{item.a}</p></details>))}</div></div></section>
    </>
  );
}
