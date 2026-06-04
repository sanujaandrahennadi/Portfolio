import { useState } from 'react'
import type { SkillItem } from '../data/portfolio'

type Props = {
  skill: SkillItem
}

export function SkillIcon({ skill }: Props) {
  const [imgError, setImgError] = useState(false)
  const initials = skill.name.slice(0, 2).toUpperCase()

  return (
    <div className="group flex flex-col items-center gap-2" title={skill.name}>
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/5 transition group-hover:scale-110 group-hover:bg-white/10">
        {skill.icon && !imgError ? (
          <img
            src={`https://cdn.simpleicons.org/${skill.icon}/${skill.color ?? 'ffffff'}`}
            alt={skill.name}
            className="h-9 w-9 object-contain"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <span className="text-xs font-bold text-cyan-400">{initials}</span>
        )}
      </div>
      <span className="text-xs text-slate-500">{skill.name}</span>
    </div>
  )
}
