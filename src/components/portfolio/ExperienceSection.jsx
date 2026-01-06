import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'MERN Stack Training',
    organization: 'Self-Paced Learning & Bootcamp',
    period: '2024',
    description: 'Hands-on training in full-stack development using MongoDB, Express.js, React, and Node.js. Building real-world projects and understanding modern development practices.',
    type: 'training',
    skills: ['MongoDB', 'Express.js', 'React', 'Node.js', 'REST APIs'],
  },
  {
    title: 'Java & OOP Training',
    organization: 'College Curriculum',
    period: '2024 - present',
    description: 'Comprehensive training in Java programming and Object-Oriented Programming concepts. Understanding of data structures, algorithms, and software design patterns.',
    type: 'training',
    skills: ['Java', 'OOP', 'Data Structures', 'Algorithms'],
  },
  {
    title: 'B.Tech in Information Technology',
    organization: 'Chennai, India',
    period: '2022 - 2026 ',
    description: 'Currently pursuing Bachelor\'s degree in Information Technology. Focusing on software development, web technologies, and preparing for industry placements.',
    type: 'education',
    skills: ['Software Development', 'Web Technologies', 'Database Management'],
  },
];

const TimelineItem = ({ experience, index, isInView, isLast }) => {
  const isLeft = index % 2 === 0;
  
  return (
    <div className={`flex items-center gap-4 md:gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 * index }}
        className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'}`}
      >
        <motion.div
          whileHover={{ y: -5 }}
          className="glass-card p-6 inline-block text-left w-full md:max-w-md"
        >
          {/* Icon */}
          <div className={`flex items-center gap-3 mb-4 ${isLeft ? 'md:flex-row-reverse md:justify-start' : ''}`}>
            <div className={`p-2 rounded-lg ${experience.type === 'education' ? 'bg-accent-blue/20 text-accent-blue' : 'bg-primary/20 text-primary'}`}>
              {experience.type === 'education' ? (
                <GraduationCap size={20} />
              ) : (
                <Briefcase size={20} />
              )}
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Calendar size={14} />
              {experience.period}
            </div>
          </div>

          {/* Title & Organization */}
          <h3 className="text-lg font-semibold text-foreground mb-1">
            {experience.title}
          </h3>
          <p className="text-primary text-sm mb-3">{experience.organization}</p>

          {/* Description */}
          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
            {experience.description}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2">
            {experience.skills.map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 text-xs bg-secondary/50 text-foreground/70 rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Timeline Node */}
      <div className="hidden md:flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ delay: 0.2 * index, type: 'spring' }}
          className="w-4 h-4 rounded-full bg-gradient-to-r from-primary to-accent-blue z-10"
        />
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ delay: 0.2 * index + 0.2, duration: 0.5 }}
            className="w-0.5 h-24 bg-gradient-to-b from-primary/50 to-accent-blue/50 origin-top"
          />
        )}
      </div>

      {/* Spacer for alternating layout */}
      <div className="hidden md:block flex-1" />
    </div>
  );
};

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-radial from-primary/3 to-transparent" />
      
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Training & <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My learning journey and professional development path
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto space-y-8 md:space-y-0">
          {/* Mobile Timeline Line */}
          <div className="md:hidden absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-accent-blue/50 to-transparent" />
          
          {experiences.map((experience, index) => (
            <TimelineItem
              key={experience.title}
              experience={experience}
              index={index}
              isInView={isInView}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
