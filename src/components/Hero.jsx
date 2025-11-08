import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero({ onGetStarted }) {
  return (
    <section className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-10 sm:py-14 md:grid-cols-2 sm:px-6 lg:px-8">
      <div className="relative z-10">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-200 dark:bg-emerald-400/10 dark:text-emerald-300 dark:ring-emerald-500/30">Active Recall • AI Automation</span>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
          Learn faster with RecallX
        </h1>
        <p className="mt-4 max-w-xl text-zinc-600 dark:text-zinc-300">
          Transform notes into flashcards, quizzes, cloze tests, and more — in seconds. Powered by Google Gemini and designed for deep, durable learning.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button
            onClick={onGetStarted}
            className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white ring-1 ring-inset ring-white/10 hover:bg-black dark:bg-white dark:text-zinc-900 dark:ring-zinc-300"
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </button>
          <a
            href="#features"
            className="rounded-xl px-5 py-3 text-sm font-medium text-zinc-700 ring-1 ring-inset ring-zinc-200 hover:bg-zinc-100 dark:text-zinc-300 dark:ring-white/10 dark:hover:bg-zinc-800"
          >
            Explore features
          </a>
        </div>
      </div>

      <div className="relative h-[340px] w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl sm:h-[420px] md:h-[460px]">
        <Spline scene="https://prod.spline.design/kow0cKDK6Tap7xO9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent dark:from-zinc-900/20" />
      </div>
    </section>
  );
}
