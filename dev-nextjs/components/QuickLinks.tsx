"use client";
import React from 'react';
import { CometCard } from './ui/comet-card';

export default function QuickLinks() {
  const cards = [
    {
      icon: 'fa-solid fa-print',
      title: 'General Printing',
      titleZh: '一般印刷',
      desc: '数码 & 平版印刷',
      hoverColor: '#e9590c'
    },
    {
      icon: 'fa-solid fa-bullhorn',
      title: 'Marketing',
      titleZh: '商务宣传',
      desc: '名片、传单、画册',
      hoverColor: '#e42513'
    },
    {
      icon: 'fa-solid fa-sign-hanging',
      title: 'Signs & Displays',
      titleZh: '展示与标示',
      desc: '易拉宝、横幅、招牌',
      hoverColor: '#d21f82'
    },
    {
      icon: 'fa-solid fa-box-open',
      title: 'Packaging',
      titleZh: '品牌包装',
      desc: '包装盒、贴纸、标签',
      hoverColor: '#713389'
    },
    {
      icon: 'fa-solid fa-pen-ruler',
      title: 'Stationery',
      titleZh: '商务文具',
      desc: '信纸、信封、联单',
      hoverColor: '#2569b1'
    },
    {
      icon: 'fa-solid fa-wand-magic-sparkles',
      title: 'Finishing',
      titleZh: '后加工',
      desc: '烫金、覆膜、模切',
      hoverColor: '#1ca538'
    }
  ];

  return (
    <>
      <div className="container quick-links">
        <div className="ql-grid">
          {cards.map((card, index) => (
            <CometCard key={index} rotateDepth={12} translateDepth={10}>
              <div
                className="ql-card"
                style={{ '--hover-color': card.hoverColor } as React.CSSProperties}
              >
                <div className="ql-icon">
                  <i className={card.icon}></i>
                </div>
                <h3 className="ql-title">
                  {card.title}<br />{card.titleZh}
                </h3>
                <p className="ql-desc">{card.desc}</p>
              </div>
            </CometCard>
          ))}
        </div>
      </div>
    </>
  );
}
