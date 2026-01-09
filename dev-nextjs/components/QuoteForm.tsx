import React from 'react';

interface QuoteFormProps {
  dict: any;
  lang: string;
}

export default function QuoteForm({ dict, lang }: QuoteFormProps) {
  return (
    <>
      <section id="quote" className="section bg-light"><div className="container"><div className="section-header"><h2 className="section-title">{dict.title}</h2><p className="section-desc">{dict.desc}</p></div><div className="quote-container"><form><div className="form-grid"><div className="form-group"><label className="form-label">{dict.name_label}</label><input type="text" className="form-input" placeholder="Your Name" required /></div><div className="form-group"><label className="form-label">{dict.contact_label}</label><input type="text" className="form-input" placeholder="Email or Phone" required /></div><div className="form-group"><label className="form-label">{dict.type_label}</label><select className="form-select"><option>Business Cards</option><option>Flyers/Brochures</option><option>Signs/Banners</option><option>Packaging</option><option>Other</option></select></div><div className="form-group"><label className="form-label">{dict.qty_label}</label><input type="text" className="form-input" placeholder="e.g. 500" /></div><div className="form-group full-width"><label className="form-label">{dict.details_label}</label><textarea className="form-textarea" rows={4} placeholder={dict.details_placeholder}></textarea></div><div className="form-group full-width text-center" style={{ marginTop: '20px' }}><button type="submit" className="btn btn-primary" style={{ width: '200px' }}>{dict.submit}</button></div></div></form><div className="file-guide"><h4 style={{ marginBottom: '15px', color: 'var(--primary-color)' }}><i className="fa-solid fa-file-circle-check"></i> {dict.file_guide_title}</h4><div className="guide-grid"><div className="guide-item"><strong>{dict.guide_formats}</strong></div><div className="guide-item"><strong>{dict.guide_res}</strong></div><div className="guide-item"><strong>{dict.guide_bleed}</strong></div><div className="guide-item"><strong>{dict.guide_color}</strong></div></div></div></div></div></section>
    </>
  );
}
