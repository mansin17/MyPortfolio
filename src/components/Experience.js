import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="section-pad">
      <SectionTitle kicker="My path so far" title="Experience & Education" />

      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-violet-500 via-cyan-500 to-transparent sm:left-1/2" />

        {experience.map((item, i) => (
          <Reveal key={`${item.role}-${i}`} delay={i * 120}>
            <div
              className={`relative mb-12 pl-12 sm:w-1/2 sm:pl-0 ${
                i % 2 === 0
                  ? "sm:pr-12 sm:text-right"
                  : "sm:ml-auto sm:pl-12"
              }`}
            >
              <span
                className={`absolute left-4 top-2 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-cyan-400 bg-ink shadow-[0_0_16px_rgba(34,211,238,0.6)] ${
                  i % 2 === 0 ? "sm:left-auto sm:right-0 sm:translate-x-1/2" : "sm:left-0"
                }`}
              />
              <div className="glass rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/40">
                <p className="font-mono text-xs uppercase tracking-widest text-cyan-400">
                  {item.period}
                </p>
                <h3 className="mt-2 text-lg font-bold">{item.role}</h3>
                <p className="text-sm font-medium text-violet-300">{item.org}</p>
                <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-slate-400">
                  {item.points.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
