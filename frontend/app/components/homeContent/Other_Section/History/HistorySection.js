"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Rajdhani } from "next/font/google";
import historyData from "./historyData.json";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["500", "600", "700"]
});

const reveal = {
  hidden: {
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

function EventImage({ src, alt }) {
  if (!src) return null;

  return (
    <div className="relative h-[240px] w-full overflow-hidden bg-[#090909] sm:h-[300px]">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain p-4 transition-transform duration-700 hover:scale-105"
        sizes="(max-width: 768px) 100vw, 500px"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
    </div>
  );
}

export default function HistorySection() {
  return (
    <section
      id="history"
      className="relative w-full overflow-hidden bg-black py-24 sm:py-28 md:py-36"
    >
      {/* Background Grid */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          opacity-[0.08]
          bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]
          bg-[size:40px_40px]
        "
      />

      {/* Ambient Red Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[15%]
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-[#FA5147]/10
          blur-[150px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* ================= HEADER ================= */}

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-24 text-center"
        >
          <p
            className={`
              ${rajdhani.className}
              mb-3
              text-sm
              font-bold
              tracking-[0.45em]
              text-[#FA5147]
            `}
          >
            THE JOURNEY
          </p>

          <h2
            className={`
              ${rajdhani.className}
              text-5xl
              font-bold
              uppercase
              tracking-[0.12em]
              text-white
              sm:text-6xl
              md:text-7xl
            `}
          >
            {historyData.title}
          </h2>

          <p
            className={`
              ${rajdhani.className}
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              tracking-[0.18em]
              text-white/45
              sm:text-base
            `}
          >
            {historyData.subtitle}
          </p>

          <div className="mt-7 flex justify-center gap-2">
            <span className="h-1 w-16 bg-[#FA5147] shadow-[0_0_15px_#FA5147]" />
            <span className="h-1 w-4 bg-[#FA5147]/40" />
          </div>
        </motion.div>


        {/* ================= TIMELINE ================= */}

        <div className="relative">

          {/* Central Line */}
          <div
            className="
              absolute
              bottom-0
              left-[19px]
              top-0
              w-px
              bg-gradient-to-b
              from-transparent
              via-[#FA5147]
              to-transparent
              md:left-1/2
              md:-translate-x-1/2
            "
          />

          <div className="space-y-24 md:space-y-32">

            {historyData.milestones.map((item, index) => {

              /* ================= SPECIAL DOUBLE TROPHY ================= */

              if (item.type === "double-trophy") {
                return (
                  <motion.div
                    key={`${item.year}-${item.shortTitle}`}
                    variants={reveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    className="relative"
                  >
                    {/* Node */}
                    <div
                      className="
                        absolute
                        left-[13px]
                        top-8
                        z-20
                        md:left-1/2
                        md:-translate-x-1/2
                      "
                    >
                      <div
                        className="
                          flex h-4 w-4 items-center justify-center
                          rounded-full
                          border-2 border-[#FA5147]
                          bg-black
                          shadow-[0_0_25px_#FA5147]
                        "
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-[#FA5147]" />
                      </div>
                    </div>

                    <div className="pl-12 md:pl-0">

                      {/* Year */}
                      <div
                        className={`
                          ${rajdhani.className}
                          mb-5
                          text-6xl
                          font-bold
                          leading-none
                          text-[#FA5147]
                          md:text-center
                          md:text-8xl
                        `}
                      >
                        {item.year}
                      </div>

                      {/* Double Trophy Card */}
                      <div
                        className="
                          relative
                          mx-auto
                          max-w-5xl
                          overflow-hidden
                          border
                          border-[#FA5147]/40
                          bg-[#080808]
                          shadow-[0_0_60px_rgba(250,81,71,0.10)]
                        "
                      >
                        {/* Top Accent */}
                        <div className="h-1 w-full bg-[#FA5147]" />

                        <div className="p-6 sm:p-8 md:p-12">

                          <div className="text-center">

                            <p
                              className={`
                                ${rajdhani.className}
                                text-xs
                                font-bold
                                tracking-[0.35em]
                                text-[#FA5147]
                              `}
                            >
                              DOUBLE TROPHY
                            </p>

                            <h3
                              className={`
                                ${rajdhani.className}
                                mt-2
                                text-3xl
                                font-bold
                                uppercase
                                tracking-wide
                                text-white
                                sm:text-4xl
                                md:text-5xl
                              `}
                            >
                              {item.title}
                            </h3>

                            <p
                              className={`
                                ${rajdhani.className}
                                mt-2
                                text-sm
                                tracking-[0.2em]
                                text-white/40
                              `}
                            >
                              {item.date}
                            </p>

                          </div>


                          {/* Trophy Images */}
                          <div className="mt-10 grid gap-6 md:grid-cols-2">

                            {item.trophies.map((trophy) => (
                              <div
                                key={trophy.mode}
                                className="
                                  group
                                  relative
                                  overflow-hidden
                                  border
                                  border-white/10
                                  bg-[#050505]
                                "
                              >
                                <div className="relative h-[250px] sm:h-[320px]">
                                  <Image
                                    src={trophy.image}
                                    alt={`${item.title} ${trophy.mode}`}
                                    fill
                                    className="
                                      object-contain
                                      p-6
                                      transition-transform
                                      duration-700
                                      group-hover:scale-105
                                    "
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                  />

                                  <div
                                    className="
                                      pointer-events-none
                                      absolute inset-0
                                      bg-gradient-to-t
                                      from-black
                                      via-transparent
                                      to-transparent
                                    "
                                  />
                                </div>

                                <div className="border-t border-white/10 p-5">

                                  <p
                                    className={`
                                      ${rajdhani.className}
                                      text-xs
                                      font-bold
                                      tracking-[0.25em]
                                      text-[#FA5147]
                                    `}
                                  >
                                    {trophy.mode}
                                  </p>

                                  <div className="mt-1 flex items-end justify-between">

                                    <div>
                                      <p
                                        className={`
                                          ${rajdhani.className}
                                          text-3xl
                                          font-bold
                                          text-white
                                        `}
                                      >
                                        {trophy.placement}
                                      </p>

                                      <p
                                        className={`
                                          ${rajdhani.className}
                                          text-xs
                                          text-white/40
                                        `}
                                      >
                                        {trophy.tier}
                                      </p>
                                    </div>

                                    <p
                                      className={`
                                        ${rajdhani.className}
                                        text-xl
                                        font-bold
                                        text-white
                                      `}
                                    >
                                      {trophy.prize}
                                    </p>

                                  </div>

                                </div>
                              </div>
                            ))}

                          </div>


                          {/* Description */}
                          <p
                            className={`
                              ${rajdhani.className}
                              mx-auto
                              mt-8
                              max-w-3xl
                              text-center
                              text-sm
                              leading-relaxed
                              text-white/50
                              sm:text-base
                            `}
                          >
                            {item.description}
                          </p>

                        </div>
                      </div>

                    </div>
                  </motion.div>
                );
              }


              /* ================= NORMAL EVENT ================= */

              const isLeft = index % 2 === 0;
              const isFeatured = item.featured;

              return (
                <motion.div
                  key={`${item.year}-${item.shortTitle}`}
                  variants={reveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.18 }}
                  className="relative"
                >

                  {/* Timeline Node */}
                  <div
                    className="
                      absolute
                      left-[13px]
                      top-7
                      z-20
                      md:left-1/2
                      md:-translate-x-1/2
                    "
                  >
                    <div
                      className={`
                        flex
                        h-4
                        w-4
                        items-center
                        justify-center
                        rounded-full
                        border-2
                        border-[#FA5147]
                        bg-black
                        ${
                          isFeatured
                            ? "shadow-[0_0_25px_#FA5147]"
                            : "shadow-[0_0_10px_rgba(250,81,71,0.5)]"
                        }
                      `}
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-[#FA5147]" />
                    </div>
                  </div>


                  {/* Desktop Alternating Layout */}
                  <div
                    className={`
                      grid
                      grid-cols-1
                      gap-8
                      pl-12
                      md:grid-cols-2
                      md:gap-0
                      md:pl-0
                    `}
                  >

                    {/* LEFT */}
                    <div
                      className={`
                        ${isLeft ? "md:pr-20" : "md:order-2 md:pl-20"}
                      `}
                    >

                      {/* Image */}
                      <div
                        className="
                          group
                          relative
                          overflow-hidden
                          border
                          border-white/10
                          bg-[#080808]
                        "
                      >
                        <EventImage
                          src={item.image}
                          alt={item.title}
                        />

                        {/* Year Overlay */}
                        <div
                          className={`
                            ${rajdhani.className}
                            absolute
                            bottom-3
                            left-4
                            text-7xl
                            font-bold
                            leading-none
                            text-white/[0.08]
                            sm:text-8xl
                          `}
                        >
                          {item.year}
                        </div>
                      </div>

                    </div>


                    {/* RIGHT / CONTENT */}
                    <div
                      className={`
                        flex
                        flex-col
                        justify-center
                        ${isLeft
                          ? "md:pl-20"
                          : "md:order-1 md:pr-20 md:text-right"
                        }
                      `}
                    >

                      <p
                        className={`
                          ${rajdhani.className}
                          text-xs
                          font-bold
                          tracking-[0.3em]
                          text-[#FA5147]
                        `}
                      >
                        {item.date}
                      </p>

                      <h3
                        className={`
                          ${rajdhani.className}
                          mt-2
                          text-2xl
                          font-bold
                          uppercase
                          tracking-wide
                          text-white
                          sm:text-3xl
                          ${isFeatured
                            ? "drop-shadow-[0_0_18px_rgba(250,81,71,0.25)]"
                            : ""
                          }
                        `}
                      >
                        {item.title}
                      </h3>

                      <p
                        className={`
                          ${rajdhani.className}
                          mt-4
                          text-sm
                          leading-relaxed
                          text-white/50
                          sm:text-base
                        `}
                      >
                        {item.description}
                      </p>


                      {/* Stats */}
                      <div
                        className={`
                          mt-6
                          flex
                          flex-wrap
                          gap-2
                          ${
                            isLeft
                              ? "md:justify-start"
                              : "md:justify-end"
                          }
                        `}
                      >

                        <div className="border border-[#FA5147]/30 bg-[#FA5147]/5 px-4 py-2">
                          <span
                            className={`
                              ${rajdhani.className}
                              text-[10px]
                              tracking-[0.2em]
                              text-white/40
                            `}
                          >
                            RESULT
                          </span>

                          <p
                            className={`
                              ${rajdhani.className}
                              text-2xl
                              font-bold
                              text-[#FA5147]
                            `}
                          >
                            {item.placement}
                          </p>
                        </div>


                        <div className="border border-white/10 bg-white/[0.02] px-4 py-2">
                          <span
                            className={`
                              ${rajdhani.className}
                              text-[10px]
                              tracking-[0.2em]
                              text-white/40
                            `}
                          >
                            TIER
                          </span>

                          <p
                            className={`
                              ${rajdhani.className}
                              text-lg
                              font-bold
                              text-white
                            `}
                          >
                            {item.tier}
                          </p>
                        </div>


                        {item.prize && (
                          <div className="border border-white/10 bg-white/[0.02] px-4 py-2">
                            <span
                              className={`
                                ${rajdhani.className}
                                text-[10px]
                                tracking-[0.2em]
                                text-white/40
                              `}
                            >
                              PRIZE
                            </span>

                            <p
                              className={`
                                ${rajdhani.className}
                                text-lg
                                font-bold
                                text-white
                              `}
                            >
                              {item.prize}
                            </p>
                          </div>
                        )}

                      </div>

                    </div>

                  </div>

                </motion.div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}