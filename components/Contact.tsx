import React from 'react';
import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-surface text-ink relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to upgrade your infrastructure?</h2>
            <p className="text-xl text-ink-soft mb-10">
              Get in touch with our technical sales team directly. No automated bots, just real engineers ready to solve your problems.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-brand" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Headquarters</h4>
                  <p className="text-ink-soft">Mumbai, India (Serving Pan-India)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
             {/* Card 1: Call */}
            <a href="tel:+919876543210" className="group block bg-white/5 hover:bg-white/10 border border-white/10 p-6 rounded-2xl transition-all hover:scale-[1.02]">
               <div className="flex items-center justify-between">
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center text-brand-dark">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg group-hover:text-brand transition-colors">Call Us Directly</h3>
                      <p className="text-sm text-ink-soft">Immediate technical support</p>
                    </div>
                 </div>
                 <div className="opacity-0 group-hover:opacity-100 transition-opacity text-brand">→</div>
               </div>
            </a>

            {/* Card 2: WhatsApp */}
             <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="group block bg-white/5 hover:bg-white/10 border border-white/10 p-6 rounded-2xl transition-all hover:scale-[1.02]">
               <div className="flex items-center justify-between">
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white">
                      <MessageCircle size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg group-hover:text-[#25D366] transition-colors">WhatsApp Chat</h3>
                      <p className="text-sm text-ink-soft">Fastest response time</p>
                    </div>
                 </div>
                 <div className="opacity-0 group-hover:opacity-100 transition-opacity text-[#25D366]">→</div>
               </div>
            </a>

            {/* Card 3: Email */}
             <a href="mailto:info@befinitive.com" className="group block bg-white/5 hover:bg-white/10 border border-white/10 p-6 rounded-2xl transition-all hover:scale-[1.02]">
               <div className="flex items-center justify-between">
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg group-hover:text-blue-400 transition-colors">Send an Email</h3>
                      <p className="text-sm text-ink-soft">For quotes and catalog requests</p>
                    </div>
                 </div>
                 <div className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-400">→</div>
               </div>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
