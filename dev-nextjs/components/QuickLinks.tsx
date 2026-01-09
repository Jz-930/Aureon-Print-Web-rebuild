"use client";
import React from 'react';
import { CometCard } from './ui/comet-card';

interface QuickLinksProps {
  dict: any;
  lang: string;
}

export default function QuickLinks({ dict, lang }: QuickLinksProps) {
  // Mapping icons and colors which are constant
  const meta = [
    { icon: 'fa-solid fa-print', hoverColor: '#e9590c' },
    { icon: 'fa-solid fa-bullhorn', hoverColor: '#e42513' },
    { icon: 'fa-solid fa-sign-hanging', hoverColor: '#d21f82' },
    { icon: 'fa-solid fa-box-open', hoverColor: '#713389' },
    { icon: 'fa-solid fa-pen-ruler', hoverColor: '#2569b1' },
    { icon: 'fa-solid fa-wand-magic-sparkles', hoverColor: '#1ca538' }
  ];

  const items = dict.quick_links || [];

  return (
    <>
      <div className="container quick-links">
        <div className="ql-grid">
          {items.map((item: any, index: number) => {
            const m = meta[index] || meta[0];
            return (
              <CometCard key={index} rotateDepth={12} translateDepth={10} className="h-full">
                <div
                  className="ql-card"
                  style={{
                    '--hover-color': m.hoverColor,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start'
                  } as React.CSSProperties}
                >
                  <div className="ql-icon">
                    <i className={m.icon}></i>
                  </div>
                  <h3 className="ql-title">
                    {item.title}
                  </h3>
                  <p className="ql-desc">{item.desc}</p>
                </div>
              </CometCard>
            );
          })}
        </div>
      </div>
    </>
  );
}
