import Reveal from "./Reveal";

export default function SectionTitle({ kicker, title }) {
  return (
    <Reveal className="mb-14 text-center">
      <p className="mb-3 font-mono text-sm uppercase tracking-[0.3em] text-cyan-400">
        {kicker}
      </p>
      <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
      <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500" />
    </Reveal>
  );
}
