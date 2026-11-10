"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Philosophy", href: "#philosophy" },
  { label: "Menu", href: "#menu" },
  { label: "Lokato Camp", href: "#lokato-camp" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <div className="nav-shell page-gutter">
        <Link href="#top" className="brand-lockup" aria-label="Wabisabi Traditional Recipes home" onClick={closeMenu}>
          <span className="brand-logo-wrap">
            <Image
              src="https://res.cloudinary.com/jbbzejqi/image/upload/v1794304962/IMG_9021.jpg"
              alt="Wabisabi Traditional Recipes full brand logo"
              width={240}
              height={240}
              sizes="(max-width: 560px) 50px, 64px"
              loading="lazy"
              className="brand-logo"
            />
          </span>
          <span className="brand-name">WABI SABI <span>TRADITIONAL RECIPES</span></span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link href={link.href} key={link.href} className="nav-link">{link.label}</Link>
          ))}
        </nav>

        <Link href="#contact" className="nav-cta">
          Book an Experience <ArrowUpRight size={15} strokeWidth={1.7} />
        </Link>

        <button
          type="button"
          className="mobile-menu-toggle"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div id="mobile-navigation" className={`mobile-nav ${isOpen ? "mobile-nav-open" : ""}`}>
        <nav aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link href={link.href} key={link.href} className="mobile-nav-link" onClick={closeMenu}>
              {link.label}
            </Link>
          ))}
          <Link href="#contact" className="mobile-nav-cta" onClick={closeMenu}>Book an Experience</Link>
        </nav>
      </div>
    </header>
  );
}
