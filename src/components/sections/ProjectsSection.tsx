"use client";

import { motion } from "framer-motion";
import { ExternalLink, Eye } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Squilo Saúde",
    tech: "Angular",
    image: "/images/squilo.png",
    link: "https://squilosaude.com.br/app/#/register",
    category: "Web App",
  },
  {
    title: "TuxNet",
    tech: "Angular",
    image: "/images/tux.png",
    link: "https://www.redetuxnet.com.br/home",
    category: "Website",
  },
  {
    title: "DS Deliver",
    tech: "React",
    image: "/images/ds.png",
    link: "https://sds2beatrizalves.netlify.app/",
    category: "Web App",
  },
  {
    title: "Move Itaigara",
    tech: "UI/UX",
    image: "/images/moveitaigara.png",
    link: "https://moveitaigara.com.br/",
    category: "Design",
  },
  {
    title: "Surfliving",
    tech: "UI/UX",
    image: "/images/surfliving.png",
    link: "https://surfliving.pt/",
    category: "Design",
  },
  {
    title: "Silvio Agra",
    tech: "UI/UX",
    image: "/images/silvioagra.png",
    link: "https://silvioagra.com.br/",
    category: "Website",
  },
  {
    title: "FSW Barber",
    tech: "React • Next",
    image: "/images/fsw.png",
    link: "https://fsw-barber-five-liart.vercel.app/",
    category: "Web App",
  },
  {
    title: "Pede Aqui",
    tech: "JavaScript",
    image: "/images/delivery.png",
    link: "https://pedefacildelivery.netlify.app/",
    category: "Web App",
  },
  {
    title: "FullStack Designer",
    tech: "UI/UX",
    image: "/images/FullStackDesigner.png",
    link: "/",
    category: "Design",
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projetos"
      className="py-20 bg-[#0b0b0b] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#541CB1_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      </div>

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
            Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-white mt-3 mb-6"
          >
            Projetos <span className="text-brand-teal">Recentes</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-brand-gray-light text-lg"
          >
            Transformando ideias em experiências digitais memoráveis
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative overflow-hidden rounded-2xl bg-brand-dark-secondary border-2 border-brand-gray-light/10 hover:border-brand-teal/50 transition-all duration-300"
                whileHover={{ y: -8 }}
              >
                {/* Image Container */}
                <div className="relative aspect-video overflow-hidden bg-brand-dark">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  
                  {/* Hover Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="w-16 h-16 bg-brand-teal rounded-full flex items-center justify-center shadow-2xl"
                    >
                      <Eye className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-xl font-bold text-white">
                      {project.title}
                    </h3>
                    <ExternalLink className="w-5 h-5 text-white flex-shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                  <div className="flex items-center gap-2">
                  <Badge className="bg-brand-teal/90 backdrop-blur-sm">
                      {project.category}
                    </Badge>
                  <Badge variant="outline" className="text-brand-green border-brand-green">
                    {project.tech}
                  </Badge>
                  </div>
                </div>
              </motion.a>
            </motion.div>
          ))}
        </div>
       
      </div>
    </section>
  );
}

