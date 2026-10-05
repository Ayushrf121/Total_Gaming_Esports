"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Rajdhani } from "next/font/google";
import tournamentRecaps from "./tournamentRecapsData";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function TournamentRecaps() {
  const [playingVideo, setPlayingVideo] = useState(null);

  return (
    <section className="relative w-full overflow-hidden bg-black py-24">

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <div className="mb-14">
          <p
            className={`${rajdhani.className} mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#FA5147]`}
          >
            Tournament Recaps
          </p>

          <h2
            className={`${rajdhani.className} text-5xl font-bold uppercase text-white md:text-7xl`}
          >
            FROM THE <span className="text-[#FA5147]">ARENA</span>
          </h2>

          <p
            className={`${rajdhani.className} mt-4 max-w-xl text-lg text-white/50`}
          >
            Relive the moments that shaped the journey, defined the battles, and built the legacy.
          </p>
        </div>

        {/* VIDEOS */}
        <div className="grid gap-8 md:grid-cols-2">

          {tournamentRecaps.map((recap) => (
            <motion.div
              key={recap.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group overflow-hidden border rounded-2xl border-white/10 bg-[#080808]"
            >

              {/* VIDEO */}
              <div className="relative aspect-video rounded-2xl w-full overflow-hidden bg-black">

                {playingVideo === recap.id ? (
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${recap.videoId}?autoplay=1`}
                    title={recap.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <button
                    type="button"
                    onClick={() => setPlayingVideo(recap.id)}
                    className="relative h-full w-full"
                  >
                    {/* YOUTUBE'S NATURAL THUMBNAIL */}
                    <Image
                      src={`https://img.youtube.com/vi/${recap.videoId}/maxresdefault.jpg`}
                      alt={recap.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      unoptimized
                    />

                    {/* DARK OVERLAY */}
                    <div className="absolute inset-0 bg-black/30 transition-all duration-300 group-hover:bg-black/45" />

                    {/* PLAY BUTTON */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className="
                          flex
                          h-16
                          w-16
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-[#FA5147]
                          bg-[#FA5147]
                          shadow-[0_0_35px_rgba(250,81,71,0.45)]
                          transition-all
                          duration-300
                          group-hover:scale-110
                          group-hover:shadow-[0_0_50px_rgba(250,81,71,0.7)]
                        "
                      >
                        <span
                          className="
                            ml-1
                            h-0
                            w-0
                            border-y-[9px]
                            border-l-[14px]
                            border-y-transparent
                            border-l-black
                          "
                        ></span>
                      </div>
                    </div>
                  </button>
                )}

              </div>

              {/* INFO */}
              <div className="p-6">

                <div className="mb-3 flex items-center gap-3 text-xs font-semibold tracking-[0.2em]">
                  <span className="text-[#FA5147]">
                    {recap.year}
                  </span>

                  <span className="text-white/20">•</span>

                  <span className="text-white/40">
                    {recap.tier}
                  </span>
                </div>

                <h3
                  className={`${rajdhani.className} text-2xl font-bold uppercase text-white`}
                >
                  {recap.title}
                </h3>

                <p
                  className={`${rajdhani.className} mt-1 text-white/50`}
                >
                  {recap.subtitle}
                </p>

                <div
                  className={`${rajdhani.className} mt-5 text-sm font-bold tracking-[0.2em] text-[#FA5147]`}
                >
                  {recap.result}
                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}