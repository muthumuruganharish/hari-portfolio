import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown, Github, Linkedin, Mail, FileDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingBlob = ({ className, delay = 0 }) => (
  <motion.div
    className={`absolute rounded-full opacity-30 floating-blob ${className}`}
    animate={{
      y: [0, -30, 0],
      x: [0, 15, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      delay,
      ease: 'easeInOut',
    }}
  />
);

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-hero-gradient" />
      
      {/* Floating Blobs */}
      <FloatingBlob
        className="w-72 h-72 md:w-96 md:h-96 bg-primary/20 -top-20 -left-20"
        delay={0}
      />
      <FloatingBlob
        className="w-64 h-64 md:w-80 md:h-80 bg-accent-blue/20 top-1/3 -right-20"
        delay={2}
      />
      <FloatingBlob
        className="w-48 h-48 md:w-64 md:h-64 bg-primary/15 bottom-20 left-1/4"
        delay={4}
      />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-primary font-mono text-sm md:text-base mb-4"
          >
            👋 Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
          >
            <span className="gradient-text">Harish</span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground/90 mb-6"
          >
            MERN Stack Developer
          </motion.h2>

          {/* Typing Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-16 md:h-12 mb-8"
          >
            <p className="text-lg md:text-xl text-muted-foreground font-light">
              <TypeAnimation
                sequence={[
                  'Building scalable full-stack web applications',
                  2000,
                  'Using MongoDB, Express, React, and Node.js',
                  2000,
                  'Creating modern & responsive user interfaces',
                  2000,
                  'Developing RESTful APIs & backend services',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button variant="hero" size="lg" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center gap-4"
          >
            {[
              { icon: Github, href: 'https://github.com/muthumuruganharish', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: Mail, href: '#contact', label: 'Email' },
              { icon: FileDown, href: 'https://drive.google.com/uc?export=download&id=1dayfC1DEg0n8rKAKW1ZcqjysUEzXIE3O', label: 'Resume', download: 'Harish_Resume.pdf' },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="p-3 rounded-full bg-glass/40 border border-glass-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span className="text-xs mb-2 font-mono">Scroll Down</span>
          <ArrowDown size={20} />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
