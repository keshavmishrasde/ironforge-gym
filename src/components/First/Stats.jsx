import React from "react";

const stats = [
  { value: "2000+", label: "Members" },
  { value: "25", label: "Trainers" },
  { value: "10", label: "Years" },
  { value: "50+", label: "Classes/Week" },
];

const Stats = () => {
  return (
    <div className="mt-6 grid grid-cols-2 gap-3 md:mt-10 md:gap-4 lg:grid-cols-4">
      {stats.map((s) => (
        <div
          key={s.label}
          className="rounded-xl border border-[#2E2E34] bg-[#222226] p-5 md:p-6"
        >
          <p className="font-display text-4xl text-white md:text-5xl">
            {s.value}
          </p>
          <p className="mt-1 text-sm text-zinc-400">{s.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
