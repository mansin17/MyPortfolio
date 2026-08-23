import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="section-pad">
      <SectionTitle kicker="What I work with" title="Skills & Technologies" />

      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map((group, i) => (
          <Reveal key={group.group} delay={i * 120}>
            <div className="glass group h-full rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/5">
              <h3 className="mb-5 flex items-center gap-3 text-lg font-semibold">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500" />
                {group.group}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 font-mono text-sm text-slate-300 transition-all duration-300 hover:scale-105 hover:border-violet-400/50 hover:text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
