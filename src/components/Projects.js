import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="section-pad">
      <SectionTitle kicker="Things I've built" title="Featured Projects" />

      <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 120}>
            <article className="glass group flex h-full flex-col overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/10">
              <div
                className={`relative flex h-44 items-center justify-center bg-gradient-to-br ${project.accent} opacity-90`}
              >
                <span className="text-6xl transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6">
                  {project.emoji}
                </span>
                <div className="absolute inset-0 bg-ink/20" />
              </div>

              <div className="flex flex-1 flex-col p-7">
                <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-cyan-300">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-white/[0.06] px-3 py-1 font-mono text-xs text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-4 text-sm font-semibold">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="gradient-text transition-opacity hover:opacity-70"
                    >
                      Live demo →
                    </a>
                  )}
                  {project.codeUrl && (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-300 transition-colors hover:text-white"
                    >
                      Source code
                    </a>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
