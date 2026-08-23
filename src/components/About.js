import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { about, profile } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="section-pad">
      <SectionTitle kicker="Get to know me" title="About Me" />

      <div className="grid items-start gap-10 lg:grid-cols-[1fr_320px]">
        <Reveal delay={100}>
          <div className="glass rounded-3xl p-8 sm:p-10">
            {about.paragraphs.map((p, i) => (
              <p
                key={i}
                className="mb-5 text-base leading-relaxed text-slate-300 last:mb-0 sm:text-lg"
              >
                {p}
              </p>
            ))}
            <p className="mt-6 inline-flex items-center gap-2 font-mono text-sm text-slate-400">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 21s-7-5.1-7-11a7 7 0 0 1 14 0c0 5.9-7 11-7 11z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              {profile.location}
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4">
          {about.stats.map((s, i) => (
            <Reveal key={s.label} delay={150 + i * 100}>
              <div className="glass group rounded-3xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/40">
                <p className="gradient-text text-4xl font-extrabold">{s.value}</p>
                <p className="mt-1 text-sm text-slate-400">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
