import React from 'react';
import Link from 'next/link';

interface HeaderProps {
  dict: any;
  lang: string;
}

export default function Header({ dict, lang }: HeaderProps) {
  const targetLang = lang === 'en' ? 'zh' : 'en';

  return (
    <>
      <header className="header"><div className="cmyk-line"></div><div className="container nav-container"><a href={`/${lang}`} className="logo"><img alt="Aureon Logo" loading="lazy" width="180" height="60" decoding="async" data-nimg="1" style={{ color: 'transparent', objectFit: 'contain' }} src="/restore/logo.webp" /></a><nav><ul className="nav-menu " id="navMenu"><li><a href={`/${lang}#services`} className="nav-link">{dict.services}</a></li><li><a href={`/${lang}#products`} className="nav-link">{dict.products}</a></li><li><a href={`/${lang}#gallery`} className="nav-link">{dict.works}</a></li><li><a href={`/${lang}#about`} className="nav-link">{dict.about}</a></li><li><a href={`/${lang}#contact`} className="nav-link">{dict.contact}</a></li></ul></nav><div className="header-actions"><Link href={`/${targetLang}`} className="lang-switch"><i className="fa-solid fa-globe"></i> <span>{lang === 'en' ? '中文' : 'EN'}</span></Link><div className="mobile-toggle"><i className="fa-solid fa-bars"></i></div><a href={`/${lang}#quote`} className="btn btn-primary btn-sm" style={{ display: 'inline-flex' }}>{dict.quote}</a></div></div></header>
    </>
  );
}
