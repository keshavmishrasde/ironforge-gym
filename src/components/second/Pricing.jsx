import React, { useState } from "react";
import { PricingCard } from "./card";

const Pricing = () => {
  const [selected, setSelected] = useState("Pro");
  return (
    <section
      id="pricing"
      className="scroll-mt-16 px-4 py-10 md:scroll-mt-20 md:px-8 md:py-16 lg:px-16"
    >
      <div className="mb-6 flex flex-col gap-3 md:mb-10 md:gap-4">
        <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-[#C6FF3D] md:text-sm">
          <span className="h-0.5 w-8 bg-[#C6FF3D] md:w-10" />
          03 / Invest in you
        </p>

        <h2 className="font-display text-5xl uppercase leading-[0.9] text-white md:text-7xl lg:text-8xl">
          Your goals. <br className="md:hidden" /> Your plan.
        </h2>

        <p className="text-base text-zinc-400 md:text-lg">
          No joining fees. No long contracts. Just work.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
        <PricingCard
          name="Basic"
          tagline="Your foundation starts here."
          price="39"
          features={[
            "Full gym access",
            "Strength & cardio equipment",
            "Locker room & showers",
            "Starter fitness assessment",
          ]}
          cta="Choose Basic"
          selected={selected === "Basic"}
          onSelect={() => setSelected("Basic")}
        />
        <PricingCard
          popular
          name="Pro"
          tagline="More support. More momentum."
          price="69"
          features={[
            "Everything in Basic",
            "Unlimited group classes",
            "2 personal training sessions / month",
            "Monthly progress check-in",
          ]}
          cta="Choose Pro"
          selected={selected === "Pro"}
          onSelect={() => setSelected("Pro")}
        />
        <PricingCard
          name="Elite"
          tagline="All in. Nothing holding you back."
          price="99"
          features={[
            "Everything in Pro",
            "8 personal training sessions / month",
            "Personalized nutrition guidance",
            "Priority booking & recovery zone",
          ]}
          cta="Choose Elite"
          selected={selected === "Elite"}
          onSelect={() => setSelected("Elite")}
        />
      </div>

      <p className="mt-6 text-center text-xs text-zinc-500">
        Billed monthly. Cancel anytime.
      </p>
    </section>
  );
};

export default Pricing;
