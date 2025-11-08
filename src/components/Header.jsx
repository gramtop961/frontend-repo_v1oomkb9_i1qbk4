import { useEffect, useState } from 'react';
import { Key, Sparkles, Github, Linkedin } from 'lucide-react';

function ApiKeyModal({ open, onClose, onSave, initialValue = '' }) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    if (open) setValue(initialValue || '');
  }, [open, initialValue]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative z-10 w-full max-w-lg rounded-2xl border border-white/10 bg-zinc-900/90 p-6 shadow-2xl backdrop-blur">
        <div className="mb-4 flex items-center gap-2">
          <Key className="h-5 w-5 text-emerald-400" />
          <h3 className="text-lg font-semibold text-white">Connect Google AI API Key</h3>
        </div>
        <p className="mb-4 text-sm text-zinc-300">
          Paste a valid Google AI Studio API key. You can change it anytime using the key button in the header.
        </p>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="AIza..."
          className="mb-4 w-full rounded-lg border border-white/10 bg-zinc-800 px-4 py-3 font-mono text-sm text-white placeholder:text-zinc-500 focus:border-emerald-500 focus:outline-none"
        />
        <div className="flex items-center justify-end gap-2">
          <button onClick={onClose} className="rounded-lg px-4 py-2 text-sm text-zinc-300 hover:text-white">
            Cancel
          </button>
          <button
            onClick={() => onSave(value)}
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-400"
          >
            <Sparkles className="h-4 w-4" /> Save Key
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Header({ apiKey, setApiKey }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Ask for key if missing on first load
    if (!apiKey) setOpen(true);
  }, [apiKey]);

  const handleSave = (val) => {
    const trimmed = (val || '').trim();
    if (trimmed) {
      localStorage.setItem('recallx_api_key', trimmed);
      setApiKey(trimmed);
      setOpen(false);
    }
  };

  const handleClear = () => {
    localStorage.removeItem('recallx_api_key');
    setApiKey('');
    setOpen(true);
  };

  return (
    <header className="relative z-40 w-full border-b border-white/10 bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/40 dark:bg-zinc-900/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-900 text-white ring-1 ring-inset ring-white/10">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <div className="text-sm font-medium leading-tight text-zinc-900 dark:text-white">RecallX</div>
            <div className="text-xs text-zinc-500">AI Study Assistant</div>
          </div>
        </a>

        <div className="flex items-center gap-2">
          <a
            href="https://www.linkedin.com/in/salmanmehboob/"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-lg px-3 py-2 text-sm text-zinc-600 ring-1 ring-inset ring-zinc-200 hover:bg-zinc-100 dark:text-zinc-300 dark:ring-white/10 dark:hover:bg-zinc-800 sm:inline-block"
          >
            Creator: Salman Mehboob
          </a>
          <button
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-3 py-2 text-sm font-medium text-white ring-1 ring-inset ring-white/10 hover:bg-black dark:bg-white dark:text-zinc-900 dark:ring-zinc-300"
            title="Manage API Key"
          >
            <Key className="h-4 w-4" />
            {apiKey ? 'Key' : 'Add Key'}
          </button>
          {apiKey && (
            <button
              onClick={handleClear}
              className="hidden rounded-lg px-3 py-2 text-sm text-zinc-600 ring-1 ring-inset ring-zinc-200 hover:bg-zinc-100 dark:text-zinc-300 dark:ring-white/10 dark:hover:bg-zinc-800 sm:inline-block"
              title="Remove API Key"
            >
              Sign Out
            </button>
          )}
        </div>
      </div>

      <ApiKeyModal
        open={open}
        onClose={() => setOpen(false)}
        onSave={handleSave}
        initialValue={apiKey}
      />
    </header>
  );
}
