import React from 'react';
import { GlareCard } from './ui/glare-card';

export default function Products() {
  return (
    <>
      <section id="products" className="section bg-light py-20">
        <div className="container mx-auto px-4">
          <div className="section-header text-center mb-12">
            <h2 className="section-title text-3xl font-bold mb-4">
              <span className="lang-zh block md:inline">热门产品</span>
              <span className="lang-en block md:inline md:ml-2">Top Sellers</span>
            </h2>
            <p className="section-desc text-gray-600">
              <span className="lang-zh block">Aureon 最受欢迎的商务印刷解决方案</span>
              <span className="lang-en block">Most popular printing solutions for your business.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Product 1: Business Cards */}
            <GlareCard className="w-full mx-auto">
              <div className="flex flex-col h-full bg-white rounded-2xl overflow-hidden text-slate-900 shadow-sm hover:shadow-xl transition-shadow duration-200">
                <div className="w-full h-[200px] relative bg-gray-100 shrink-0">
                  <img
                    alt="Business Cards"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    src="restore/business-card.jpg"
                  />
                  <div className="absolute top-3 right-3 bg-pink-600 text-white text-xs font-bold px-3 py-1 rounded shadow-md z-10">HOT</div>
                </div>
                <div className="p-5 flex flex-col flex-1" style={{ padding: '1.25rem' }}>
                  <div className="mb-3">
                    <h3 className="text-lg font-bold mb-1">Business Cards 名片</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">Standard, Luxury, Spot UV available. <br />多种材质工艺可选,提升第一印象。</p>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-4 gap-3">
                    <div className="flex items-center gap-1"><i className="fa-regular fa-clock"></i> 3-5 Days</div>
                    <span className="text-gray-300">|</span>
                    <div className="flex items-center gap-1"><i className="fa-solid fa-layer-group"></i> 100+ Qty</div>
                  </div>
                  <div className="mt-auto pt-4 flex justify-center" style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                    <a className="btn btn-outline py-2 px-6 text-sm font-semibold rounded-full border border-gray-300 hover:bg-gray-50 hover:text-primary transition-colors duration-200" href="#quote">
                      <span className="lang-zh">立即询价</span>
                      <span className="lang-en hidden">Get Quote</span>
                    </a>
                  </div>
                </div>
              </div>
            </GlareCard>

            {/* Product 2: Flyers */}
            <GlareCard className="w-full mx-auto">
              <div className="flex flex-col h-full bg-white rounded-2xl overflow-hidden text-slate-900 shadow-sm hover:shadow-xl transition-shadow duration-200">
                <div className="w-full h-[200px] relative bg-gray-100 shrink-0">
                  <img
                    alt="Flyers"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    src="restore/flyers.png"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1" style={{ padding: '1.25rem' }}>
                  <div className="mb-3">
                    <h3 className="text-lg font-bold mb-1">Flyers & Leaflets 传单</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">A4/A5/DL Sizes. Gloss or Matte paper. <br />批量印刷成本低,适合地推与DM。</p>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-4 gap-3">
                    <div className="flex items-center gap-1"><i className="fa-regular fa-clock"></i> 2-4 Days</div>
                    <span className="text-gray-300">|</span>
                    <div className="flex items-center gap-1"><i className="fa-solid fa-layer-group"></i> 500+ Qty</div>
                  </div>
                  <div className="mt-auto pt-4 flex justify-center" style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                    <a className="btn btn-outline py-2 px-6 text-sm font-semibold rounded-full border border-gray-300 hover:bg-gray-50 hover:text-primary transition-colors duration-200" href="#quote">
                      <span className="lang-zh">立即询价</span>
                      <span className="lang-en hidden">Get Quote</span>
                    </a>
                  </div>
                </div>
              </div>
            </GlareCard>

            {/* Product 3: Roll-up Banners */}
            <GlareCard className="w-full mx-auto">
              <div className="flex flex-col h-full bg-white rounded-2xl overflow-hidden text-slate-900 shadow-sm hover:shadow-xl transition-shadow duration-200">
                <div className="w-full h-[200px] relative bg-gray-100 shrink-0">
                  <img
                    alt="Roll-up Banners"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    src="restore/roll-up-bannner.jpg"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1" style={{ padding: '1.25rem' }}>
                  <div className="mb-3">
                    <h3 className="text-lg font-bold mb-1">Roll-up Banners 易拉宝</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">Includes stand & carrying bag. <br />包含铝合金底座与收纳袋,展会必备。</p>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-4 gap-3">
                    <div className="flex items-center gap-1"><i className="fa-regular fa-clock"></i> 24 Hours</div>
                    <span className="text-gray-300">|</span>
                    <div className="flex items-center gap-1"><i className="fa-solid fa-layer-group"></i> 1 Qty</div>
                  </div>
                  <div className="mt-auto pt-4 flex justify-center" style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                    <a className="btn btn-outline py-2 px-6 text-sm font-semibold rounded-full border border-gray-300 hover:bg-gray-50 hover:text-primary transition-colors duration-200" href="#quote">
                      <span className="lang-zh">立即询价</span>
                      <span className="lang-en hidden">Get Quote</span>
                    </a>
                  </div>
                </div>
              </div>
            </GlareCard>

            {/* Product 4: Stickers */}
            <GlareCard className="w-full mx-auto">
              <div className="flex flex-col h-full bg-white rounded-2xl overflow-hidden text-slate-900 shadow-sm hover:shadow-xl transition-shadow duration-200">
                <div className="w-full h-[200px] relative bg-gray-100 shrink-0">
                  <img
                    alt="Stickers"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    src="restore/stickers.png"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1" style={{ padding: '1.25rem' }}>
                  <div className="mb-3">
                    <h3 className="text-lg font-bold mb-1">Stickers & Labels 贴纸</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">Custom die-cut shapes, vinyl or paper. <br />异形模切,卷标或单张,品牌包装神器。</p>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-4 gap-3">
                    <div className="flex items-center gap-1"><i className="fa-regular fa-clock"></i> 3-5 Days</div>
                    <span className="text-gray-300">|</span>
                    <div className="flex items-center gap-1"><i className="fa-solid fa-layer-group"></i> Custom</div>
                  </div>
                  <div className="mt-auto pt-4 flex justify-center" style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                    <a className="btn btn-outline py-2 px-6 text-sm font-semibold rounded-full border border-gray-300 hover:bg-gray-50 hover:text-primary transition-colors duration-200" href="#quote">
                      <span className="lang-zh">立即询价</span>
                      <span className="lang-en hidden">Get Quote</span>
                    </a>
                  </div>
                </div>
              </div>
            </GlareCard>

          </div>
        </div>
      </section>
    </>
  );
}
