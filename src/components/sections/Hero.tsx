"use client";

import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

const navigation = [
  { label: "About", href: "#about" },
  { label: "What We Do", href: "#what-we-do" },
  { label: "Our Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Industries", href: "#industries" },
];

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative min-h-svh overflow-hidden bg-black text-white">
      {/* Hero Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero-space.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Header */}
      <header className="relative z-30 mx-auto flex h-20.5 max-w-300 items-center justify-between px-6 sm:px-8 lg:px-10">
        {/* Logo */}
        <a
          href="#"
          className="font-serif text-[17px] tracking-[-0.02em] sm:text-[19px]"
        >
          <span className="text-[#c9853d]">Outset</span>{" "}
          <span className="text-white">Studio</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex xl:gap-9">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[13px] text-white/90 transition-colors duration-200 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Contact */}
        <a
          href="#contact"
          className="hidden border border-white/70 px-6 py-2.25 text-[13px] transition-all duration-200 hover:bg-white hover:text-black lg:block"
        >
          Contact
        </a>

        {/* Mobile Menu Button */}
        <IconButton
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation"
            className="lg:hidden"
            sx={{
                color: "white",
                padding: "7px",
                backgroundColor: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "999px",
                "&:hover": {
                backgroundColor: "rgba(255,255,255,0.14)",
                },
            }}
        >
            <MenuIcon fontSize="small" />
        </IconButton>
      </header>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-xl lg:hidden">
          <div className="flex h-20.5 items-center justify-between border-b border-white/10 bg-white/3 px-6">
            <a
              href="#"
              onClick={() => setMenuOpen(false)}
              className="font-serif text-[18px]"
            >
              <span className="text-[#c9853d]">Outset</span>{" "}
              <span className="text-white">Studio</span>
            </a>

            <IconButton
                onClick={() => setMenuOpen(false)}
                aria-label="Close navigation"
                sx={{
                    color: "rgba(255,255,255,0.9)",
                    padding: "6px",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: "999px",
                }}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
          </div>

          <nav className="flex flex-col px-6 pt-10">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/8 py-5 font-serif text-[21px] text-white/95 transition-colors duration-200 hover:text-[#c9853d]"
              >
                {item.label}
              </a>
            ))}

            <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-8 inline-block w-fit border border-white/40 bg-white/4 px-7 py-3 text-sm backdrop-blur-sm transition-all duration-200 hover:bg-white hover:text-black"
            >
                Contact
            </a>
          </nav>
        </div>
      )}

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex min-h-149.5 max-w-250 flex-col items-center justify-center px-6 pb-28 pt-10 text-center sm:px-8">
        <h1 className="max-w-[320px] font-serif text-[27px] leading-[1.02] tracking-tight sm:max-w-150 sm:text-[44px] md:max-w-212.5 md:text-[50px] lg:max-w-237.5 lg:text-[57px]">
            We Transform{" "}
            <span className="italic">Empty Spaces</span> Into{" "}
            <br className="hidden sm:block" />
            Business-Driving Experiences.
        </h1>

        <p className="mt-6 max-w-190 text-[11px] leading-[1.7] text-white/80 sm:text-[13px] md:text-[14px]">
          Outset Studio brings strategy, design, execution, digital presence,
          and growth together to transform empty spaces into distinctive
          outlets that attract customers, strengthen brands, and drive growth.
        </p>

        {/* CTA */}
        <div className="mt-7 flex items-center gap-6">
          <a
            href="#contact"
            className="border border-white/80 px-5 py-2.5 text-[11px] transition-all duration-200 hover:bg-white hover:text-black sm:px-7 sm:py-3 sm:text-[13px]"
          >
            Start a Project →
          </a>

          <a
            href="#work"
            className="text-[11px] text-white/90 transition-colors hover:text-white sm:text-[13px]"
          >
            Explore Our Work ↗
          </a>
        </div>
      </div>
    </section>
  );
}