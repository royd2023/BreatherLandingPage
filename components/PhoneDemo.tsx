
import React from 'react';

interface PhoneDemoProps {
  videoSrc?: string;
}

const PhoneDemo: React.FC<PhoneDemoProps> = ({ videoSrc }) => {
  return (
    // Minimalist Phone Frame
    <div className="relative mx-auto border-black bg-black border-[12px] rounded-[3rem] h-[600px] w-[320px] flex flex-col overflow-hidden ring-1 ring-black/10 shrink-0">
      
      {/* Hardware Keys - flattened */}
      <div className="h-[32px] w-[3px] bg-black absolute -left-[15px] top-[80px]"></div>
      <div className="h-[46px] w-[3px] bg-black absolute -left-[15px] top-[130px]"></div>
      <div className="h-[64px] w-[3px] bg-black absolute -right-[15px] top-[150px]"></div>
      
      {/* Screen Content */}
      <div className="rounded-[2.2rem] overflow-hidden w-full h-full bg-white flex flex-col relative border border-gray-200">
        
        {/* Minimal Status Bar Area - Absolute Overlay */}
        <div className="absolute top-0 left-0 w-full h-12 flex items-center justify-center z-20 pointer-events-none">
           <div className="w-24 h-6 bg-black rounded-b-2xl"></div>
        </div>

        {videoSrc ? (
          <video 
            src={videoSrc} 
            className="w-full h-full object-cover"
            autoPlay 
            loop 
            muted 
            playsInline
          />
        ) : (
          /* Video Placeholder - Minimalist */
          <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center relative z-10">
             <div className="w-20 h-20 border-2 border-gray-200 rounded-full flex items-center justify-center mb-6">
               <div className="w-4 h-4 bg-black rounded-full"></div>
             </div>
             <span className="font-mono text-xs uppercase tracking-[0.2em] text-gray-400 mb-2">Demo Video</span>
             <span className="text-2xl font-bold tracking-tight text-black">Place video here</span>
             <span className="mt-4 text-[10px] font-mono text-gray-300 max-w-[150px] leading-tight">
               Pass a 'videoSrc' prop to the component to replace this.
             </span>
          </div>
        )}

        {/* Home Indicator - Absolute Overlay */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-32 h-1 bg-black/20 rounded-full z-30 mix-blend-darken"></div>
      </div>
    </div>
  );
};

export default PhoneDemo;
