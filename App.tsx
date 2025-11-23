
import React from 'react';
import PhoneDemo from './components/PhoneDemo';
import EmailForm from './components/EmailForm';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-black selection:bg-black selection:text-white">
      
      {/* Navigation */}
      <nav className="w-full px-8 py-8 flex justify-between items-center">
        
        <div className="flex items-center">
          <span className="text-2xl font-black text-black tracking-tighter">breather.</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full px-8 pt-12 pb-24 lg:pt-32 lg:pb-32 max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-16 lg:gap-24">
          
          {/* Left Column: Text */}
          <div className="flex-1 w-full max-w-2xl">
            <div className="inline-block mb-8">
              <span className="text-xs font-mono uppercase tracking-widest text-gray-500 border-b border-gray-200 pb-1">
                Coming Soon
              </span>
            </div>
            
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-black leading-[0.95] tracking-tighter mb-10">
              Work gigs.<br />
              <span className="text-gray-400">Track cash.</span><br />
              Take time.
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 leading-normal max-w-md font-light">
              The financial operating system for couriers and drivers. Know exactly when you can afford to stop.
            </p>
            
            <div className="max-w-md">
              <EmailForm />
              <div className="flex items-center gap-4 mt-8">
                <div className="flex -space-x-2 overflow-hidden">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="inline-block h-6 w-6 rounded-full bg-gray-100 border border-white"></div>
                  ))}
                </div>
                <p className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                  Limited early access
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Phone Demo */}
          <div className="flex-1 w-full flex justify-center lg:justify-end">
            <PhoneDemo videoSrc="/video-name" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;