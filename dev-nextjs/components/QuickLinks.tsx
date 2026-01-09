import React from 'react';

export default function QuickLinks() {
  return (
    <>
      <div className="container quick-links"><div className="ql-grid"><div className="ql-card" style={{ '--hover-color': '#e9590c' } as React.CSSProperties}><div className="ql-icon"><i className="fa-solid fa-print"></i></div><h3 className="ql-title">General Printing<br />一般印刷</h3><p className="ql-desc">数码 & 平版印刷</p></div><div className="ql-card" style={{ '--hover-color': '#e42513' } as React.CSSProperties}><div className="ql-icon"><i className="fa-solid fa-bullhorn"></i></div><h3 className="ql-title">Marketing<br />商务宣传</h3><p className="ql-desc">名片、传单、画册</p></div><div className="ql-card" style={{ '--hover-color': '#d21f82' } as React.CSSProperties}><div className="ql-icon"><i className="fa-solid fa-sign-hanging"></i></div><h3 className="ql-title">Signs & Displays<br />展示与标示</h3><p className="ql-desc">易拉宝、横幅、招牌</p></div><div className="ql-card" style={{ '--hover-color': '#713389' } as React.CSSProperties}><div className="ql-icon"><i className="fa-solid fa-box-open"></i></div><h3 className="ql-title">Packaging<br />品牌包装</h3><p className="ql-desc">包装盒、贴纸、标签</p></div><div className="ql-card" style={{ '--hover-color': '#2569b1' } as React.CSSProperties}><div className="ql-icon"><i className="fa-solid fa-pen-ruler"></i></div><h3 className="ql-title">Stationery<br />商务文具</h3><p className="ql-desc">信纸、信封、联单</p></div><div className="ql-card" style={{ '--hover-color': '#1ca538' } as React.CSSProperties}><div className="ql-icon"><i className="fa-solid fa-wand-magic-sparkles"></i></div><h3 className="ql-title">Finishing<br />后加工</h3><p className="ql-desc">烫金、覆膜、模切</p></div></div></div>
    </>
  );
}
