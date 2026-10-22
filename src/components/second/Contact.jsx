import React, { useState } from "react";
import { MapPin, Clock, Phone, ArrowUpRight } from "lucide-react";

const inputClass =
  "w-full rounded-lg border border-[#2E2E34] bg-[#141418] px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none transition focus:border-[#C6FF3D]";

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSent(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form); // backend baad mein
    setForm({ name: "", phone: "", message: "" });
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="scroll-mt-16 px-4 py-10 md:scroll-mt-20 md:px-8 md:py-16 lg:px-16"
    >
      {/* Header */}
      <div className="mb-6 flex flex-col gap-3 md:mb-10 md:gap-4">
        <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-[#C6FF3D] md:text-sm">
          <span className="h-0.5 w-8 bg-[#C6FF3D] md:w-10" />
          04 / Make your move
        </p>

        <h2 className="font-display text-5xl uppercase leading-[0.9] text-white md:text-7xl lg:text-8xl">
          Walk in. <br className="md:hidden" /> Level up.
        </h2>

        <p className="text-base text-zinc-400 md:text-lg">
          Got a question? Let's talk goals, plans, and your first day at
          IronForge.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium text-white">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
              className={inputClass}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="text-sm font-medium text-white">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={form.phone}
              onChange={handleChange}
              placeholder="(555) 000-0000"
              className={inputClass}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us what you're working toward"
              className={`${inputClass} h-40 resize-none lg:h-64`}
            />
          </div>

          <button
            type="submit"
            className="group mt-2 flex items-center justify-between rounded-xl bg-[#C6FF3D] px-5 py-4 text-sm font-semibold text-black transition hover:brightness-110"
          >
            Send Message
            <ArrowUpRight
              size={16}
              className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </button>

          {sent && (
            <p className="text-sm text-[#C6FF3D]">
              Thanks! We'll get back to you soon.
            </p>
          )}
        </form>

        {/* Info + map */}
        <div className="flex flex-col gap-4 lg:gap-6">
          <div className="rounded-2xl border border-[#2E2E34] bg-[#141418] p-5 md:p-6">
            <h3 className="font-display text-3xl uppercase leading-none text-white md:text-4xl">
              Meet us on the floor.
            </h3>

            <div className="mt-6 flex flex-col gap-5">
              <div className="flex gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-[#C6FF3D]" />
                <div>
                  <p className="text-sm font-semibold text-white">
                    IronForge Gym · East Austin
                  </p>
                  <p className="mt-1 text-sm text-zinc-400">
                    1240 E 6th Street Austin, TX 78702
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Clock size={18} className="mt-0.5 shrink-0 text-[#C6FF3D]" />
                <div>
                  <p className="text-sm font-semibold text-white">
                    More time to put in the work.
                  </p>
                  <p className="mt-1 text-sm text-zinc-400">
                    <span className="inline-block w-20">Mon–Fri</span>
                    5:00 AM – 11:00 PM
                  </p>
                  <p className="text-sm text-zinc-400">
                    <span className="inline-block w-20">Sat–Sun</span>
                    7:00 AM – 9:00 PM
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Phone size={18} className="mt-0.5 shrink-0 text-[#C6FF3D]" />
                <p className="text-sm font-semibold text-white">
                  (512) 555-0148
                </p>
              </div>
            </div>

            <p className="mt-6 text-xs text-zinc-500">
              Sample location &amp; contact details
            </p>
          </div>

          {/* Map placeholder */}
          <div className="relative h-44 overflow-hidden rounded-2xl border border-[#2E2E34] bg-[#1A1A1D] md:h-56">
            <div className="absolute inset-x-0 top-1/4 h-4 bg-[#141418]" />
            <div className="absolute inset-x-0 top-2/3 h-4 bg-[#141418]" />
            <div className="absolute inset-y-0 left-1/4 w-4 bg-[#141418]" />
            <div className="absolute inset-y-0 left-3/4 w-4 bg-[#141418]" />

            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C6FF3D] text-black">
                <MapPin size={18} />
              </span>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-white">
                IronForge · East Austin
              </p>
              <p className="text-[10px] uppercase tracking-widest text-zinc-500">
                Area map / placeholder
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
