import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, MapPin, Code2, Target } from 'lucide-react';
import harishProfile from '@/assets/harish-profile.jpg';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const highlights = [
    { icon: GraduationCap, text: 'Final Year IT Student' },
    { icon: MapPin, text: 'Chennai, India' },
    { icon: Code2, text: 'Full Stack Developer' },
    { icon: Target, text: 'Placement Ready' },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey and passion for development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image/Card Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Decorative Background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent-blue/20 rounded-3xl blur-2xl" />
              
              {/* Main Card */}
              <motion.div
                className="relative glass-card p-8 md:p-12"
                whileHover={{ rotateY: 10, rotateX: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Profile Image */}
                <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-accent-blue p-1 shadow-lg shadow-primary/25 overflow-hidden">
                  <img 
                    src={harishProfile} 
                    alt="Harish" 
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                
                {/* Highlights */}
                <div className="grid grid-cols-2 gap-4">
                  {highlights.map((item, index) => (
                    <motion.div
                      key={item.text}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <item.icon className="w-4 h-4 text-primary" />
                      <span>{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-foreground/90 leading-relaxed">
              I'm a <span className="text-primary font-semibold">final-year Information Technology student</span> from Chennai, 
              passionate about building modern web applications that make a difference.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              My journey in web development started with curiosity and has evolved into a deep passion 
              for the <span className="text-primary">MERN stack</span>. I love the challenge of creating 
              seamless user experiences backed by robust, scalable architectures.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Currently, I'm focused on honing my skills in full-stack development, working on 
              personal projects, and preparing for opportunities in the IT industry. I believe in 
              writing clean, maintainable code and continuously learning new technologies.
            </p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6 pt-6"
            >
              {[
                { value: '3+', label: 'Projects' },
                { value: '6+', label: 'Technologies' },
                { value: '1+', label: 'Year Learning' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
