import React from 'react';
import { Cpu, Settings, Anchor } from 'lucide-react';

const Products: React.FC = () => {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-brand-dark font-semibold tracking-wider uppercase text-sm mb-2 block">Our Core Lineup</span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">Engineered for Extremes</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            High-performance components designed to withstand the harsh environments of steel plants and heavy industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Product 1 */}
          <div className="group">
            <div className="relative aspect-square rounded-3xl bg-gray-100 overflow-hidden mb-8 border border-gray-200">
              <div className="absolute inset-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <Cpu size={80} className="text-gray-400" strokeWidth={1} />
              </div>
              <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/5 transition-colors"></div>
              {/* Fake UI Element to look like V7 Go card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur rounded-xl p-4 shadow-sm border border-white/50">
                 <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-gray-500 uppercase">Category</span>
                    <span className="h-2 w-2 rounded-full bg-brand"></span>
                 </div>
                 <div className="text-sm font-bold text-brand-dark mt-1">Position Sensing</div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-brand-dark mb-3 group-hover:text-brand-dark/70 transition-colors">NSD Sensors</h3>
            <p className="text-gray-600 leading-relaxed">
              Rugged position sensors known for extreme durability. Ideal for high-temperature and high-vibration environments typical in steel manufacturing.
            </p>
          </div>

          {/* Product 2 */}
          <div className="group">
            <div className="relative aspect-square rounded-3xl bg-gray-100 overflow-hidden mb-8 border border-gray-200">
              <div className="absolute inset-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <Settings size={80} className="text-gray-400" strokeWidth={1} />
              </div>
              <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/5 transition-colors"></div>
               <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur rounded-xl p-4 shadow-sm border border-white/50">
                 <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-gray-500 uppercase">Category</span>
                    <span className="h-2 w-2 rounded-full bg-brand"></span>
                 </div>
                 <div className="text-sm font-bold text-brand-dark mt-1">Heavy Duty Motors</div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-brand-dark mb-3 group-hover:text-brand-dark/70 transition-colors">Shanghai Motors</h3>
            <p className="text-gray-600 leading-relaxed">
              Industrial-grade motors built for reliability. Powering heavy machinery with efficiency and consistent torque output.
            </p>
          </div>

          {/* Product 3 */}
          <div className="group">
            <div className="relative aspect-square rounded-3xl bg-gray-100 overflow-hidden mb-8 border border-gray-200">
              <div className="absolute inset-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <Anchor size={80} className="text-gray-400" strokeWidth={1} />
              </div>
              <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/5 transition-colors"></div>
               <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur rounded-xl p-4 shadow-sm border border-white/50">
                 <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-gray-500 uppercase">Category</span>
                    <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                 </div>
                 <div className="text-sm font-bold text-brand-dark mt-1">Lifting Solutions</div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-brand-dark mb-3 group-hover:text-brand-dark/70 transition-colors">Industrial Cranes</h3>
            <p className="text-gray-600 leading-relaxed">
              Custom crane solutions for material handling. Designed for safety and precision in heavy-load operations.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Products;