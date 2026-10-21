import React from "react";
import { Check, ArrowUpRight } from "lucide-react";

const Card = ({ image, title, subtitle, href = "#" }) => {
  return (
    <a
      href={href}
      className="group block w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-[#141416] transition duration-300 hover:-translate-y-1 hover:border-[#C6FF3D]/40 hover:shadow-lg hover:shadow-black/50"
    >
      {image && (
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="aspect-4/3 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      )}

      <div className="flex items-end justify-between p-5">
        <div>
          <h3 className="font-['Bebas_Neue'] text-3xl uppercase tracking-wide text-white">
            {title}
          </h3>
          <p className="mt-1 text-sm text-gray-400">{subtitle}</p>
        </div>

        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 shrink-0 text-[#C6FF3D] transition group-hover:translate-x-1 group-hover:-translate-y-1"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M7 17L17 7M8 7h9v9" />
        </svg>
      </div>
    </a>
  );
};

const TrainerCard = ({ image, name, speciality }) => {
  return (
    <div className="w-[78%] shrink-0 snap-start overflow-hidden rounded-2xl border border-[#2E2E34] bg-[#141418] sm:w-[45%] md:w-auto">
      <img
        src={image}
        alt={name}
        className="aspect-square w-full object-cover"
      />
      <div className="p-4 md:p-5">
        <h3 className="font-display text-2xl uppercase text-white md:text-3xl">
          {name}
        </h3>
        <p className="mt-1 text-sm text-zinc-400">{speciality}</p>
      </div>
    </div>
  );
};

const PricingCard = ({
  name,
  tagline,
  price,
  features,
  cta,
  popular,
  selected,
  onSelect,
}) => {
  return (
    <div
      onClick={onSelect}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onSelect();
      }}
      className={`flex cursor-pointer flex-col rounded-2xl border bg-[#141418] p-5 transition duration-300 hover:-translate-y-1 md:p-6 ${
        selected
          ? "border-[#C6FF3D] shadow-[0_0_40px_rgba(198,255,61,0.15)]"
          : "border-[#2E2E34] hover:border-[#C6FF3D]/40 hover:shadow-lg hover:shadow-black/50"
      }`}
    >
      <div className="flex items-center justify-between">
        <h3 className="font-display text-3xl uppercase text-white">{name}</h3>
        {popular && (
          <span className="rounded bg-[#C6FF3D] px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-black">
            Most popular
          </span>
        )}
      </div>

      <p className="mt-1 text-sm text-zinc-400">{tagline}</p>

      <p className="mt-5 flex items-end gap-2">
        <span className="font-display text-6xl leading-none text-white">
          ${price}
        </span>
        <span className="pb-1 text-xs text-zinc-400">/ month</span>
      </p>

      <ul className="mt-6 flex flex-col gap-3">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm text-zinc-300">
            <Check size={16} className="mt-0.5 shrink-0 text-[#C6FF3D]" />
            {f}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-8">
        <a
          href="#contact"
          className={`group flex items-center justify-between rounded-xl px-5 py-4 text-sm font-semibold transition duration-300 ${
            selected
              ? "bg-[#C6FF3D] text-black hover:brightness-110"
              : "border border-[#2E2E34] bg-[#1A1A1D] text-white hover:border-[#C6FF3D]"
          }`}
        >
          {cta}
          <ArrowUpRight
            size={16}
            className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>
      </div>
    </div>
  );
};

export { TrainerCard, PricingCard };
export default Card;
