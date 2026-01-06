import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'E-Commerce Website',
    description: 'A responsive e-commerce platform with product listings, shopping cart functionality, and modern UI design.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=80',
    tags: ['HTML', 'CSS', 'JavaScript'],
    features: ['Responsive UI', 'Product Listing', 'Cart Functionality'],
    github: 'https://github.com/muthumuruganharish/ecommerce-website',
    demo: 'https://muthumuruganharish.github.io/ecommerce-website/',
  },
  {
    title: 'To-Do List App',
    description: 'A clean and intuitive task management application built with React, featuring add, edit, delete, and completion tracking.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&auto=format&fit=crop&q=80',
    tags: ['React', 'CSS', 'JavaScript'],
    features: ['Add/Edit Tasks', 'Mark Complete', 'Local Storage'],
    github: 'https://github.com/muthumuruganharish/ToDo-List',
    demo: 'https://github.com/muthumuruganharish/ToDo-List',
  },
  {
    title: 'AI Chatbot',
    description: 'An intelligent chatbot powered by Google\'s Gemini API, featuring natural language processing and contextual responses.',
    image: 'system-artificial-intelligence-chatgptavif.avif',
    tags: ['React', 'Node.js', 'Gemini API', 'TailwindCSS'],
    features: ['Natural Language Processing', 'Contextual Responses', 'Real-time Interaction'],
    github: 'https://github.com/muthumuruganharish/AI-chatbot',
    demo: 'https://github.com/muthumuruganharish/AI-chatbot',
    inProgress: true,
  },
];

const ProjectCard = ({ project, index, isInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.15 * index }}
      className="group relative"
    >
      <div className="relative glass-card overflow-hidden">
        {/* Image Container */}
        <div className="relative h-48 md:h-56 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
          
          {/* In Progress Badge */}
          {project.inProgress && (
            <div className="absolute top-4 right-4 px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
              In Progress
            </div>
          )}
          
          {/* Hover Overlay with Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 flex items-center justify-center gap-4 bg-background/80 backdrop-blur-sm"
          >
            <motion.a
              href="https://github.com/muthumuruganharish"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-primary text-primary-foreground"
              title="View My GitHub Profile"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-accent-blue text-white flex items-center gap-2"
              title="View Project on GitHub"
            >
              <span className="text-sm">Code</span>
              <ExternalLink size={16} />
            </motion.a>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Features */}
          <ul className="mb-4 space-y-1">
            {project.features.map((feature) => (
              <li key={feature} className="text-xs text-muted-foreground flex items-center gap-2">
                <ArrowUpRight className="w-3 h-3 text-primary" />
                {feature}
              </li>
            ))}
          </ul>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs bg-secondary/50 text-primary rounded-md font-mono"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-3">
            <Button variant="glass" size="sm" asChild className="flex-1">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github size={16} />
                Code
              </a>
            </Button>
            <Button variant="hero" size="sm" asChild className="flex-1">
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={16} />
                Demo
              </a>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl bg-gradient-radial from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Some of the projects I've worked on to sharpen my skills
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* More Projects Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button variant="heroOutline" size="lg" asChild className="group">
            <a 
              href="https://github.com/muthumuruganharish" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
            >
              <Github size={20} className="group-hover:scale-110 transition-transform" />
              <span>View More on GitHub</span>
              <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;