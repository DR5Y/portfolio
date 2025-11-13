import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaReact, 
  FaNodeJs, 
  FaJs, 
  FaPython, 
  FaDocker, 
  FaGitAlt, 
  FaAws,
  FaDatabase 
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiMongodb, 
  SiPostgresql, 
  SiRedis, 
  SiKubernetes,
  SiTypescript,
  SiExpress,
  SiNextdotjs
} from 'react-icons/si';

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const techCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React.js', level: 90, icon: <FaReact /> },
        { name: 'Next.js', level: 85, icon: <SiNextdotjs /> },
        { name: 'JavaScript', level: 95, icon: <FaJs /> },
        { name: 'TypeScript', level: 85, icon: <SiTypescript /> },
        { name: 'Tailwind CSS', level: 90, icon: <SiTailwindcss /> },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 90, icon: <FaNodeJs /> },
        { name: 'Express.js', level: 88, icon: <SiExpress /> },
        { name: 'Python', level: 85, icon: <FaPython /> },
        { name: 'MongoDB', level: 82, icon: <SiMongodb /> },
        { name: 'PostgreSQL', level: 80, icon: <SiPostgresql /> },
      ]
    },
    {
      title: 'Tools & Cloud',
      skills: [
        { name: 'Git', level: 92, icon: <FaGitAlt /> },
        { name: 'Docker', level: 88, icon: <FaDocker /> },
        { name: 'AWS', level: 85, icon: <FaAws /> },
        { name: 'Redis', level: 78, icon: <SiRedis /> },
        { name: 'Kubernetes', level: 75, icon: <SiKubernetes /> },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section
      id="tech-stack"
      ref={ref}
      className="min-h-screen flex items-center dark:bg-navy-light bg-light-bg transition-colors duration-300"
    >
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            <span className="text-accent-cyan font-mono text-2xl mr-2">02.</span>
            Tech Stack
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-center dark:text-slate-light text-slate-700 text-lg mb-16 max-w-2xl mx-auto"
          >
            Here are the technologies and tools I work with regularly. I'm always learning and exploring new technologies.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {techCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="card-3d bg-white dark:bg-navy-dark rounded-lg p-8 border border-accent-cyan/20 glow-effect"
              >
                <h3 className="text-2xl font-bold dark:text-white text-navy-dark mb-6 text-center">
                  {category.title}
                </h3>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl text-accent-cyan">
                            {skill.icon}
                          </span>
                          <span className="font-semibold dark:text-slate-light text-slate-700">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-accent-cyan font-bold">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="h-2 bg-navy-lighter dark:bg-navy-lighter bg-slate-300 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                            duration: 1, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                          className="h-full bg-gradient-to-r from-accent-cyan to-accent-blue rounded-full relative"
                        >
                          <motion.div
                            animate={{
                              opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { value: '20+', label: 'Projects Completed' },
              { value: '10+', label: 'Technologies' },
              { value: '3+', label: 'Years Experience' },
              { value: '100%', label: 'Commitment' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 rounded-lg bg-white dark:bg-navy-dark border border-accent-cyan/20"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-accent-cyan to-accent-blue bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm dark:text-slate-light text-slate-700 mt-2">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
