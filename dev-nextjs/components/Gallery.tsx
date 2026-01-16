'use client';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

interface GalleryProps {
  dict: any;
  lang: string;
}

interface CaseItem {
  title: string;
  desc: string;
  cat: string;
  img: string;
}

// Simple Book/Catalog View Modal
function CaseDetailModal({ item, onClose }: { item: CaseItem; onClose: () => void }) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4" onClick={onClose}>
      <div
        className="relative bg-white rounded-lg overflow-hidden max-w-4xl w-full max-h-[90vh] shadow-2xl flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()} // Prevent close when clicking content
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/50 hover:bg-white rounded-full flex items-center justify-center transition-colors"
        >
          <i className="fa-solid fa-xmark text-xl text-neutral-800"></i>
        </button>

        {/* Image Area - treating as a "Page" */}
        <div className="w-full md:w-2/3 bg-gray-100 flex items-center justify-center p-8">
          <div className="relative w-full h-[300px] md:h-[500px] shadow-lg rotate-1 transition-transform hover:rotate-0 duration-500 bg-white p-2">
            <div className="relative w-full h-full">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="w-full md:w-1/3 p-8 flex flex-col justify-center bg-white border-l border-gray-100">
          <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-gray-100 text-gray-500 rounded-full mb-6 max-w-fit">
            {item.cat.toUpperCase()}
          </span>
          <p className="text-gray-600 mb-8 leading-relaxed">
            {item.desc}
          </p>
          <div className="mt-auto">
            <p className="text-sm text-gray-400 italic">More images coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Gallery({ dict, lang }: GalleryProps) {
  // dict here is dict.gallery
  const items: CaseItem[] = dict.items || [];
  const categories: string[] = dict.categories || [];

  const [activeCat, setActiveCat] = useState(categories[0]);
  const [selectedCase, setSelectedCase] = useState<CaseItem | null>(null);

  // Mapping category display names to internal keys is tricky if not consistent.
  // Assuming 'All' is index 0.
  // The data uses keys like "branding", "signs", "packaging" in `cat` field.
  // The categories array in dict is ["All", "Branding", "Signs", "Packaging"] (localized).
  // We need a way to map. 
  // Simplification: We will just lowercase the selected category and check if item.cat includes it,
  // OR rely on index. But better to pass keys. 
  // Let's assume the dictionary order matches the logic:
  // 0 -> All, 1 -> branding, 2 -> signs, 3 -> packaging.
  // Or better, let's look at the dictionary again.
  // "categories": ["All", "Branding", "Signs", "Packaging"]
  // "items": [{ "cat": "branding" }, ...]

  // Helper to normalize logic:
  const filterItems = () => {
    if (activeCat === categories[0]) return items; // All

    // Attempt to match by lowercasing logic (imperfect but viable for now without backend IDs)
    // E.g. "Branding" -> "branding", "一般印刷" -> ?
    // Localization makes this hard. 
    // Ideally, we should have keys for categories.
    // For now, let's try to map index to hardcoded keys if we can, or just check simple inclusion.

    // Hacky fix based on provided JSON structure:
    // categories[1] corresponds to 'branding'
    // categories[2] corresponds to 'signs'
    // categories[3] corresponds to 'packaging'
    // This relies on the order in the JSON.
    const keys = ['all', 'branding', 'signs', 'packaging'];
    const index = categories.indexOf(activeCat);
    const key = keys[index] || 'all';

    return items.filter(item => item.cat === key);
  };

  const filteredItems = filterItems();

  return (
    <>
      <section id="gallery" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{dict.title}</h2>
          </div>

          <div className="gallery-nav flex flex-wrap justify-center gap-4 mb-10">
            {categories.map((cat: string) => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCat === cat
                    ? 'bg-primary text-white shadow-lg scale-105'
                    : 'bg-white text-gray-500 hover:bg-gray-100'
                  }`}
                style={{
                  backgroundColor: activeCat === cat ? 'var(--primary-color)' : '',
                  color: activeCat === cat ? '#fff' : ''
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div layout className="gallery-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={item.title}
                  className="gallery-card group cursor-pointer relative rounded-xl overflow-hidden shadow-md bg-white"
                  onClick={() => setSelectedCase(item)}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      alt={item.title}
                      src={item.img}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <span className="bg-white/90 text-black px-4 py-2 rounded-full text-sm font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        View Case
                      </span>
                    </div>
                  </div>
                  <div className="gallery-info p-4">
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      {selectedCase && (
        <CaseDetailModal item={selectedCase} onClose={() => setSelectedCase(null)} />
      )}
    </>
  );
}
