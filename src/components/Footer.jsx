import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="dark:bg-navy-dark bg-white border-t dark:border-navy-lighter border-slate-300 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold dark:text-white text-navy-dark mb-4">
              Lefika Andrew Setuke
            </h3>
            <p className="dark:text-slate-light text-slate-700 text-sm">
              Software Developer, Cloud Enthusiast, and Cybersecurity Professional 
              passionate about building secure and scalable solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold dark:text-white text-navy-dark mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Tech Stack', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => document.getElementById(item.toLowerCase().replace(' ', '-')).scrollIntoView({ behavior: 'smooth' })}
                    className="dark:text-slate-light text-slate-700 hover:text-accent-cyan transition-colors text-sm"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold dark:text-white text-navy-dark mb-4">
              Connect With Me
            </h3>
            <div className="flex gap-4">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="text-slate dark:text-slate-light hover:text-accent-cyan transition-colors"
              >
                <FaGithub size={24} />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="text-slate dark:text-slate-light hover:text-accent-cyan transition-colors"
              >
                <FaLinkedin size={24} />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="text-slate dark:text-slate-light hover:text-accent-cyan transition-colors"
              >
                <FaTwitter size={24} />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t dark:border-navy-lighter border-slate-300 pt-8 text-center">
          <p className="dark:text-slate-light text-slate-700 text-sm flex items-center justify-center gap-2">
            Built with <FaHeart className="text-accent-cyan" /> by Lefika Andrew Setuke © {currentYear}
          </p>
          <p className="dark:text-slate text-slate-600 text-xs mt-2">
            Designed & Developed with React, Tailwind CSS, and Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
