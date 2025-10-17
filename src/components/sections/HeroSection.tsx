"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Code2, Star, Download, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-[#0b0b0b] overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-teal/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-3xl animate-pulse" />
        
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#54C0B1_1px,transparent_1px),linear-gradient(to_bottom,#54C0B1_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.02]" />
        {/* Spotlight */}
        <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent_60%)]" />
        
      
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 text-brand-green text-sm md:text-base mb-4 px-3 py-1 rounded-full glass-effect"
            >
              <Sparkles className="w-4 h-4 text-brand-green" />
              Disponível para novos projetos
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl sm:text-6x1 font-extrabold text-white mb-4 tracking-tight"
            >
              Beatriz{" "}
              <span className="relative inline-block">
                <span className="text-brand-teal">Alves</span>

                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-brand-teal to-brand-green"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                  Front End Engineer
                </h2>
              <p className="text-brand-gray-light/80 max-w-xl mx-auto lg:mx-0">
                Construo interfaces performáticas, acessíveis e com visual impecável, unindo design e código para gerar impacto real no seu negócio.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button asChild size="xl" className="group">
                <a href="#projetos">
                  Ver Projetos
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild size="xl" variant="outline" className="bg-transparent text-white border-white hover:bg-transparent hover:text-white hover:border-white hover:shadow-lg hover:scale-105 transition-all">
                <a href="https://wa.me/5575999161771">Fale Comigo</a>
              </Button>
            </motion.div>


          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end my-24 lg:my-0"
          >
            <div className="relative w-full max-w-lg">
              {/* Animated Gradient Background */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-tr from-brand-teal via-brand-green to-brand-teal rounded-full blur-3xl opacity-40"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {/* Decorative Circles */}
              <motion.div
                className="absolute -top-10 -right-10 w-32 h-32 border-4 border-brand-teal/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -bottom-10 -left-10 w-24 h-24 border-4 border-brand-green/30 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              
              <motion.div 
                className="relative rounded-3xl overflow-hidden glass-effect shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="/images/imageHome.png"
                  alt="Beatriz Alves"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-teal/20 via-transparent to-transparent" />
              </motion.div>

              {/* Metrics Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-8 right-4 lg:-right-3 glass-effect rounded-xl p-4 shadow-xl backdrop-blur-lg"
              >
                <div className="grid grid-cols-1 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-extrabold text-white">+50</div>
                    <div className="text-xs text-brand-gray-light">Projetos</div>
                  </div>
                </div>
              </motion.div>

              {/* Testimonial Bubble */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute -top-32 left-0 lg:-left-32 glass-effect rounded-xl p-4 max-w-[260px]"
              >
                <p className="text-sm text-brand-almost-white">
                  “A Beatriz entendeu exatamente o que eu precisava. Minha nova identidade é elegante e autêntica — meus pacientes elogiam até hoje.”
                </p>
                <div className="mt-2 flex items-center gap-2 text-xs text-brand-gray-light">
                  Dr. Marconi Costa
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-brand-teal rounded-full flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-brand-teal rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}

