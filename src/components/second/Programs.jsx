import React from "react";
import Card from "./card";
import Boxing from "../../assets/boxing.jpg";
import Cardio from "../../assets/cardio.jpg";
import Crossfit from "../../assets/crossfit.jpg";
import Strength from "../../assets/strength.jpg";
import Yoga from "../../assets/yoga.jpg";
import Zumba from "../../assets/zumba.jpg";

const Programs = () => {
  return (
    <section
      id="programs"
      className=" scroll-mt-16 md:scroll-mt-20px-4 py-8 md:px-8 md:py-12 lg:px-16"
    >
      <div className="mb-6 flex flex-col gap-3 md:mb-10 md:gap-4">
        <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-[#C6FF3D] md:text-sm">
          <span className="h-0.5 w-8 bg-[#C6FF3D] md:w-10" />
          01 / Find your fire
        </p>

        <h2 className="font-display text-5xl uppercase leading-[0.9] text-white md:text-7xl lg:text-8xl">
          Six ways. <br /> No limits.
        </h2>

        <p className="text-base text-zinc-400 md:text-lg lg:text-xl">
          Your goal. Your pace. Your kind of strong.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        <Card
          image={Boxing}
          title="Boxing"
          subtitle="Sharpen Your Focus. Own Every Round."
          href="#"
        />
        <Card
          image={Cardio}
          title="Cardio"
          subtitle="Go Futher.Find your next gear."
          href="#"
        />
        <Card
          image={Crossfit}
          title="Crossfit"
          subtitle="Train For Whatever Comes Next."
          href="#"
        />
        <Card
          image={Strength}
          title="Strength"
          subtitle="Build Muscle.Move Serious Weight."
          href="#"
        />
        <Card
          image={Yoga}
          title="Yoga"
          subtitle="Find Balance. Build From Within."
          href="#"
        />
        <Card
          image={Zumba}
          title="Zumba"
          subtitle="Big Energy. Better Moves."
          href="#"
        />
      </div>
    </section>
  );
};

export default Programs;
