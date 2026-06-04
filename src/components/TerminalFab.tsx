import { Terminal } from 'lucide-react'

export function TerminalFab() {
  return (
    <button
      type="button"
      className="fixed bottom-6 left-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-navy-800/90 text-cyan-400 shadow-lg backdrop-blur transition hover:border-accent/40 hover:bg-accent/20"
      aria-label="Terminal"
    >
      <Terminal size={18} />
    </button>
  )
}
