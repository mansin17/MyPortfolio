import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 text-center">
        <p className="font-mono text-sm text-slate-500">
          Designed &amp; built with <span className="text-fuchsia-400">♥</span> by{" "}
          <span className="gradient-text font-semibold">{profile.name}</span>
        </p>
        <p className="text-xs text-slate-600">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
