import React from 'react';
import { Factory, Handshake, TrendingUp, ShieldCheck, MapPin, BadgeCheck } from 'lucide-react';

const BentoGrid: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-16 md:text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-ink mb-6">More Than Just Distributors. <br/> We Are On-Site Partners.</h2>
        <p className="text-lg text-ink-soft">
          At Befinitive, we don't just ship boxes. We visit plants, understand the machinery, and integrate custom solutions for the steel industry.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
        
        {/* Large Card - Exclusivity */}
        <div className="md:col-span-2 rounded-3xl p-8 bg-surface-2 text-ink relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand rounded-full filter blur-3xl opacity-10 group-hover:opacity-20 transition-opacity translate-x-1/2 -translate-y-1/2"></div>
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 backdrop-blur-md border border-white/10">
              <BadgeCheck className="text-brand" size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Exclusive NSD Distribution</h3>
            <p className="text-ink-muted max-w-md">
              We are one of only two authorized distributors for NSD Corporation in India. 
              Get authentic parts, direct factory support, and warranty protection that gray market sellers can't offer.
            </p>
          </div>
        </div>

        {/* Tall Card - Plant Visits */}
        <div className="row-span-2 rounded-3xl p-8 bg-surface-2 border border-white/10 shadow-sm relative overflow-hidden group hover:border-brand/50 transition-colors">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative z-10 h-full flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
               <Factory className="text-brand" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-ink mb-4">Hands-On Plant Visits</h3>
            <p className="text-ink-soft mb-8 flex-grow">
              Our sales head and technical team regularly visit steel plants to assess requirements on the ground. We understand the heat, dust, and vibration challenges of your environment.
            </p>
            <div className="mt-auto pt-8 border-t border-white/10">
               <div className="flex items-center gap-2 text-sm font-medium text-ink-soft">
                 <MapPin size={16} />
                 <span>Active in major industrial hubs</span>
               </div>
            </div>
          </div>
        </div>

        {/* Medium Card - Fair Pricing */}
        <div className="rounded-3xl p-8 bg-brand/10 border border-brand/30 relative overflow-hidden">
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-xl bg-brand/20 flex items-center justify-center mb-4">
              <TrendingUp className="text-brand" size={24} />
            </div>
            <h3 className="text-xl font-bold text-ink mb-2">Fair, Direct Pricing</h3>
            <p className="text-sm text-ink-soft">
              Direct relationships with manufacturers mean no unnecessary markups. We offer transparent pricing structures for long-term contracts.
            </p>
          </div>
        </div>

        {/* Medium Card - Clients */}
        <div className="rounded-3xl p-8 bg-surface-2 border border-white/10 shadow-sm relative overflow-hidden hover:shadow-md transition-shadow">
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4">
              <Handshake className="text-brand" size={24} />
            </div>
            <h3 className="text-xl font-bold text-ink mb-2">Trusted by Giants</h3>
            <p className="text-sm text-ink-soft">
              Our track record includes successful implementations with Tata Steel, JSW, and other industry leaders.
            </p>
          </div>
        </div>

        {/* Wide Card - Custom Solutions */}
        <div className="md:col-span-3 rounded-3xl p-8 bg-gradient-to-r from-surface-2 to-surface-3 text-ink relative overflow-hidden">
           <div className="absolute top-0 right-0 w-96 h-96 bg-brand rounded-full filter blur-[100px] opacity-10"></div>
           <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
             <div>
               <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                 <ShieldCheck className="text-brand" />
                 Custom Solutions, Not Just Catalogs
               </h3>
               <p className="text-ink-soft max-w-2xl">
                 Since many of our products are custom-built for specific machinery, we don't rely on generic catalogs. 
                 Tell us your problem, and we engineer the solution.
               </p>
             </div>
             <a href="#contact" className="whitespace-nowrap px-6 py-3 bg-brand text-brand-dark font-semibold rounded-full hover:bg-brand/90 transition-colors">
               Request Consultation
             </a>
           </div>
        </div>

      </div>
    </section>
  );
};

export default BentoGrid;
