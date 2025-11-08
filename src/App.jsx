import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import CallToAction from './components/CallToAction';

function PlaceholderUpload() {
  return (
    <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/60 p-6 text-sm text-zinc-700 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/40 dark:bg-zinc-900/60 dark:text-zinc-300">
      <p className="mb-2 font-medium text-zinc-900 dark:text-white">Deck Generation Preview</p>
      <ul className="list-disc space-y-1 pl-5">
        <li>Paste text from your notes or articles</li>
        <li>Upload PDFs or images (PNG/JPG) — text is extracted automatically</li>
        <li>Import a deck using a share code</li>
      </ul>
      <p className="mt-3 text-xs text-zinc-500">Note: This sandbox showcases the UI experience. Backend endpoints will be wired to Gemini in a later step.</p>
    </div>
  );
}

export default function App() {
  const [apiKey, setApiKey] = useState('');

  useEffect(() => {
    const k = localStorage.getItem('recallx_api_key');
    if (k) setApiKey(k);
  }, []);

  const scrollToUpload = () => {
    const el = document.getElementById('upload');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 antialiased dark:bg-zinc-950 dark:text-white">
      <Header apiKey={apiKey} setApiKey={setApiKey} />
      <main>
        <Hero onGetStarted={scrollToUpload} />
        <div id="upload" className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <PlaceholderUpload />
        </div>
        <Features />
        <CallToAction onGetStarted={scrollToUpload} />
      </main>
      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-4 text-sm text-zinc-500 sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} RecallX. Built for effective learning. Connect with the creator on LinkedIn in the header.
          </p>
        </div>
      </footer>
    </div>
  );
}
