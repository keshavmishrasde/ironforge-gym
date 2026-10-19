import React from "react";
import { ArrowLeftRight } from "lucide-react";

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

export { TrainerCard };
export default Card;
