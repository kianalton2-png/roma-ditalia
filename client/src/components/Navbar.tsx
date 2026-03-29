/* ============================================================
   NAVBAR — Roma D'Italia
   Design: "La Dolce Vita" — Deep Forest Green + Ivory
   Sticky nav that transitions from transparent to solid on scroll
   ============================================================ */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Phone, Menu, X } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663491209057/J3RaKvvRXnB8rmSuZmrsC6/logo_a910f4fd.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Gallery", href: "/#gallery" },
  { label: "About", href: "/#about" },
  { label: "Visit Us", href: "/#visit" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location === "/";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? "bg-[#1A3A2A] shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <img
                src={LOGO_URL}
                alt="Roma D'Italia"
                className="h-10 md:h-12 w-auto object-contain"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="nav-link text-white/90 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Phone CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="tel:7145440273"
                className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
              >
                <Phone size={14} className="text-[#D4A843]" />
                <span className="font-ui text-sm font-medium tracking-wide">714.544.0273</span>
              </a>
              <a
                href="tel:7145440273"
                className="btn-roma-red ml-2"
              >
                Order Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-[#1A3A2A] border-t border-white/10">
            <nav className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="nav-link text-white/90 hover:text-white py-2 border-b border-white/10"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:7145440273"
                className="btn-roma-red text-center mt-2"
                onClick={() => setMobileOpen(false)}
              >
                Call to Order: 714.544.0273
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
