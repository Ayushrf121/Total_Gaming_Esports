"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Rajdhani } from "next/font/google";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export default function PlayerModal({ player, onClose }) {
  // Close when clicking outside the modal
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="
        fixed
        inset-0
        z-[100]
        flex
        items-center
        justify-center
        overflow-y-auto
        bg-black/80
        p-3
        backdrop-blur-md
        sm:p-5
      "
      onClick={handleBackdropClick}
    >

      {/* MODAL */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 25 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 25 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 25,
        }}
        className="
          relative
          my-auto
          flex
          w-full
          max-w-5xl
          flex-col
          overflow-hidden
          rounded-[18px]
          border
          border-[#bba878]
          bg-[#090b0d]
          shadow-[0_20px_80px_rgba(0,0,0,0.95)]
          md:min-h-[580px]
          md:flex-row
        "
        onClick={(e) => e.stopPropagation()}
      >

        {/* =========================================
            BACKGROUND
        ========================================= */}

        {/* Main gradient */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-0
            bg-[radial-gradient(circle_at_30%_40%,rgba(210,175,100,0.15),transparent_35%),linear-gradient(135deg,#15181c_0%,#090b0d_55%,#050607_100%)]
          "
        />

        {/* Diagonal pattern */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-0
            bg-[linear-gradient(135deg,transparent_25%,rgba(255,255,255,0.12)_25.5%,transparent_26%,transparent_73%,rgba(255,255,255,0.07)_73.5%,transparent_74%)]
            bg-[length:90px_90px]
            opacity-[0.12]
          "
        />

        {/* Top gold line */}
        <div
          className="
            absolute
            left-[8%]
            right-[8%]
            top-4
            z-30
            h-px
            bg-gradient-to-r
            from-transparent
            via-[#e7d39d]
            to-transparent
          "
        />

        {/* =========================================
            CLOSE BUTTON
        ========================================= */}

        <button
          onClick={onClose}
          aria-label="Close player profile"
          className="
            absolute
            right-3
            top-3
            z-[60]
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-[#bca76d]/40
            bg-black/30
            text-[#bca76d]
            transition-all
            duration-300
            hover:border-[#e7d39d]
            hover:bg-[#bca76d]/10
            hover:text-white
            sm:right-5
            sm:top-5
          "
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>


        {/* =========================================
            LEFT - PLAYER IMAGE
        ========================================= */}

        <div
  className="
    relative z-10
    h-[330px] w-full shrink-0
    overflow-hidden
    border-b border-[#bba878]/30
    sm:h-[400px]
    md:h-auto md:min-h-[580px]
    md:w-[48%]
    md:border-b-0 md:border-r
  "
>
  {/* Golden background glow */}
  <div
    className="
      absolute
      bottom-[12%]
      left-1/2
      h-[65%]
      w-[75%]
      -translate-x-1/2
      rounded-full
      bg-[#d4b66f]/15
      blur-3xl
    "
  />

 <Image
  src={player.image}
  alt={player.name}
  fill
  priority
  className="
    relative z-10
    object-contain
    object-bottom
    origin-bottom

    scale-[0.90]
    translate-y-0

    sm:scale-[0.92]
    md:scale-[0.95]

    drop-shadow-[0_15px_35px_rgba(0,0,0,0.9)]
    transition-transform duration-500
  "
  sizes="(max-width: 767px) 100vw, 48vw"
/>

  {/* Bottom fade */}
  <div
    className="
      pointer-events-none
      absolute inset-x-0 bottom-0 z-20
      h-[25%]
      bg-gradient-to-t
      from-[#050607]
      via-[#050607]/60
      to-transparent
    "
  />
</div>


        {/* =========================================
            RIGHT - PLAYER INFORMATION
        ========================================= */}

        <div
          className="
            relative
            z-10
            flex
            min-w-0
            w-full
            flex-1
            flex-col
            justify-center
            px-6
            py-9
            sm:px-10
            sm:py-12
            md:w-[52%]
            md:px-12
            lg:px-16
          "
        >

          {/* Top decorative line */}
          <div
            className="
              mb-5
              h-px
              w-20
              bg-gradient-to-r
              from-[#d9c58e]
              to-transparent
              sm:w-28
            "
          />

          {/* PLAYER PROFILE */}
          <p
            className="
              mb-3
              text-[9px]
              font-bold
              uppercase
              tracking-[0.4em]
              text-[#d5c18a]
              sm:text-[10px]
            "
          >
            PLAYER PROFILE
          </p>


          {/* IGN */}
          <h2
            className={`
              ${rajdhani.className}
              break-words
              text-4xl
              font-black
              uppercase
              leading-[0.9]
              tracking-[0.08em]
              text-[#f4e4b8]
              drop-shadow-[0_3px_5px_rgba(0,0,0,0.8)]
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            `}
          >
            {player.name}
          </h2>


          {/* Original name */}
          <h3
            className="
              mt-3
              break-words
              text-base
              font-bold
              uppercase
              tracking-[0.18em]
              text-[#bca76d]
              opacity-90
              sm:text-xl
              md:text-2xl
            "
          >
            {player.realName || "Unknown Profile"}
          </h3>


          {/* ROLE + TEAM */}
          <div className="mt-5 flex flex-wrap items-center gap-2 sm:gap-3">

            {/* Role */}
            <span
              className="
                rounded-sm
                border
                border-[#d5c18a]/50
                bg-[#d5c18a]/10
                px-3
                py-1.5
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#d5c18a]
                sm:px-4
                sm:text-xs
              "
            >
              {player.role}
            </span>

            <span className="text-[#bca76d]">
              •
            </span>

            {/* Team */}
            <span
              className="
                max-w-full
                break-words
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.15em]
                text-[#bca76d]
                sm:text-xs
              "
            >
              {player.team}
            </span>

          </div>


          {/* Divider */}
          <div
            className="
              my-6
              h-px
              w-full
              bg-gradient-to-r
              from-[#bda76f]
              via-[#bda76f]/30
              to-transparent
              sm:my-8
            "
          />


          {/* Description */}
          <div className="max-w-xl">

            <p
              className="
                border-l-2
                border-[#bca76d]/50
                pl-4
                text-sm
                leading-6
                text-gray-300
                sm:text-base
                sm:leading-7
                md:text-lg
                md:leading-8
              "
            >
              {player.description ||
                "Player intel is currently classified. Awaiting further data declassification from esports headquarters."}
            </p>

          </div>


          {/* Bottom decoration */}
          <div className="mt-8 flex items-center gap-3">

            <div
              className="
                h-px
                flex-1
                bg-gradient-to-r
                from-[#bda76f]
                to-transparent
              "
            />

            <div
              className="
                h-2
                w-2
                rotate-45
                border
                border-[#d9c58e]
              "
            />

            <div className="h-px w-12 bg-[#bda76f]/40 sm:w-20" />

          </div>

        </div>


        {/* Bottom border */}
        <div
          className="
            absolute
            bottom-4
            left-[8%]
            right-[8%]
            z-30
            h-px
            bg-gradient-to-r
            from-transparent
            via-[#a9925e]
            to-transparent
          "
        />

      </motion.div>
    </div>
  );
}