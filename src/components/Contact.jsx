import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaUser, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const ref = useRef(null);
  const formRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState({
    type: '', // 'success' or 'error'
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    // Replace these with your EmailJS credentials
    // Get them from: https://www.emailjs.com/
    const SERVICE_ID = 'YOUR_SERVICE_ID';
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );

      setStatus({
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you soon.'
      });

      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or email me directly.'
      });
      console.error('EmailJS Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
      id="contact"
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
            <span className="text-accent-cyan font-mono text-2xl mr-2">04.</span>
            Get In Touch
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-center dark:text-slate-light text-slate-700 text-lg mb-16 max-w-2xl mx-auto"
          >
            I'm currently open to new opportunities and collaborations. Whether you have a question, 
            want to discuss a project, or just want to say hi, feel free to reach out!
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form 
                ref={formRef}
                onSubmit={handleSubmit} 
                className="space-y-6 card-3d bg-white dark:bg-navy-dark p-8 rounded-lg border border-accent-cyan/20 glow-effect"
              >
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-semibold dark:text-slate-light text-slate-700 mb-2"
                  >
                    <FaUser className="inline mr-2" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-accent-cyan/30 dark:bg-navy-lighter bg-light-secondary dark:text-white text-navy-dark focus:border-accent-cyan focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-semibold dark:text-slate-light text-slate-700 mb-2"
                  >
                    <FaEnvelope className="inline mr-2" />
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-accent-cyan/30 dark:bg-navy-lighter bg-light-secondary dark:text-white text-navy-dark focus:border-accent-cyan focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="message" 
                    className="block text-sm font-semibold dark:text-slate-light text-slate-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 rounded-lg border-2 border-accent-cyan/30 dark:bg-navy-lighter bg-light-secondary dark:text-white text-navy-dark focus:border-accent-cyan focus:outline-none transition-colors resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg ${
                      status.type === 'success' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/50' 
                        : 'bg-red-500/20 text-red-400 border border-red-500/50'
                    }`}
                  >
                    {status.message}
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-accent-cyan to-accent-blue text-navy-dark font-bold rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-navy-dark border-t-transparent rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info & Download CV */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="card-3d bg-white dark:bg-navy-dark p-8 rounded-lg border border-accent-cyan/20 glow-effect">
                <h3 className="text-2xl font-bold dark:text-white text-navy-dark mb-6">
                  Other Ways to Connect
                </h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold dark:text-slate-light text-slate-700 mb-2">
                      Email
                    </h4>
                    <a 
                      href="mailto:lefika.setuke@example.com"
                      className="text-accent-cyan hover:underline"
                    >
                      lefikaasetuke@gmail.com
                    </a>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold dark:text-slate-light text-slate-700 mb-2">
                      Gaborone, Botswana
                    </h4>
                    <p className="dark:text-slate-light text-slate-700">
                      Available for Work
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold dark:text-slate-light text-slate-700 mb-2">
                      Response Time
                    </h4>
                    <p className="dark:text-slate-light text-slate-700">
                      Usually within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Download CV Button */}
              <motion.div
                variants={itemVariants}
                className="card-3d bg-gradient-to-br from-accent-cyan/20 to-accent-blue/20 p-8 rounded-lg border border-accent-cyan/50 glow-effect text-center"
              >
                <h3 className="text-2xl font-bold dark:text-white text-navy-dark mb-4">
                  Interested in My Background?
                </h3>
                <p className="dark:text-slate-light text-slate-700 mb-6">
                  Download my CV to learn more about my experience and qualifications.
                </p>
                <motion.a
                  href="/cv/Lefika_Andrew_Setuke_CV.pdf"
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block px-8 py-4 bg-gradient-to-r from-accent-cyan to-accent-blue text-navy-dark font-bold rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  Download CV
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
