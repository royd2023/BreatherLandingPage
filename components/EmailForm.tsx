
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const EmailForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1000);
  };

  if (status === 'success') {
    return (
      <div className="py-4 border-l-2 border-black pl-4 animate-fade-in">
        <span className="block font-mono text-sm uppercase tracking-widest mb-1">Success</span>
        <span className="text-lg font-medium">You're on the list.</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-0">
      <div className="relative w-full group">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email@address.com"
          className="w-full px-0 py-4 bg-transparent border-b-2 border-gray-200 text-xl text-black placeholder-gray-300 focus:outline-none focus:border-black transition-colors rounded-none"
          required
          disabled={status === 'submitting'}
        />
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="absolute right-0 top-0 bottom-0 my-auto text-black hover:text-gray-500 disabled:opacity-30 transition-colors"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>
      {status === 'submitting' && (
        <span className="mt-2 text-xs font-mono text-gray-400 uppercase tracking-wider">Processing...</span>
      )}
    </form>
  );
};

export default EmailForm;
