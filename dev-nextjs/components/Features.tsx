import React from 'react';
import { BackgroundBeamsWithCollision } from './ui/background-beams-with-collision';
import { CometCard } from './ui/comet-card';

export default function Features() {
  return (
    <>
      <section className="relative">
        <BackgroundBeamsWithCollision className="h-auto min-h-[600px] py-48 bg-white">
          <div className="container relative z-20">
            <div className="section-header">
              <h2 className="section-title">Why Aureon?</h2>
            </div>
            <div className="features-grid">
              <CometCard>
                <div className="feature-item bg-white/50 backdrop-blur-sm px-10 py-12 rounded-xl border border-gray-100 shadow-sm min-h-[320px] flex flex-col justify-center items-center transition-all duration-300" style={{ '--hover-color': '#e9590c' } as React.CSSProperties}>
                  <div className="feature-icon-box">
                    <i className="fa-solid fa-bolt"></i>
                  </div>
                  <h3 className="feature-title">Fast Turnaround<br />快速交付</h3>
                  <p className="section-desc" style={{ fontSize: '0.9rem' }}><span className="lang-zh">标准订单 3-5 工作日,急单可咨询。</span><span className="lang-en">Standard 3-5 days. Rush orders welcome.</span></p>
                </div>
              </CometCard>
              <CometCard>
                <div className="feature-item bg-white/50 backdrop-blur-sm px-10 py-12 rounded-xl border border-gray-100 shadow-sm min-h-[320px] flex flex-col justify-center items-center transition-all duration-300" style={{ '--hover-color': '#2569b1' } as React.CSSProperties}>
                  <div className="feature-icon-box">
                    <i className="fa-solid fa-thumbs-up"></i>
                  </div>
                  <h3 className="feature-title">One-stop Shop<br />一站式印刷</h3>
                  <p className="section-desc" style={{ fontSize: '0.9rem' }}><span className="lang-zh">从设计、印刷到后加工、安装全搞定。</span><span className="lang-en">Design, print, finish, install - we do it all.</span></p>
                </div>
              </CometCard>
              <CometCard>
                <div className="feature-item bg-white/50 backdrop-blur-sm px-10 py-12 rounded-xl border border-gray-100 shadow-sm min-h-[320px] flex flex-col justify-center items-center transition-all duration-300" style={{ '--hover-color': '#d21f82' } as React.CSSProperties}>
                  <div className="feature-icon-box">
                    <i className="fa-solid fa-percent"></i>
                  </div>
                  <h3 className="feature-title">Low Minimum<br />小量也划算</h3>
                  <p className="section-desc" style={{ fontSize: '0.9rem' }}><span className="lang-zh">少量试印、个人项目都欢迎。</span><span className="lang-en">Small runs & personal projects are welcome.</span></p>
                </div>
              </CometCard>
              <CometCard>
                <div className="feature-item bg-white/50 backdrop-blur-sm px-10 py-12 rounded-xl border border-gray-100 shadow-sm min-h-[320px] flex flex-col justify-center items-center transition-all duration-300" style={{ '--hover-color': '#1ca538' } as React.CSSProperties}>
                  <div className="feature-icon-box">
                    <i className="fa-solid fa-user-gear"></i>
                  </div>
                  <h3 className="feature-title">Expert Support<br />专业支持</h3>
                  <p className="section-desc" style={{ fontSize: '0.9rem' }}><span className="lang-zh">免费文件检查和专业工艺建议。</span><span className="lang-en">Free file check & professional advice.</span></p>
                </div>
              </CometCard>
            </div>
          </div>
        </BackgroundBeamsWithCollision>
      </section>
    </>
  );
}
