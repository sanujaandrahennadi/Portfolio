import { Download, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { cta, personal } from '../data/portfolio'

export function Cta() {
  return (
    <section className="section-gradient py-20">
      <div className="mx-auto max-w-3xl px-6">
        <div className="cta-glow rounded-3xl bg-accent p-10 text-center sm:p-14">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            {cta.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-blue-100">
            {cta.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-accent transition hover:bg-blue-50"
            >
              <Mail size={18} />
              {cta.getInTouchLabel}
            </Link>
            <a
              href={personal.cvUrl}
              className="inline-flex items-center gap-2 rounded-full bg-navy-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy-800"
            >
              <Download size={18} />
              {cta.downloadResumeLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
