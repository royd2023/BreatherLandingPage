
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const EmailForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('submitting');

    try {
      const webhookUrl = import.meta.env.VITE_GOOGLE_SHEETS_WEBHOOK_URL;

      if (!webhookUrl) {
        console.error('Webhook URL not configured');
        setStatus('error');
        return;
      }

      // Use JSONP to avoid CORS issues
      const callbackName = 'jsonpCallback' + Date.now();
      const script = document.createElement('script');

      // Create global callback function
      (window as any)[callbackName] = (response: any) => {
        // Clean up
        delete (window as any)[callbackName];
        document.body.removeChild(script);

        if (response.status === 'success') {
          setStatus('success');
          setEmail('');
          setTimeout(() => setStatus('idle'), 3000);
        } else {
          setStatus('error');
        }
      };

      // Build URL with parameters
      const params = new URLSearchParams({
        email: email,
        source: 'Breather Landing Page',
        callback: callbackName
      });

      script.src = `${webhookUrl}?${params.toString()}`;
      script.onerror = () => {
        console.error('Error submitting email');
        setStatus('error');
        delete (window as any)[callbackName];
        document.body.removeChild(script);
      };

      document.body.appendChild(script);

    } catch (error) {
      console.error('Error submitting email:', error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="py-4 border-l-2 border-black pl-4 animate-fade-in">
        <span className="block font-mono text-sm uppercase tracking-widest mb-1">Success</span>
        <span className="text-lg font-medium">You're on the list.</span>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="py-4 border-l-2 border-red-500 pl-4">
        <span className="block font-mono text-sm uppercase tracking-widest mb-1 text-red-500">Error</span>
        <span className="text-lg font-medium">Something went wrong. Please try again.</span>
        <button
          onClick={() => setStatus('idle')}
          className="mt-2 text-sm underline hover:no-underline"
        >
          Try again
        </button>
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
