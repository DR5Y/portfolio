import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen flex items-center bg-white dark:bg-navy-dark transition-colors duration-300"
    >
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            <span className="text-accent-cyan font-mono text-2xl mr-2">01.</span>
            About Me
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-lg dark:text-slate-light text-slate-700">
                Hello! I'm Lefika Andrew Setuke, a passionate software developer with a strong focus on 
                <span className="text-accent-cyan font-semibold"> cloud security</span> and 
                <span className="text-accent-cyan font-semibold"> cybersecurity</span>. 
                I specialize in building secure, scalable applications that leverage modern cloud technologies.
              </p>

              <p className="text-lg dark:text-slate-light text-slate-700">
                My journey in technology has been driven by a curiosity to understand how things work 
                and a passion for creating solutions that make a difference. I enjoy tackling complex 
                problems and continuously learning new technologies to stay at the forefront of the industry.
              </p>

              <p className="text-lg dark:text-slate-light text-slate-700">
                With expertise spanning across full-stack development, cloud architecture, and security practices, 
                I bring a comprehensive approach to building robust applications. I'm particularly interested in 
                DevSecOps practices and implementing security at every layer of the development lifecycle.
              </p>

              <p className="text-lg dark:text-slate-light text-slate-700">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the developer community.
              </p>

              <motion.div
                variants={itemVariants}
                className="pt-4"
              >
                <h3 className="text-xl font-bold dark:text-white text-navy-dark mb-4">
                  What I bring to the table:
                </h3>
                <ul className="grid grid-cols-2 gap-2 text-slate dark:text-slate-light">
                  {[
                    'Full-Stack Development',
                    'Cloud Architecture',
                    'Security Best Practices',
                    'DevOps & CI/CD',
                    'API Design',
                    'Database Management',
                    'Containerization',
                    'Problem Solving'
                  ].map((skill, index) => (
                    <motion.li
                      key={skill}
                      variants={itemVariants}
                      className="flex items-center gap-2"
                    >
                      <span className="text-accent-cyan">▹</span>
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                <div className="relative z-10 rounded-lg overflow-hidden">
                  {/* Placeholder for another image or infographic */}
                  <div className="aspect-square bg-gradient-to-br from-accent-cyan/20 to-accent-blue/20 rounded-lg border-2 border-accent-cyan/50 p-8 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="text-6xl font-bold bg-gradient-to-r from-accent-cyan to-accent-blue bg-clip-text text-transparent">
                        3+
                      </div>
                      <div className="text-xl dark:text-white text-navy-dark font-semibold">
                        Years of Experience
                      </div>
                      <div className="text-lg dark:text-slate-light text-slate-700">
                        Building Secure Solutions
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative border */}
                <div className="absolute inset-0 border-2 border-accent-cyan rounded-lg translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300 -z-10"></div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
