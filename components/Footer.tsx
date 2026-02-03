import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-brand rounded flex items-center justify-center">
              <span className="text-brand-dark font-bold text-xs">B</span>
            </div>
            <span className="text-lg font-bold text-white">Befinitive</span>
        </div>
        
        <div className="text-ink-soft text-sm">
          © {new Date().getFullYear()} Befinitive. All rights reserved.
        </div>

        <div className="flex gap-6">
           <a href="#" className="text-ink-soft hover:text-brand text-sm transition-colors">Privacy</a>
           <a href="#" className="text-ink-soft hover:text-brand text-sm transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
