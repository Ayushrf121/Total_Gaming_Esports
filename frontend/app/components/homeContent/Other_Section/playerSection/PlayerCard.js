"use client";

import Image from "next/image";

export default function PlayerCard({ player }) {
    return (
        <div className="group relative w-full max-w-[360px] aspect-[0.67]">

            {/* Outer glow */}
            <div
                className="
          absolute
          -inset-[2px]
          rounded-[18px]
          bg-gradient-to-b
          from-[#f7e7b0]
          via-[#9f895d]
          to-[#3c3325]
          opacity-70
          blur-[2px]
          transition-all
          duration-500
          group-hover:opacity-100
          group-hover:blur-[4px]
        "
            />

            {/* Main card */}
            <div
                className="
          relative
          h-full
          w-full
          overflow-hidden
          rounded-[16px]
          border
          border-[#bba878]
          bg-[#090b0d]
          shadow-[0_20px_60px_rgba(0,0,0,0.7)]
        "
            >

                {/* Background gradient */}
                <div
                    className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_50%_35%,rgba(210,175,100,0.15),transparent_38%),linear-gradient(180deg,#15181c_0%,#090b0d_55%,#050607_100%)]
          "
                />

                {/* Subtle diagonal pattern */}
                <div
                    className="
            absolute
            inset-0
            opacity-[0.13]
            bg-[linear-gradient(135deg,transparent_25%,rgba(255,255,255,0.15)_25.5%,transparent_26%,transparent_73%,rgba(255,255,255,0.08)_73.5%,transparent_74%)]
            bg-[length:90px_90px]
          "
                />

                {/* Top gold line */}
                <div
                    className="
            absolute
            left-[12%]
            right-[12%]
            top-[14px]
            h-px
            bg-gradient-to-r
            from-transparent
            via-[#e7d39d]
            to-transparent
            opacity-80
          "
                />

                {/* Top-left corner decoration */}
                <div className="absolute left-5 top-5 h-12 w-12">
                    <div className="absolute left-0 top-0 h-px w-8 bg-[#bda76f]" />
                    <div className="absolute left-0 top-0 h-8 w-px bg-[#bda76f]" />
                    <div className="absolute left-2 top-2 h-2 w-2 rotate-45 border border-[#d9c58e]" />
                </div>

                {/* Top-right futuristic decoration */}
                <div className="absolute right-5 top-5 h-20 w-20">
                    <div className="absolute right-0 top-0 h-px w-12 bg-[#bda76f]" />
                    <div className="absolute right-0 top-0 h-8 w-px bg-[#bda76f]" />

                    <div className="absolute right-3 top-7 h-8 w-8 rounded-full border border-[#bda76f]/70" />

                    <div className="absolute right-6 top-10 h-px w-10 rotate-[-25deg] bg-[#d7bf83]" />
                </div>

                {/* Small gold particles */}
                <div className="absolute left-[17%] top-[25%] h-1 w-1 rounded-full bg-[#e5cf91] shadow-[0_0_10px_#e5cf91]" />
                <div className="absolute right-[18%] top-[31%] h-1 w-1 rounded-full bg-[#e5cf91] shadow-[0_0_10px_#e5cf91]" />
                <div className="absolute left-[13%] top-[48%] h-1 w-1 rounded-full bg-[#e5cf91]" />

                {/* Player image */}
                <div className="absolute inset-x-0 top-[17%] h-[58%] flex items-end justify-center">

                    {/* Golden ambient glow */}
                    <div
                        className="
      absolute
      bottom-[5%]
      h-[75%]
      w-[75%]
      rounded-full
      bg-[#d4b66f]/10
      blur-3xl
    "
                    />

                    <Image
                        src={player.image}
                        alt={player.name}
                        fill
                        className="
      relative
      z-10
      left-12
      object-contain
      object-bottom
      scale-[1.55]
      translate-y-[4%]
      drop-shadow-[0_12px_30px_rgba(0,0,0,0.9)]
      transition-transform
      duration-700
      group-hover:scale-[1.62]
    "
                        sizes="360px"
                    />

                    {/* Fade at waist */}
                    <div
                        className="
      pointer-events-none
      absolute
      inset-x-0
      bottom-0
      z-20
      h-[22%]
      bg-gradient-to-t
      from-[#080a0c]
      to-transparent
    "
                    />
                </div>

                {/* Side vertical decorations */}
                <div className="absolute left-5 top-[35%] h-24 w-px bg-gradient-to-b from-transparent via-[#bca76d]/70 to-transparent" />

                <div className="absolute right-5 top-[40%] h-16 w-px bg-gradient-to-b from-transparent via-[#bca76d]/70 to-transparent" />

                {/* Name section */}
                <div className="absolute bottom-[13%] left-0 right-0 z-30 text-center">

                    {/* small line */}
                    <div className="mx-auto mb-3 h-px w-20 bg-gradient-to-r from-transparent via-[#d9c58e] to-transparent" />

                    <h2
                        className="
              font-black
              uppercase
              tracking-[0.08em]
              text-[clamp(2rem,7vw,3.5rem)]
              leading-none
              text-[#f4e4b8]
              drop-shadow-[0_3px_5px_rgba(0,0,0,0.8)]
            "
                    >
                        {player.name}
                    </h2>

                    <div className="mt-3 flex items-center justify-center gap-2">

                        <span className="text-[10px] font-medium tracking-[0.28em] text-[#d5c18a] sm:text-xs">
                            {player.role}
                        </span>

                        <span className="h-1 w-1 rounded-full bg-[#d5c18a]" />

                        <span className="text-[10px] font-medium tracking-[0.28em] text-[#d5c18a] sm:text-xs">
                            {player.team}
                        </span>

                    </div>
                </div>

                {/* Bottom decorative line */}
                <div
                    className="
            absolute
            bottom-[7%]
            left-[12%]
            right-[12%]
            h-px
            bg-gradient-to-r
            from-transparent
            via-[#a9925e]
            to-transparent
          "
                />

                {/* Bottom corner ornaments */}
                <div className="absolute bottom-5 left-5 h-8 w-8">
                    <div className="absolute bottom-0 left-0 h-px w-6 bg-[#bda76f]" />
                    <div className="absolute bottom-0 left-0 h-6 w-px bg-[#bda76f]" />
                </div>

                <div className="absolute bottom-5 right-5 h-8 w-8">
                    <div className="absolute bottom-0 right-0 h-px w-6 bg-[#bda76f]" />
                    <div className="absolute bottom-0 right-0 h-6 w-px bg-[#bda76f]" />
                </div>

                {/* Hover shine */}
                <div
                    className="
            pointer-events-none
            absolute
            inset-0
            z-40
            translate-x-[-120%]
            skew-x-[-20deg]
            bg-gradient-to-r
            from-transparent
            via-white/[0.07]
            to-transparent
            transition-transform
            duration-1000
            group-hover:translate-x-[120%]
          "
                />

            </div>
        </div>
    );
}