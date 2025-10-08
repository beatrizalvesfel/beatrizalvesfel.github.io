"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MessageCircle, Download, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const contactMethods = [
  {
    icon: Linkedin,
    title: "LinkedIn",
    description: "Vamos nos conectar",
    link: "https://www.linkedin.com/in/beatrizalvesfel/",
    color: "bg-brand-teal",
    hoverColor: "hover:bg-brand-teal/90",
  },
  {
    icon: Mail,
    title: "Email",
    description: "Envie uma mensagem",
    link: "mailto:dev.betrizalves@gmail.com",
    color: "bg-brand-teal",
    hoverColor: "hover:bg-brand-teal/90",
  },
  {
    icon: Github,
    title: "GitHub",
    description: "Veja meu código",
    link: "https://github.com/beatrizalvesfel",
    color: "bg-brand-teal",
    hoverColor: "hover:bg-brand-teal/90",
  },
];

export function ContactSection() {
  return (
    <section
      id="contato"
      className="py-20 bg-[#0b0b0b] relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-brand-green font-semibold text-sm uppercase tracking-wider"
          >
            Let&apos;s Program Together
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-white mt-3 mb-6"
          >
            Vamos <span className="text-brand-teal">Conversar?</span>
          </motion.h2>
        </motion.div>

        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mb-12"
        >
          <Card className="bg-brand-teal border-none shadow-2xl overflow-hidden">
            <CardContent className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="text-white">
                  <h3 className="text-3xl font-bold mb-4">
                    Pronto para iniciar seu projeto?
                  </h3>
                  <p className="text-white/90 text-lg mb-6">
                    Vamos transformar suas ideias em realidade. Entre em contato
                    e receba uma proposta personalizada em até 24h!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      asChild
                      size="lg"
                      variant="secondary"
                      className="bg-white text-brand-teal hover:bg-white/90 w-full sm:w-auto"
                    >
                      <a
                        href="https://wa.me/5575999161771"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="w-5 h-5" />
                        Fale Comigo Agora
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white/10 w-full sm:w-auto"
                    >
                      <a href="/cv/BEATRIZ-ALVES-CV.pdf" download>
                        <Download className="w-5 h-5" />
                        Download CV
                      </a>
                    </Button>
                  </div>
                </div>
                <div className="hidden lg:flex justify-center">
                  <div className="relative">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="w-48 h-48 border-4 border-white/20 border-t-white rounded-full"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Send className="w-16 h-16 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

