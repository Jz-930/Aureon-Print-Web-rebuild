import React from 'react';

export default function Header() {
  return (
    <>
<header className="header"><div className="cmyk-line"></div><div className="container nav-container"><a href="#" className="logo"><img alt="Aureon Logo" loading="lazy" width="180" height="60" decoding="async" data-nimg="1" style={{color: 'transparent', objectFit: 'contain'}} src="restore/logo.webp" /></a><nav><ul className="nav-menu " id="navMenu"><li><a href="#services" className="nav-link"><span className="lang-zh">服务</span><span className="lang-en">Services</span></a></li><li><a href="#products" className="nav-link"><span className="lang-zh">热门产品</span><span className="lang-en">Products</span></a></li><li><a href="#gallery" className="nav-link"><span className="lang-zh">案例</span><span className="lang-en">Works</span></a></li><li><a href="#about" className="nav-link"><span className="lang-zh">关于</span><span className="lang-en">About</span></a></li><li><a href="#contact" className="nav-link"><span className="lang-zh">联系</span><span className="lang-en">Contact</span></a></li></ul></nav><div className="header-actions"><div className="lang-switch"><i className="fa-solid fa-globe"></i> <span>EN / 中</span></div><div className="mobile-toggle"><i className="fa-solid fa-bars"></i></div><a href="#quote" className="btn btn-primary btn-sm" style={{display: 'inline-flex'}}><span className="lang-zh">快速报价</span><span className="lang-en">Get Quote</span></a></div></div></header>
    </>
  );
}
