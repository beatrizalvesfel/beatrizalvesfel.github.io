"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[#0b0b0b] backdrop-blur-md shadow-lg"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 bg-[#0b0b0b]">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Logo variant="white" />

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-white hover:text-brand-teal transition-colors font-medium"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Button asChild size="lg" className="ml-4">
                <a href="/cv/BEATRIZ-ALVES-CV.pdf" download target="_blank">
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
              </Button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2 hover:bg-brand-teal/20 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <ul className="py-4 space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-4 py-2 text-white hover:bg-brand-teal/20 hover:text-brand-teal transition-colors rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="px-4 pt-2">
              <Button asChild size="lg" className="w-full">
                <a href="/cv/BEATRIZ-ALVES-CV.pdf" download target="_blank">
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

