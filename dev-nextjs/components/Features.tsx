import React from 'react';
import { BackgroundBeamsWithCollision } from './ui/background-beams-with-collision';
import { CometCard } from './ui/comet-card';

interface FeaturesProps {
  dict: any;
  lang: string;
}

export default function Features({ dict, lang }: FeaturesProps) {
  const meta = [
    { icon: 'fa-solid fa-bolt', hoverColor: '#e9590c' },
    { icon: 'fa-solid fa-thumbs-up', hoverColor: '#2569b1' },
    { icon: 'fa-solid fa-percent', hoverColor: '#d21f82' },
    { icon: 'fa-solid fa-user-gear', hoverColor: '#1ca538' }
  ];

  // dict here is presumably dict.features_section passed from page.tsx (title/subtitle)
  // But wait, page.tsx passes `dict.features_section`. 
  // I also added `features_data` to valid dictionary.
  // I need to update `page.tsx` to pass the right data or pass the whole dict.

  // assuming I update page.tsx to pass { ...features_section, items: features_data }
  const items = dict.items || [];

  return (
    <>
      <section className="relative">
        <BackgroundBeamsWithCollision className="h-auto min-h-[600px] py-48 bg-white">
          <div className="container relative z-20">
            <div className="section-header">
              <h2 className="section-title">{dict.title}</h2>
              <p className="section-subtitle text-gray-500 mt-2">{dict.subtitle}</p>
            </div>
            <div className="features-grid">
              {items.map((item: any, index: number) => {
                const m = meta[index] || meta[0];
                return (
                  <CometCard key={index}>
                    <div className="feature-item bg-stone-100/90 backdrop-blur-sm px-10 py-12 rounded-xl border border-gray-100 shadow-sm min-h-[320px] flex flex-col justify-center items-center transition-all duration-300" style={{ '--hover-color': m.hoverColor } as React.CSSProperties}>
                      <div className="feature-icon-box">
                        <i className={m.icon}></i>
                      </div>
                      <h3 className="feature-title">{item.title}</h3>
                      <p className="section-desc" style={{ fontSize: '0.9rem' }}>{item.desc}</p>
                    </div>
                  </CometCard>
                );
              })}
            </div>
          </div>
        </BackgroundBeamsWithCollision>
      </section>
    </>
  );
}
