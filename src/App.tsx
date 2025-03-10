import { useState, useEffect } from 'react';
import myImage from './image/my-image.jpeg';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import { Sun, Moon, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import ContactForm from './components/ContactForm';


function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const skills = [
    'React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS',
    'Framer Motion', 'Git', 'REST APIs', 'Responsive Design'
  ];

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-featured e-commerce platform built with React',
      tech: ['React', 'TypeScript', 'Tailwind CSS'],
      link: 'https://1shopstyle.netlify.app/'
    },
    {
      title: 'Rental App',
      description: 'A responsive rental-inspired website with multiple pages, animations, and theme support.',
      tech: ['React', 'Tailwind CSS', 'Framer Motion'],
      link: 'https://dreamstayhomes.netlify.app/'
    },
    {
      title: 'Crypto Tracker',
      description: 'A crytocurrency price tracking app built with React and the CoinGecko API.',
      tech: ['React', 'CoinGecko API', 'Tailwind CSS'],
      link: 'https://kointrack.netlify.app/'
    },
    {
      title: 'Notes App',
      description: 'A note taking app that allows you input, format, edit, and save notes to local storage.',
      tech: ['React', 'TypeScript', 'Tailwind CSS'],
      link: 'https://myjotspace.netlify.app/'
    }
  ];

  return (
    <div className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))] transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold"
          >
            Emmanuel's Portfolio
          </motion.h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          >
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-6 mb-6">
                <img
                  src={myImage} 
                  alt="Emmanuel Maxwell"
                  className="w-24 h-24 rounded-full object-cover border-4 border-blue-500"
                />
                <h2 className="text-3xl font-bold">Emmanuel Maxwell</h2>
              </div>
              <div className="typewriter mb-6">
                <Typewriter
                  options={{
                    strings: ['Hi, I am a frontend developer...', '...and a web designer'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
                Passionate about creating beautiful, responsive, and user-friendly web applications.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/maxsphinix" target="_blank" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/emaxwellemmanuel/" target="_blank" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="mailto:e.maxwellemmanuel@gmail.com" target="_blank" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors"
                >
                  <Mail size={24} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">About Me</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
            I'm a frontend developer with over 2 years of experience building modern, user-friendly web applications. I specialize in React and TypeScript, crafting responsive and accessible user interfaces that deliver seamless user experiences. Recently, I've developed a keen interest in Web3 technologies and enjoy exploring how blockchain and decentralized systems are shaping the future of the web. When I’m not coding, you’ll find me exploring new technologies or spending quality time with friends and family.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-500 hover:text-blue-600"
                    >
                      View Project <ExternalLink size={16} className="ml-1" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactForm />

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto text-center text-gray-600 dark:text-gray-300">
          <p>© 2024 Emmanuel Maxwell. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;