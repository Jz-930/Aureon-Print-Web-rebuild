import React from 'react';

interface FooterProps {
  dict: any;
  lang: string;
}

export default function Footer({ dict, lang }: FooterProps) {
  // dict contains footer object
  return (
    <>
      <footer id="contact" className="footer"><div className="container"><div className="footer-content"><div className="footer-brand"><h2>AUREON PRINTING</h2><p>{dict.brand_desc}</p><div className="social-links"><a href="#" className="social-link"><i className="fa-brands fa-facebook-f"></i></a><a href="#" className="social-link"><i className="fa-brands fa-instagram"></i></a><a href="#" className="social-link"><i className="fa-brands fa-weixin"></i></a></div></div><div className="footer-col"><h3>{dict.services_title}</h3><ul className="footer-menu">{dict.links && dict.links.map((link: any, i: number) => (<li key={i}><a href={link.href}>{link.label}</a></li>))}</ul></div><div className="footer-col"><h3>{dict.contact_title}</h3><ul className="footer-menu"><li><i className="fa-solid fa-location-dot" style={{ marginRight: '8px', color: 'var(--accent-gold)' }}></i> {dict.address}</li><li><i className="fa-solid fa-phone" style={{ marginRight: '8px', color: 'var(--accent-gold)' }}></i> (555) 123-4567</li><li><i className="fa-solid fa-envelope" style={{ marginRight: '8px', color: 'var(--accent-gold)' }}></i> order@aureon.com</li><li><i className="fa-regular fa-clock" style={{ marginRight: '8px', color: 'var(--accent-gold)' }}></i> Mon - Fri: 9am - 6pm</li></ul></div></div><div className="footer-bottom">{dict.copyright}</div></div></footer>
    </>
  );
}
