import React from 'react';

interface GalleryProps {
  dict: any;
  lang: string;
}

export default function Gallery({ dict, lang }: GalleryProps) {
  // dict here is dict.gallery
  const items = dict.items || [];
  const categories = dict.categories || [];

  return (
    <>
      <section id="gallery" className="section"><div className="container"><div className="section-header"><h2 className="section-title">{dict.title}</h2></div><div className="gallery-nav"><button className="gallery-btn active">{categories[0]}</button>{categories.slice(1).map((cat: string) => (<button key={cat} className="gallery-btn ">{cat}</button>))}</div><div className="gallery-grid">{items.map((item: any) => (<div key={item.title} className="gallery-card" data-cat={item.cat}><img alt={item.title} loading="lazy" width="600" height="400" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src={item.img} /><div className="gallery-info"><h4>{item.title}</h4><p>{item.desc}</p></div></div>))}</div></div></section>
    </>
  );
}
