import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-surface">
      {/* V7-Style Aesthetic Moving Gradient Background (Green Edition) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        {/* Base Gradient Layer */}
        <div className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] bg-gradient-to-r from-[#B8FF6B] to-[#86efac] rounded-full filter blur-[80px] opacity-40 animate-blob mix-blend-screen"></div>
        
        <div className="absolute top-[10%] right-[-10%] w-[60vw] h-[60vw] bg-gradient-to-l from-[#2dd4bf] to-[#4ade80] rounded-full filter blur-[80px] opacity-35 animate-blob animation-delay-2000 mix-blend-screen"></div>
        
        <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] bg-gradient-to-t from-[#facc15] to-[#bef264] rounded-full filter blur-[80px] opacity-30 animate-blob animation-delay-4000 mix-blend-screen"></div>
        
        {/* Dark glow to soften the center */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 mb-8 backdrop-blur-md shadow-sm hover:shadow-md transition-shadow cursor-default">
          <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-xs font-semibold uppercase tracking-wide text-ink-muted">Exclusive NSD Partner in India</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-ink tracking-tight mb-6 leading-[1.1]">
          Precision Engineering <br className="hidden md:block" />
          for <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-emerald-200">India's Steel Giants.</span>
        </h1>

        {/* Subhead */}
        <p className="mx-auto max-w-2xl text-lg md:text-xl text-ink-soft mb-10 leading-relaxed">
          We connect India's heavy industries with world-class automation.
          Proud partners of Tata Steel & JSW, delivering NSD sensors and custom industrial solutions.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact" className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand text-brand-dark font-medium hover:bg-brand/90 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-green-900/20">
            Speak to an Expert
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#products" className="w-full sm:w-auto px-8 py-4 rounded-full bg-surface-2 text-ink border border-white/10 font-medium hover:bg-surface-3 transition-all flex items-center justify-center gap-2 shadow-sm">
            View Products
            <ChevronRight size={18} />
          </a>
        </div>

        {/* Social Proof Text */}
        <p className="mt-12 text-sm text-ink-soft font-medium">Trusted by leading industrial conglomerates</p>
      </div>
    </section>
  );
};

export default Hero;
