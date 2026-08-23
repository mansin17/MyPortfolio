"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";

function useTypewriter(words) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    const speed = deleting ? 45 : 95;

    const timer = setTimeout(() => {
      if (!deleting) {
        const next = word.slice(0, text.length + 1);
        setText(next);
        if (next === word) {
          setTimeout(() => setDeleting(true), 1600);
        }
      } else {
        const next = word.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setIndex((i) => (i + 1) % words.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, deleting, index, words]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(profile.roles);
  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      {/* animated background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-24 h-96 w-96 rounded-full bg-violet-600/25 blur-[110px] animate-float-slow" />
        <div className="absolute -right-24 bottom-24 h-96 w-96 rounded-full bg-cyan-500/20 blur-[110px] animate-float-slower" />
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-600/10 blur-[100px] animate-pulse-soft" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)",
          }}
        />
      </div>

      <div className="section-pad relative grid items-center gap-14 pt-32 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="reveal is-visible mb-5 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 font-mono text-xs text-cyan-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for opportunities
          </p>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
            Hi, I&apos;m{" "}
            <span className="gradient-text">{profile.name}</span>
          </h1>

          <p className="mt-4 h-9 font-mono text-xl text-slate-300 sm:text-2xl">
            {typed}
            <span className="animate-blink text-cyan-400">|</span>
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-7 py-3 font-semibold text-white transition-transform duration-300 hover:scale-105"
            >
              <span className="relative z-10">View my work</span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-cyan-500 to-violet-500 transition-transform duration-500 group-hover:translate-x-0" />
            </a>
            <a
              href="#contact"
              className="rounded-full glass px-7 py-3 font-semibold text-slate-200 transition-all duration-300 hover:border-violet-400/50 hover:text-white"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5 text-slate-400">
            {profile.socials.github && (
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="transition-all duration-300 hover:-translate-y-1 hover:text-white"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12v3.14c0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
                </svg>
              </a>
            )}
            {profile.socials.linkedin && (
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="transition-all duration-300 hover:-translate-y-1 hover:text-white"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
                </svg>
              </a>
            )}
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="transition-all duration-300 hover:-translate-y-1 hover:text-white"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
                <path d="m3 6 9 7 9-7" />
              </svg>
            </a>
          </div>
        </div>

        {/* avatar card */}
        <div className="relative mx-auto hidden lg:block">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-violet-500 via-fuchsia-500 to-cyan-400 blur-2xl opacity-30 animate-pulse-soft" />
          <div className="relative flex h-72 w-72 items-center justify-center rounded-full border border-white/10 bg-gradient-to-b from-white/[0.07] to-transparent backdrop-blur-sm">
            <div className="absolute inset-3 rounded-full border border-dashed border-violet-400/30 animate-spin-slow" />
            <span className="gradient-text text-7xl font-extrabold">{initials}</span>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 transition-colors hover:text-white"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-current p-1.5">
          <div className="h-2 w-1 animate-bounce rounded-full bg-current" />
        </div>
      </a>
    </section>
  );
}
