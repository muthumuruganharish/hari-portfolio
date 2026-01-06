import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code, 
  Server, 
  Database, 
  Wrench, 
  Lightbulb 
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code,
    color: 'from-cyan-500 to-blue-500',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    icon: Server,
    color: 'from-green-500 to-emerald-500',
    skills: ['Node.js', 'Express.js'],
  },
  {
    title: 'Database',
    icon: Database,
    color: 'from-yellow-500 to-orange-500',
    skills: ['MongoDB', 'MySQL'],
  },
  {
    title: 'Tools',
    icon: Wrench,
    color: 'from-purple-500 to-pink-500',
    skills: ['Git', 'GitHub', 'Postman',"Thunder Client","Figma"],
  },
  {
    title: 'Concepts',
    icon: Lightbulb,
    color: 'from-primary to-accent-blue',
    skills: ['REST APIs', 'CRUD', 'Authentication', 'React Hooks'],
  },
  {
    title: 'Languages',
    icon: Code,
    color: 'from-rose-500 to-pink-500',
    skills: ['Java', 'Python'],
  },
];

const SkillCard = ({ category, index, isInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative"
    >
      {/* Glow Effect on Hover */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${category.color} rounded-2xl opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500`} />
      
      <div className="relative glass-card p-6 h-full">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className={`p-2.5 rounded-xl bg-gradient-to-r ${category.color}`}>
            <category.icon className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill, skillIndex) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 + index * 0.1 + skillIndex * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="px-3 py-1.5 text-sm bg-secondary/50 text-foreground/80 rounded-full border border-glass-border hover:border-primary/50 hover:text-primary transition-all duration-300"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background Accent */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-accent-blue/5 to-transparent" />
      
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.title}
              category={category}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Tech Stack Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-4">Primary Stack</p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {['MongoDB', 'Express.js', 'React', 'Node.js'].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + index * 0.1, type: 'spring' }}
                className="px-6 py-3 glass-card font-mono text-sm md:text-base gradient-text font-medium"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
