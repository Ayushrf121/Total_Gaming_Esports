"use client";

import { Rajdhani } from "next/font/google";
import InstagramIcon from "../../utils/icons/InstagramIcon";
import YoutubeIcon from "../../utils/icons/YoutubeIcon";
import DiscordIcon from "../../utils/icons/DiscordIcon";
import XIcon from "../../utils/icons/XIcon";
const rajdhani = Rajdhani({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export default function Footer() {
    const exploreLinks = [
        { name: "HOME", href: "/" },
        { name: "ABOUT", href: "#about" },
        { name: "TEAM", href: "#team" },
        { name: "BLOG", href: "#blog" },
        { name: "GALLERY", href: "#gallery" },
    ];

    const socialLinks = [
        {
            name: "Instagram",
            href: "https://www.instagram.com/totalgamingesports/?hl=en",
            icon: InstagramIcon,
            color: "text-[#E4405F]",
            glow:
                "hover:drop-shadow-[0_0_12px_rgba(228,64,95,0.8)]",
        },
        {
            name: "YouTube",
            href: "https://www.youtube.com/@tgesports07",
            icon: YoutubeIcon,
            color: "text-[#FF0000]",
            glow:
                "hover:drop-shadow-[0_0_12px_rgba(255,0,0,0.8)]",
        },
        {
            name: "Discord",
            href: "https://discord.com/channels/501988883995557898/771002945344503818",
            icon: DiscordIcon,
            color: "text-[#5865F2]",
            glow:
                "hover:drop-shadow-[0_0_12px_rgba(88,101,242,0.8)]",
        },
        {
            name: "X",
            href: "https://x.com/total_gaming093?lang=en",
            icon: XIcon,
            color: "text-white",
            glow:
                "hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.7)]",
        },
    ];

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer
            className={`${rajdhani.className} relative w-full overflow-hidden bg-black text-white`}
        >
            {/* TOP RED LINE */}
            <div className="h-[2px] w-full bg-[#FA5147]" />

            {/* MAIN FOOTER */}
            <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:py-20">

                <div className="grid grid-cols-1 gap-14 md:grid-cols-[1.5fr_1fr_1fr]">

                    {/* BRAND */}
                    <div className="max-w-md">
                        <a href="/" className="inline-block">
                            <img
                                src="/Logo/official_logo.png"
                                alt="Total Gaming"
                                className="h-24 w-auto object-contain"
                            />
                        </a>

                        <p className="mt-5 text-xl font-semibold uppercase tracking-[0.15em] text-white">
                            Built for the battle.
                        </p>

                        <p className="mt-4 max-w-sm text-sm leading-6 tracking-wide text-white/45">
                            Built through competition. Driven by the game.
                            Made for the next battle.
                        </p>
                    </div>

                    {/* EXPLORE */}
                    <div>

                        <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.3em] text-[#FA5147]">
                            Explore
                        </h3>

                        <nav className="flex flex-col gap-3">

                            {exploreLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="
                    w-fit
                    text-sm
                    font-semibold
                    uppercase
                    tracking-[0.15em]
                    text-white/60
                    transition-all
                    duration-300
                    hover:translate-x-2
                    hover:text-[#FA5147]
                  "
                                >
                                    {link.name}
                                </a>
                            ))}

                        </nav>

                    </div>

                    {/* SOCIALS */}
                    <div>

                        <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.3em] text-[#FA5147]">
                            Follow the Journey
                        </h3>

                        <div className="flex items-center gap-5">

                            {socialLinks.map((social) => {
                                const Icon = social.icon;

                                return (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.name}
                                        className={`
                      ${social.color}
                      ${social.glow}
                      transition-all
                      duration-300
                      hover:scale-125
                    `}
                                    >
                                        <Icon className="h-7 w-7" />
                                    </a>
                                );
                            })}

                        </div>

                    </div>

                </div>
            </div>

            {/* DIVIDER */}
            <div className="mx-auto max-w-7xl px-6 md:px-10">
                <div className="h-px w-full bg-white/10" />
            </div>

            {/* BOTTOM BAR */}
            <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-6 md:flex-row md:items-center md:justify-between md:px-10">

                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/30">
                    TG // ESPORTS
                </div>

                <div className="text-xs font-semibold uppercase tracking-[0.15em] text-white/30">
                    © 2026 Total Gaming Esports
                </div>

                <button
                    type="button"
                    onClick={scrollToTop}
                    className="
            group
            flex
            items-center
            gap-2
            text-xs
            font-bold
            uppercase
            tracking-[0.2em]
            text-white/50
            transition-colors
            duration-300
            hover:text-[#FA5147]
          "
                >
                    Back to Top

                    <span className="transition-transform duration-300 group-hover:-translate-y-1">
                        ↑
                    </span>
                </button>

            </div>

        </footer>
    );
}
