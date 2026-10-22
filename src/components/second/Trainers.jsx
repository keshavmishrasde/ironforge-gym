import React, { useState } from "react";
import { TrainerCard } from "./card";
import { ArrowLeftRight } from "lucide-react";
import Marcus from "../../assets/marcus.jpg";
import Sofia from "../../assets/sofia.jpg";
import Aisha from "../../assets/aisha.jpg";
import Jake from "../../assets/jake.jpg";

const Trainers = () => {
  const [progress, setProgress] = useState(0);

  const handleScroll = (e) => {
    const el = e.currentTarget;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  };

  return (
    <section
      id="trainers"
      className=" scroll-mt-16 md:scroll-mt-20 px-4 py-10 md:px-8 md:py-16 lg:px-16"
    >
      <div className="mb-6 flex flex-col gap-3 md:mb-10 md:gap-4">
        <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-[#C6FF3D] md:text-sm">
          <span className="h-0.5 w-8 bg-[#C6FF3D] md:w-10" />
          02 / In your corner
        </p>

        <h2 className="font-display text-5xl uppercase leading-[0.9] text-white md:text-7xl lg:text-8xl">
          Experts. <br className="md:hidden" /> Not sideliners.
        </h2>

        <p className="text-base text-zinc-400 md:text-lg">
          Good coaches count reps. Ours make them count.
        </p>
      </div>
      <div
        onScroll={handleScroll}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto [scrollbar-none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-4 lg:gap-6"
      >
        <TrainerCard
          image={Marcus}
          name="Marcus Reed"
          speciality="Strength & conditioning"
        />
        <TrainerCard
          image={Sofia}
          name="Sofia Chen"
          speciality="CrossFit & performance"
        />
        <TrainerCard
          image={Aisha}
          name="Aisha Patel"
          speciality="Yoga & mobility"
        />
        <TrainerCard
          image={Jake}
          name="Jake Miller"
          speciality="Boxing & endurance"
        />
      </div>
      <div className="mt-5 flex items-center justify-between md:hidden">
        <div className="h-1 w-24 overflow-hidden rounded-full bg-zinc-700">
          <div
            className="h-full rounded-full bg-[#C6FF3D] transition-[width]"
            style={{ width: `${25 + progress * 75}%` }}
          />
        </div>
        <p className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-zinc-400">
          Swipe to meet all 4
          <ArrowLeftRight size={14} className="text-[#C6FF3D]" />
        </p>
      </div>
    </section>
  );
};

export default Trainers;
