import { Rocket } from 'lucide-react';

export default function CallToAction({ onGetStarted }) {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-tr from-zinc-900 via-zinc-800 to-zinc-900 p-8 text-white shadow-2xl">
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">Ready to turn notes into knowledge?</h3>
        <p className="mt-2 max-w-2xl text-sm text-zinc-300">
          Start by adding your Google AI API key, then paste text or upload PDFs/images. We’ll generate a complete study deck in seconds.
        </p>
        <button
          onClick={onGetStarted}
          className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-900 ring-1 ring-inset ring-zinc-200 hover:bg-zinc-50"
        >
          <Rocket className="h-4 w-4" /> Get Started
        </button>
      </div>
    </section>
  );
}
