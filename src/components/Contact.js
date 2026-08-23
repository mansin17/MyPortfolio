import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { profile } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="section-pad">
      <SectionTitle kicker="Let's connect" title="Get In Touch" />

      <Reveal>
        <div className="relative mx-auto max-w-2xl overflow-hidden rounded-3xl glass p-10 text-center sm:p-14">
          <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-violet-600/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-cyan-500/20 blur-3xl" />

          <p className="relative text-lg leading-relaxed text-slate-300">
            I&apos;m currently open to new opportunities and collaborations.
            Whether you have a question, a project idea, or just want to say
            hi — my inbox is always open!
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="group relative mt-9 inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-8 py-4 font-semibold text-white transition-transform duration-300 hover:scale-105"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
              <path d="m3 6 9 7 9-7" />
            </svg>
            Say Hello
          </a>

          <p className="relative mt-6 font-mono text-sm text-slate-500">
            {profile.email}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
