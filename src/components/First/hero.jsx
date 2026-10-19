import React from "react";
import { ArrowUpRight } from "lucide-react";
import atheleteImage from "../../assets/athelet.jpg";

const HeroandStats = () => {
  return (
    <section
      id="home"
      className="w-full scroll-mt-16 md:scroll-mt-20 bg-[#1A1A1D] px-4 py-8 text-white md:px-8 md:py-12 lg:px-16 lg:py-16"
    >
      <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="flex flex-col gap-5 md:gap-6">
          <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-zinc-300 md:text-xs">
            <span className="h-2 w-2 bg-[#C6FF3D]" />
            Built by effort. Not excuses.
          </p>

          <h1 className="font-display text-4xl uppercase leading-[0.9] md:text-6xl lg:text-8xl">
            Forge your strongest <span className="text-[#C6FF3D]">self</span>
          </h1>

          <p className="max-w-md text-base text-zinc-400 md:text-lg">
            Real coaching. Relentless energy. A stronger you starts on this
            floor.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#pricing"
              className="flex items-center justify-between gap-6 rounded-xl bg-[#C6FF3D] px-5 py-4 font-semibold text-black transition hover:brightness-110 sm:min-w-44"
            >
              Join Now
              <ArrowUpRight size={18} />
            </a>
            <a
              href="#programs"
              className="flex items-center justify-between gap-6 rounded-xl border border-[#2E2E34] bg-[#222226] px-5 py-4 font-semibold text-white transition hover:border-[#C6FF3D] sm:min-w-44"
            >
              View Plans
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={atheleteImage}
            alt="Athlete deadlifting at IronForge Gym"
            className="h-72 w-full object-cover md:h-96 lg:h-120"
          />
          <div className="absolute inset-0 bg-linear-to from-black/70 via-transparent to-transparent" />
          <div className="absolute inset-x-4 bottom-4 flex items-end justify-between text-[10px] font-semibold uppercase tracking-widest md:text-xs">
            <span>Show up. Get strong</span>
            <span className="text-zinc-300">Est. 2016</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroandStats;
