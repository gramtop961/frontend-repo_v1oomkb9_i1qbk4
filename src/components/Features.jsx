import { Brain, FileText, Image, Share2, Layers, MessageSquare, BookOpenCheck, Volume2, AlarmClock } from 'lucide-react';

const items = [
  { icon: Brain, title: 'Analysis', desc: 'AI summaries, key concepts, and tough questions to guide your study.' },
  { icon: Layers, title: 'Flashcards', desc: 'Clean, flip animations with a Visualize option using image generation.' },
  { icon: BookOpenCheck, title: 'Quiz & Cloze', desc: 'Multiple-choice quizzes and fill‑in‑the‑blank paragraphs.' },
  { icon: MessageSquare, title: 'AI Tutor & Ask', desc: 'Explain concepts, get feedback, and ask grounded questions.' },
  { icon: AlarmClock, title: 'Spaced Repetition', desc: 'Smart review scheduling with optional browser reminders.' },
  { icon: Volume2, title: 'Audio Lab', desc: 'Text‑to‑speech and speaking practice with real‑time feedback.' },
  { icon: FileText, title: 'Paste or Upload', desc: 'Add text, PDFs, or images — multimodal extraction included.' },
  { icon: Share2, title: 'Share & Import', desc: 'Exchange decks via compact share codes with compression.' },
  { icon: Image, title: 'Modern UI', desc: 'Minimal, accessible, and built with Tailwind + motion.' },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-3xl">All-in-one study toolkit</h2>
        <p className="mt-2 max-w-2xl text-zinc-600 dark:text-zinc-300">
          Built around active recall and powered by Gemini, RecallX automates the hard part so you can focus on learning.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group rounded-2xl border border-white/10 bg-white/60 p-5 shadow-sm backdrop-blur transition hover:shadow-md supports-[backdrop-filter]:bg-white/40 dark:bg-zinc-900/60">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 text-white ring-1 ring-inset ring-white/10 group-hover:scale-105">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="text-base font-semibold text-zinc-900 dark:text-white">{title}</h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
