import { useEffect, useState } from 'react'

type Props = {
  phrases: string[]
  prefix?: string
}

export function Typewriter({ phrases, prefix = 'I love ' }: Props) {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[phraseIndex]
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          const next = current.slice(0, text.length + 1)
          setText(next)
          if (next === current) {
            setTimeout(() => setDeleting(true), 2000)
          }
        } else {
          const next = current.slice(0, text.length - 1)
          setText(next)
          if (next === '') {
            setDeleting(false)
            setPhraseIndex((i) => (i + 1) % phrases.length)
          }
        }
      },
      deleting ? 50 : 100
    )
    return () => clearTimeout(timeout)
  }, [text, deleting, phraseIndex, phrases])

  return (
    <p className="mt-4 text-lg text-slate-300 dark:text-slate-300">
      <span className="text-slate-400">{prefix}</span>
      <span className="font-medium text-cyan-400">{text}</span>
      <span className="typewriter-cursor ml-0.5 inline-block h-5 w-0.5 translate-y-0.5 bg-cyan-400" />
    </p>
  )
}
