import React from 'react';

const LogoTicker: React.FC = () => {
  // Using placeholders for Tata and JSW style text if images aren't real logos
  // In a real app, use SVG logos
  const companies = [
    { name: "TATA STEEL", class: "font-serif font-bold tracking-widest" },
    { name: "JSW", class: "font-sans font-black tracking-tighter" },
    { name: "NSD Corporation", class: "font-mono font-bold" },
    { name: "Shanghai Motors", class: "font-sans font-bold" },
    { name: "SAIL", class: "font-serif font-bold" },
    { name: "Jindal Stainless", class: "font-sans font-bold" },
  ];

  return (
    <section id="partners" className="py-10 border-y border-white/10 bg-surface-2/60 backdrop-blur-sm overflow-hidden">
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-scroll flex whitespace-nowrap gap-16 md:gap-32 items-center">
          {[...companies, ...companies, ...companies].map((company, idx) => (
            <div key={idx} className={`text-2xl md:text-3xl text-ink-soft hover:text-ink transition-colors duration-300 select-none ${company.class}`}>
              {company.name}
            </div>
          ))}
        </div>
        
        {/* Gradient Masks */}
        <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-surface to-transparent z-10"></div>
        <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-surface to-transparent z-10"></div>
      </div>
    </section>
  );
};

export default LogoTicker;
