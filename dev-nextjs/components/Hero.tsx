import React from 'react';

interface HeroProps {
  dict: any;
  lang: string;
}

export default function Hero({ dict, lang }: HeroProps) {
  // Generate 45 cells for the grid background
  return (
    <section id="home" className="hero">
      <div
        className="absolute inset-0 h-full w-full [--cell-border-color:var(--color-neutral-300)] [--cell-fill-color:#202d2b] [--cell-shadow-color:var(--color-neutral-500)]"
      >
        <div className="relative h-auto w-auto overflow-hidden">
          <div className="pointer-events-none absolute inset-0 z-[2] h-full w-full overflow-hidden" />
          <div
            className="relative z-[3] mask-radial-from-20% mask-radial-at-top opacity-600"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(56px, 1fr))',
              gridAutoRows: '56px',
              width: '100%',
              height: '100%',
              overflow: 'hidden',
            }}
          >
            {Array.from({ length: 200 }).map((_, i) => ( // Increase cell count to ensure coverage
              <div
                key={i}
                className="cell relative border-[0.5px] opacity-40 transition-opacity duration-150 will-change-transform hover:opacity-80 dark:shadow-[0px_0px_40px_1px_var(--cell-shadow-color)_inset]"
                style={{
                  backgroundColor: 'var(--cell-fill-color)',
                  borderColor: 'var(--cell-border-color)',
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="container hero-content">
        <h1 className="hero-title">{dict.title}</h1>
        <p className="hero-subtitle">{dict.subtitle}</p>
        <div className="hero-btns">
          <a href="#quote" className="btn btn-gold">{dict.quote_btn}</a>
          <a href="#products" className="btn btn-outline-white">{dict.products_btn}</a>
        </div>
      </div>
    </section>
  );
}
