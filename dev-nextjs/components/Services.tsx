'use client';
import React from 'react';
import { GlareCard } from './ui/glare-card';
import Image from 'next/image';
import Link from 'next/link';

interface ServiceItem {
  title: string;
  desc: string;
  img: string;
}

interface ServicesProps {
  dict: any;
  lang: string;
}

function ServiceCard({ item, href, knowMore }: { item: ServiceItem; href: string; knowMore: string }) {
  return (
    <Link href={href} className="block w-full h-full">
      <GlareCard className="w-full h-full">
        <div className="flex flex-col h-full bg-white rounded-xl overflow-hidden shadow-lg border border-neutral-100 group">
          <div className="w-full h-[200px] relative bg-gray-100 shrink-0 overflow-hidden">
            <Image
              src={item.img}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="p-5 flex flex-col flex-1" style={{ padding: '1.25rem' }}>
            <h3 className="text-lg font-bold text-neutral-800 mb-2 border-b border-neutral-200 pb-2" style={{ marginBottom: '0.5rem', paddingBottom: '0.5rem' }}>
              {item.title}
            </h3>
            <p className="text-sm text-neutral-500 leading-relaxed mb-4">
              {item.desc}
            </p>
            <div className="mt-auto text-xs font-semibold text-primary uppercase tracking-wider flex items-center justify-end">
              {knowMore} <i className="fa-solid fa-arrow-right ml-2"></i>
            </div>
          </div>
        </div>
      </GlareCard>
    </Link>
  );
}

export default function Services({ dict, lang }: ServicesProps) {
  const categories = dict.categories || {};
  const data = dict.data || {};
  const common = dict.common || {};

  return (
    <section id="services" className="section bg-light">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            {dict.title}
          </h2>
          <p className="section-desc">
            {dict.subtitle}
          </p>
        </div>

        {/* General & Marketing */}
        {data.marketing && (
          <div className="service-group">
            <div className="service-category-header">
              <i className="fa-solid fa-print"></i> {categories.marketing || "General & Marketing"}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
              {data.marketing.map((item: ServiceItem) => (
                <ServiceCard key={item.title} item={item} href={`/${lang}/services/marketing`} knowMore={common.know_more || "Know More"} />
              ))}
            </div>
          </div>
        )}

        {/* Signs & Displays */}
        {data.signs && (
          <div className="service-group">
            <div className="service-category-header">
              <i className="fa-solid fa-sign-hanging"></i> {categories.signs || "Signs & Displays"}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
              {data.signs.map((item: ServiceItem) => (
                <ServiceCard key={item.title} item={item} href={`/${lang}/services/signs`} knowMore={common.know_more || "Know More"} />
              ))}
            </div>
          </div>
        )}

        {/* Finishing & Branding */}
        {data.finishing && (
          <div className="service-group">
            <div className="service-category-header">
              <i className="fa-solid fa-wand-magic-sparkles"></i> {categories.finishing || "Finishing & Branding"}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
              {data.finishing.map((item: ServiceItem) => (
                <ServiceCard key={item.title} item={item} href={`/${lang}/services/finishing`} knowMore={common.know_more || "Know More"} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
