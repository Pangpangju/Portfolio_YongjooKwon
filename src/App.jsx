import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, Code, Trophy, Camera } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './index.css'

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  useEffect(() => {
    const handleScroll = () => {
      // Updated sections array to include 'research' and reorder
      const sections = ['home', 'research', 'projects', 'skills', 'awards', 'mylife', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const projects = [
    {
      id: 1,
      title: "Metaverse Platform",
      description: "Immersive virtual reality experience built with Unreal Engine 5, featuring realistic physics and interactive environments.",
      technologies: ["Unreal Engine", "C++", "Blueprints", "Oculus Rift"],
      image: "https://placehold.co/600x400/1a1a1a/ffffff?text=Metaverse+Platform",
      github: "#",
      live: "#"
    },
    {
      id: 2,
      title: "AI Game Assistant",
      description: "Machine learning platform for predictive analytics using Python and TensorFlow, deployed on cloud infrastructure.",
      technologies: ["Python", "TensorFlow", "FastAPI", "AWS"],
      image: "https://placehold.co/600x400/1a1a1a/ffffff?text=AI+Assistant",
      github: "#",
      live: "#"
    },
    {
      id: 3,
      title: "Mobile AR Shopping",
      description: "Augmented reality application for iOS and Android that overlays digital information onto the real world.",
      technologies: ["Unity", "C#", "ARKit", "ARCore"],
      image: "https://placehold.co/600x400/1a1a1a/ffffff?text=AR+Shopping",
      github: "#",
      live: "#"
    }
  ];

  const research = [
    {
      id: 1,
      title: "Outstanding Research Award",
      description: "Recognized for groundbreaking research in real-time rendering optimization",
      technologies: ["Rendering", "Optimization", "GPU", "C++"],
      image: "https://placehold.co/600x400/1a1a1a/ffffff?text=Research+Paper",
      github: "#",
      live: "#"
    },
    {
      id: 2,
      title: "Outstanding Research Award",
      description: "Recognized for groundbreaking research in real-time rendering optimization",
      technologies: ["Rendering", "Optimization", "GPU", "C++"],
      image: "https://placehold.co/600x400/1a1a1a/ffffff?text=Research+Paper",
      github: "#",
      live: "#"
    },
    {
      id: 3,
      title: "Outstanding Research Award",
      description: "Recognized for groundbreaking research in real-time rendering optimization",
      technologies: ["Rendering", "Optimization", "GPU", "C++"],
      image: "https://placehold.co/600x400/1a1a1a/ffffff?text=Research+Paper",
      github: "#",
      live: "#"
    }
  ];

  const skills = [
    { name: "Python", level: 95 },
    { name: "C++", level: 90 },
    { name: "C", level: 85 },
    { name: "C#", level: 88 },
    { name: "Unreal Engine", level: 92 },
    { name: "Unity", level: 87 }
  ];

  const awards = [
    {
      id: 1,
      title: "Academic Excellence Scholarship",
      organization: "Seoul National University",
      year: "2023-2024",
      description: "Merit-based scholarship for maintaining top GPA in graduate program"
    },
    {
      id: 2,
      title: "Game Development Competition Winner",
      organization: "Asia Pacific Game Jam",
      year: "2023",
      description: "First place in university-level game development competition"
    }
  ];

  // Floating particles component
  const FloatingParticles = () => {
    const particles = Array.from({ length: 50 }, (_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-gray-400/30 rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -20, 0],
          x: [0, Math.random() * 20 - 10, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 3 + Math.random() * 2,
          repeat: Infinity,
          delay: Math.random() * 2,
        }}
      />
    ));

    return <div className="fixed inset-0 pointer-events-none z-0">{particles}</div>;
  };
  
  // The images for the collage have been updated to create a more complete layout
  const myLifeImages = [
    { src: "https://placehold.co/600x450/e9d5ff/6d28d9?text=Travel", size: 'col-span-2 row-span-2' },
    { src: "https://placehold.co/400x400/c7d2fe/3730a3?text=Friends", size: 'col-span-1 row-span-1' },
    { src: "https://placehold.co/400x600/a5b4fc/4338ca?text=Hobbies", size: 'col-span-1 row-span-2' },
    { src: "https://placehold.co/400x300/93c5fd/1e40af?text=Work", size: 'col-span-2 row-span-1' },
    { src: "https://placehold.co/400x500/dbeafe/1e3a8a?text=Family", size: 'col-span-1 row-span-2' },
    { src: "https://placehold.co/500x300/bfdbfe/2563eb?text=Pets", size: 'col-span-2 row-span-1' },
    { src: "https://placehold.co/400x400/e0e7ff/3f3f46?text=Nature", size: 'col-span-2 row-span-1' },
    { src: "https://placehold.co/600x400/c4b5fd/6d28d9?text=Projects", size: 'col-span-2 row-span-1' },
    { src: "https://placehold.co/300x300/fecaca/991b1b?text=Food", size: 'col-span-1 row-span-1' },
    { src: "https://placehold.co/400x400/fef2f2/991b1b?text=Gaming", size: 'col-span-1 row-span-1' },
  ];

  return (
    <div
      ref={containerRef}
      className="bg-gray-100 text-gray-800 min-h-screen relative overflow-x-hidden"
      style={{ fontFamily: 'Consolas, monospace' }}
    >
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-100 via-blue-100/20 to-purple-100/20 -z-10"></div>

      {/* Floating particles */}
      <FloatingParticles />

      {/* Animated background shapes */}
      <motion.div
        style={{ y }}
        className="fixed top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-200/10 to-purple-200/10 rounded-full blur-3xl -z-10"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '-30%']) }}
        className="fixed top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-200/10 to-pink-200/10 rounded-full blur-3xl -z-10"
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-800 bg-clip-text text-transparent"
            >
              Portfolio
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {/* Updated navigation links */}
              {['home', 'research', 'projects', 'skills', 'awards', 'mylife', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize hover:text-blue-600 transition-colors font-medium ${
                    activeSection === item ? 'text-blue-600' : 'text-gray-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-800"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden py-4 border-t border-gray-200"
            >
              {['home', 'research', 'projects', 'skills', 'awards', 'mylife', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-2 capitalize hover:text-blue-600 transition-colors font-medium"
                >
                  {item}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </nav>

{/* Hero Section */}
<section
  id="home"
  className="min-h-[calc(100vh-80px)] flex items-center justify-center relative py-12"
>
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 md:flex md:items-center md:gap-16">
    {/* Profile Picture on the left */}
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex-shrink-0 mb-12 md:mb-0"
    >
      <img
        src="https://placehold.co/256x320/1a1a1a/ffffff?text=YJK"
        alt="Profile"
        className="rounded-2xl w-80 h-96 sm:w-96 sm:h-[28rem] lg:w-[26rem] lg:h-[32rem] mx-auto md:mx-0 shadow-2xl object-cover"
      />
    </motion.div>

    {/* Name and descriptions on the right */}
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex-1 text-center md:text-left"
    >
      <motion.h1
        className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-normal pb-2"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ duration: 3, repeat: Infinity }}
        style={{
          background: "linear-gradient(90deg, #1d4ed8, #6d28d9, #be185d, #1d4ed8)",
          backgroundSize: "300% 300%",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Yong Joo Kwon
      </motion.h1>
      <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-2 max-w-2xl mx-auto md:mx-0">
        Graduate IT Student & Game Developer
      </p>
      <p className="text-base sm:text-lg text-gray-500 mb-6 max-w-xl mx-auto md:mx-0">
        Seoul, Korea
      </p>
      {/* About Me description */}
      <div className="space-y-4 text-gray-700 max-w-2xl mx-auto md:mx-0 mb-8">
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
          I'm a passionate IT graduate from Seoul, Korea, specializing in game development and real-time graphics programming.
          With expertise in both Unreal Engine and Unity, I create immersive experiences that push the boundaries
          of interactive entertainment.
        </p>
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
          My academic journey has equipped me with strong foundations in C++, C#, and Python, allowing me to
          tackle complex technical challenges across multiple domains. I'm particularly interested in VR/AR
          technologies and performance optimization.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection('research')}
          className="bg-gradient-to-r from-blue-600 to-purple-800 hover:from-blue-700 hover:to-purple-900 px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg text-white text-sm sm:text-base"
        >
          View My Work
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection('contact')}
          className="border-2 border-gray-400 hover:border-blue-600 px-6 py-3 rounded-full font-semibold transition-all duration-300 text-gray-800 text-sm sm:text-base"
        >
          Get In Touch
        </motion.button>
      </div>
    </motion.div>
  </div>
</section>
      
      {/* Research Section */}
      <section id="research" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Research</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-800 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {research.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-gray-200/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:transform transition-all duration-300 shadow-xl border border-gray-300/50"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-200/80 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-700 mb-4 text-sm">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-300/50 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={item.github}
                      className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Paper
                    </a>
                    <a
                      href={item.live}
                      className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-800 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-gray-200/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:transform transition-all duration-300 shadow-xl border border-gray-300/50"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-200/80 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-700 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-300/50 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-800 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-200/50 backdrop-blur-sm p-6 rounded-2xl hover:transform hover:scale-105 transition-all duration-300 border border-gray-300/50"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-bold">{skill.name}</h3>
                  <span className="text-blue-600 font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-300/50 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-blue-600 to-purple-800 h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Awards & Recognition</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-800 mx-auto"></div>
          </motion.div>

          <div className="space-y-6">
            {awards.map((award, index) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-200/50 backdrop-blur-sm p-6 rounded-2xl hover:transform hover:scale-102 transition-all duration-300 border border-gray-300/50"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-3 rounded-full">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-bold">{award.title}</h3>
                      <span className="text-blue-600 font-semibold">{award.year}</span>
                    </div>
                    <p className="text-gray-600 mb-2">{award.organization}</p>
                    <p className="text-gray-700">{award.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* My Life Section - The new image collage section */}
      <section id="mylife" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">My Life</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-800 mx-auto"></div>
            <p className="text-gray-700 mt-6 max-w-2xl mx-auto">
              A collection of moments from my life, showcasing some of my hobbies, travels, and personal projects.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {myLifeImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: (index % 2 === 0 ? 3 : -3) }}
                className={`relative overflow-hidden rounded-2xl shadow-xl border border-gray-300/50 cursor-pointer ${image.size}`}
              >
                <img
                  src={image.src}
                  alt={`My Life Image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4 text-white">
                  <Camera className="w-6 h-6 mr-2" />
                  <span className="font-semibold text-lg">{image.src.split('?text=')[1]}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-800 mx-auto"></div>
            <p className="text-gray-700 mt-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, creative projects, or potential collaborations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.a
              href="mailto:yongjoo.kwon@example.com"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gray-200/50 backdrop-blur-sm p-6 rounded-2xl text-center hover:bg-gray-300/50 transition-all duration-300 border border-gray-300/50"
            >
              <div className="bg-blue-600/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-600">yongjoo.kwon@example.com</p>
            </motion.a>

            <motion.a
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gray-200/50 backdrop-blur-sm p-6 rounded-2xl text-center hover:bg-gray-300/50 transition-all duration-300 border border-gray-300/50"
            >
              <div className="bg-blue-600/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Linkedin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
              <p className="text-gray-600">linkedin.com/in/yongjookwon</p>
            </motion.a>

            <motion.a
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gray-200/50 backdrop-blur-sm p-6 rounded-2xl text-center hover:bg-gray-300/50 transition-all duration-300 border border-gray-300/50"
            >
              <div className="bg-blue-600/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Github className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">GitHub</h3>
              <p className="text-gray-600">github.com/yongjookwon</p>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100/80 backdrop-blur-sm border-t border-gray-200 py-8 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-600 mb-4 md:mb-0">
              © 2024 Yong Joo Kwon. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
