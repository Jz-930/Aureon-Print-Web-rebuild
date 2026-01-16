import React from 'react';
import Header from './Header';
import Footer from './Footer';
import QuoteForm from './QuoteForm';

interface ServicePageTemplateProps {
    dict: any;
    lang: string;
    serviceKey: 'marketing' | 'signs' | 'finishing';
}

export default function ServicePageTemplate({ dict, lang, serviceKey }: ServicePageTemplateProps) {
    const serviceData = dict.service_pages?.[serviceKey] || {};

    return (
        <>
            <Header dict={dict.header} lang={lang} />

            {/* Service Page Hero */}
            <section className="relative py-20 bg-slate-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800 z-0"></div>
                <div className="container relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
                        {serviceData.hero_title}
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-100">
                        {serviceData.desc}
                    </p>
                </div>
            </section>

            {/* Main Content Area */}
            <section className="section bg-white">
                <div className="container">
                    {/* Placeholder for specific assets and content */}
                    <div className="flex flex-col items-center justify-center py-10 border-2 border-dashed border-gray-200 rounded-xl bg-gray-50">
                        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4 text-gray-400">
                            <i className="fa-regular fa-image text-2xl"></i>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-400 mb-2">Content for {serviceData.title}</h3>
                        <p className="text-gray-400">Detailed services and assets will be displayed here.</p>
                    </div>
                </div>
            </section>

            <QuoteForm dict={dict.quote_form} lang={lang} />
            <Footer dict={dict.footer} lang={lang} />
        </>
    );
}
