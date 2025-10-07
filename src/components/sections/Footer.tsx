"use client";

import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Logo } from "@/components/Logo";

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/beatrizalvesfel/",
    label: "LinkedIn",
  },
  {
    icon: Github,
    href: "https://github.com/beatrizalvesfel",
    label: "GitHub",
  },
  {
    icon: Mail,
    href: "mailto:dev.betrizalves@gmail.com",
    label: "Email",
  },
];

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Sobre", href: "#sobre" },
  { name: "Serviços", href: "#servicos" },
  { name: "Projetos", href: "#projetos" },
  { name: "Contato", href: "#contato" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0b0b0b] text-white border-t border-brand-gray-light/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-3 gap-8 border-b border-brand-gray-light/20">
          {/* Brand Section */}
          <div>
            <Logo variant="white" className="mb-4" />
            <p className="text-brand-gray-light mb-6">
              Front End Engineer apaixonada por criar experiências digitais
              incríveis e funcionais.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-brand-dark-secondary hover:bg-brand-teal rounded-lg flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-brand-gray-light hover:text-brand-teal transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-brand-gray-light">
              <p>
                <span className="font-medium text-white">Email:</span>
                <br />
                dev.betrizalves@gmail.com
              </p>
              <p>
                <span className="font-medium text-white">Disponível para:</span>
                <br />
                Freelance • Full-time • Projetos
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-brand-gray-light text-sm text-center md:text-left">
            © {currentYear}{" "}
            <span className="text-brand-teal font-semibold">
              BEAFEL Web Developer
            </span>
            . Todos os direitos reservados.
          </p>
          <p className="text-brand-gray-light text-sm flex items-center gap-2">
            Feito com <Heart className="w-4 h-4 text-brand-teal fill-brand-teal" />{" "}
            por Beatriz Alves
          </p>
        </div>
      </div>
    </footer>
  );
}

