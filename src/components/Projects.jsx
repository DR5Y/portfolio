import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Replace these with your actual projects
  const projects = [
    {
      title: 'Cloud Security Dashboard',
      description: 'A comprehensive security monitoring dashboard for cloud infrastructure. Features real-time threat detection, compliance monitoring, and automated incident response.',
      technologies: ['React', 'Node.js', 'AWS', 'MongoDB', 'Docker'],
      github: 'https://github.com/yourusername/project1',
      live: 'https://project1.com',
      image: 'gradient-1'
    },
    {
      title: 'DevSecOps Pipeline',
      description: 'Automated CI/CD pipeline with integrated security scanning, vulnerability assessment, and compliance checks for containerized applications.',
      technologies: ['Jenkins', 'Docker', 'Kubernetes', 'SonarQube', 'Trivy'],
      github: 'https://github.com/yourusername/project2',
      live: 'https://project2.com',
      image: 'gradient-2'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with secure payment processing, inventory management, and real-time analytics.',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Redis'],
      github: 'https://github.com/yourusername/project3',
      live: 'https://project3.com',
      image: 'gradient-3'
    },
    {
      title: 'API Security Gateway',
      description: 'Custom API gateway with OAuth2 authentication, rate limiting, request validation, and comprehensive logging.',
      technologies: ['Node.js', 'Express', 'Redis', 'JWT', 'MongoDB'],
      github: 'https://github.com/yourusername/project4',
      live: 'https://project4.com',
      image: 'gradient-4'
    },
    {
      title: 'Threat Intelligence Platform',
      description: 'Platform for aggregating and analyzing security threats from multiple sources with machine learning-based prediction.',
      technologies: ['Python', 'FastAPI', 'TensorFlow', 'PostgreSQL', 'React'],
      github: 'https://github.com/yourusername/project5',
      live: 'https://project5.com',
      image: 'gradient-5'
    },
    {
      title: 'Serverless Microservices',
      description: 'Scalable microservices architecture deployed on AWS Lambda with event-driven communication and auto-scaling.',
      technologies: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'SQS', 'CloudWatch'],
      github: 'https://github.com/yourusername/project6',
      live: 'https://project6.com',
      image: 'gradient-6'
    }
  ];

  const gradients = {
    'gradient-1': 'from-purple-500 to-pink-500',
    'gradient-2': 'from-blue-500 to-cyan-500',
    'gradient-3': 'from-green-500 to-teal-500',
    'gradient-4': 'from-yellow-500 to-orange-500',
    'gradient-5': 'from-red-500 to-pink-500',
    'gradient-6': 'from-indigo-500 to-purple-500',
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen flex items-center dark:bg-navy-dark bg-white transition-colors duration-300 py-20"
    >
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            <span className="text-accent-cyan font-mono text-2xl mr-2">03.</span>
            Projects
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-center dark:text-slate-light text-slate-700 text-lg mb-16 max-w-2xl mx-auto"
          >
            Here are some of my recent projects that showcase my skills in development, cloud security, and DevOps.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="card-3d bg-white dark:bg-navy-light rounded-lg overflow-hidden border border-accent-cyan/20 glow-effect group"
              >
                {/* Project Image/Gradient */}
                <div className={`h-48 bg-gradient-to-br ${gradients[project.image]} relative overflow-hidden`}>
                  <motion.div
                    className="absolute inset-0 bg-navy-dark/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <div className="flex gap-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-accent-cyan/20 rounded-full hover:bg-accent-cyan/30 transition-colors"
                      >
                        <FaGithub className="text-accent-cyan text-2xl" />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-accent-cyan/20 rounded-full hover:bg-accent-cyan/30 transition-colors"
                      >
                        <FaExternalLinkAlt className="text-accent-cyan text-2xl" />
                      </motion.a>
                    </div>
                  </motion.div>
                </div>

                {/* Project Info */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold dark:text-white text-navy-dark">
                    {project.title}
                  </h3>

                  <p className="dark:text-slate-light text-slate-700 text-sm line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/30 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm dark:text-slate-light text-slate-700 hover:text-accent-cyan transition-colors"
                    >
                      <FaGithub />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm dark:text-slate-light text-slate-700 hover:text-accent-cyan transition-colors"
                    >
                      <FaExternalLinkAlt />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 border-2 border-accent-cyan text-accent-cyan rounded-lg font-mono hover:bg-accent-cyan/10 transition-all duration-300"
            >
              View More on GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
