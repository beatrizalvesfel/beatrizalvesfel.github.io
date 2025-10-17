"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const skills = [
  { name: "UI/UX Design", level: 95, color: "bg-brand-teal" },
  { name: "Website Design", level: 90, color: "bg-brand-teal" },
  { name: "Angular", level: 75, color: "bg-brand-teal" },
  { name: "ReactJS", level: 85, color: "bg-brand-teal" },
  { name: "NextJS", level: 95, color: "bg-brand-teal" },
  { name: "TypeScript", level: 90, color: "bg-brand-teal" },
];

const technologies = [
  "React", "Next.js", "Angular", "TypeScript", "Tailwind CSS",
  "Figma", "UI/UX", "HTML5", "CSS3", "JavaScript"
];

export function AboutSection() {
  return (
    <section
      id="sobre"
      className="py-16 bg-[#0b0b0b] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#54C0B1_1px,transparent_1px),linear-gradient(to_bottom,#54C0B1_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-5" />
        <div className="absolute top-20 right-20 w-64 h-64 bg-brand-teal/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-brand-green/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Animated Background */}
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-br from-brand-teal/30 via-brand-green/20 to-brand-teal/30 rounded-3xl blur-2xl"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-6 -left-6 w-20 h-20 rounded-xl glass-effect"
                animate={{ rotate: [0, 90, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
              
              <motion.div 
                className="relative rounded-3xl overflow-hidden glass-effect shadow-2xl"
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="/images/imageSobre.png"
                  alt="Beatriz Alves"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-teal/10 via-transparent to-transparent" />
              </motion.div>
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 right-2 lg:-right-6 glass-effect p-6 rounded-2xl shadow-xl"
              >
                <div className="text-4xl font-bold text-white">6+</div>
                <div className="text-sm text-white">Anos de</div>
                <div className="text-sm text-white">Experiência</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-block mb-4"
            >
              <span className="text-brand-green font-semibold text-sm uppercase tracking-wider">
                Conheça-me
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              Sobre <span className="text-brand-teal">Mim</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-brand-gray-light text-lg mb-8 leading-relaxed"
            >
              Formada em Sistemas de Informação e
              apaixonada por design e tecnologias do desenvolvimento Web.
              Transformo ideias em experiências digitais memoráveis, combinando
              design criativo, código limpo e eficiente.
            </motion.p>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h3 className="text-lg font-semibold text-white mb-4">
                Tecnologias & Ferramentas
              </h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <Badge key={index} variant="outline" className="text-sm px-3 py-1 bg-brand-teal text-white">
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

