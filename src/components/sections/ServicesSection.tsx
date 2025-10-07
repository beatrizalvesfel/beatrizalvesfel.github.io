"use client";

import { motion } from "framer-motion";
import { Palette, Code, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Palette,
    title: "Web Design",
    description:
      "Layout de sites web, Hotsites e landing pages. Criação de Interfaces coerente com sua Identidade Visual.",
    color: "text-brand-teal",
    bgColor: "bg-brand-teal/10",
    borderColor: "hover:border-brand-teal",
  },
  {
    icon: Code,
    title: "Programação Web",
    description:
      "Criação e desenvolvimento de sites sob medida e otimizados. Código limpo, performático e escalável.",
    color: "text-brand-teal",
    bgColor: "bg-brand-teal/10",
    borderColor: "hover:border-brand-teal",
  },
  {
    icon: Sparkles,
    title: "Design Gráfico",
    description:
      "Criação de artes: Banners, infográficos, e-mail marketing e materiais visuais que convertem.",
    color: "text-brand-teal",
    bgColor: "bg-brand-teal/10",
    borderColor: "hover:border-brand-teal",
  },
];

export function ServicesSection() {
  return (
    <section
      id="servicos"
      className="py-20 bg-[#0b0b0b] relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl" />

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
            O que eu faço
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-white mt-3 mb-6"
          >
            Meus <span className="text-brand-teal">Serviços</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-brand-gray-light text-lg"
          >
            Soluções completas para transformar sua presença digital em resultados reais
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card
                  className={`h-full glass-effect ${service.borderColor} transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group`}
                >
                  <CardHeader>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow`}
                    >
                      <Icon className={`w-8 h-8 ${service.color}`} />
                    </motion.div>
                    <CardTitle className="text-2xl mb-3 text-white group-hover:text-brand-teal transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed text-brand-gray-light">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                  
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

