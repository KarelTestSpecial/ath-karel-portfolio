import React from 'react';
import { useCart } from './CartContext';

const CartOverlay = () => {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, cartCount, clearCart } = useCart();

  if (!isCartOpen) return null;

  const handleSendInquiry = () => {
    const projectList = cart.map(item => `- ${item.name} (${item.quantity}x)`).join('\n');
    const body = encodeURIComponent(`Hallo Karel,\n\nIk heb interesse in de volgende projecten/diensten:\n\n${projectList}\n\nKunt u contact met mij opnemen voor een offerte?\n\nMet vriendelijke groet,`);
    window.location.href = `mailto:karel@athena-cms.nl?subject=Offerte-aanvraag Portfolio&body=${body}`;
    clearCart();
    setIsCartOpen(false);
  };

  return (
    <div className="fixed inset-0 z-[2000] flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Drawer */}
      <div className="relative w-full max-w-md bg-[#0a0a0a] border-l border-white/10 shadow-2xl flex flex-col animate-slide-in h-full">
        <div className="p-8 border-b border-white/5 flex justify-between items-center">
          <div>
            <h3 className="text-xl font-black uppercase tracking-widest text-white">Project Inquiry</h3>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">
              {cartCount} items selected
            </p>
          </div>
          <button 
            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-all"
            onClick={() => setIsCartOpen(false)}
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center opacity-30">
              <div className="text-4xl mb-4">📁</div>
              <p className="text-xs font-black uppercase tracking-widest text-white">No projects selected yet.</p>
              <p className="text-[10px] text-slate-500 mt-2 italic">Select projects to build your inquiry list.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map(item => (
                <div key={item.id} className="group flex gap-4 items-center bg-white/5 p-4 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all">
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-800">
                    <img src={item.image || `https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=100&auto=format&fit=crop`} className="w-full h-full object-cover" alt="" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[11px] font-black text-white uppercase tracking-widest mb-1">{item.name}</h4>
                    <p className="text-[9px] text-slate-500 uppercase tracking-widest">{item.category}</p>
                  </div>
                  <div className="flex items-center gap-3 bg-black/40 rounded-full p-1 border border-white/5">
                    <button 
                      onClick={() => updateQuantity(item.id, -1)}
                      className="w-6 h-6 rounded-full flex items-center justify-center text-slate-500 hover:text-white hover:bg-white/10"
                    >-</button>
                    <span className="text-[10px] font-black text-white w-4 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-6 h-6 rounded-full flex items-center justify-center text-slate-500 hover:text-white hover:bg-white/10"
                    >+</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-8 border-t border-white/5 bg-white/5 backdrop-blur-md">
            <button 
              className="w-full py-5 bg-blue-600 hover:bg-blue-500 text-white font-black uppercase tracking-widest text-xs rounded-full transition-all shadow-xl shadow-blue-600/20 flex items-center justify-center gap-3"
              onClick={handleSendInquiry}
            >
              Request Quote <span>→</span>
            </button>
            <p className="text-[9px] text-center text-slate-500 uppercase tracking-widest mt-4">
              This will open your default email client.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartOverlay;