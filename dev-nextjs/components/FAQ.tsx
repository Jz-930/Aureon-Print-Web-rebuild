import React from 'react';

export default function FAQ() {
  return (
    <>
<section id="about" className="section"><div className="container"><h2 className="section-title text-center" style={{display: 'block', marginBottom: '40px', fontSize: '1.8rem'}}>FAQ 常见问题</h2><div style={{maxWidth: '800px', margin: '0 auto', display: 'grid', gap: '20px'}}><details style={{background: '#f9fafb', padding: '20px', borderRadius: '8px', cursor: 'pointer', border: '1px solid #eee'}}><summary style={{fontWeight: '600', color: 'var(--primary-color)'}}>最小起印量是多少?(MOQ)</summary><p style={{marginTop: '10px', color: '#555', fontSize: '0.95rem'}}>数码印刷支持极少量起印(如名片 1 盒起),平版印刷建议 500 份以上性价比最高。</p></details><details style={{background: '#f9fafb', padding: '20px', borderRadius: '8px', cursor: 'pointer', border: '1px solid #eee'}}><summary style={{fontWeight: '600', color: 'var(--primary-color)'}}>通常需要多长时间交货?</summary><p style={{marginTop: '10px', color: '#555', fontSize: '0.95rem'}}>标准产品(名片、单页)通常 3-5 个工作日。大型喷绘或特殊工艺可能需要更多时间。急单请直接联系客服。</p></details><details style={{background: '#f9fafb', padding: '20px', borderRadius: '8px', cursor: 'pointer', border: '1px solid #eee'}}><summary style={{fontWeight: '600', color: 'var(--primary-color)'}}>可以帮我设计吗?</summary><p style={{marginTop: '10px', color: '#555', fontSize: '0.95rem'}}>可以。我们拥有专业的设计团队,可提供从排版优化到全案设计的服务,费用根据复杂度单独报价。</p></details></div></div></section>
    </>
  );
}
