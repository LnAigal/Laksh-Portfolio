import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Download, Code, Palette, Globe, Smartphone } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const skills = [
    { name: 'Frontend Development', level: 95, icon: Code },
    { name: 'Educational Platforms', level: 90, icon: Palette },
    { name: 'Web Development', level: 90, icon: Globe },
    { name: 'Project Management', level: 85, icon: Smartphone },
  ];

  const projects = [
    {
      title: 'NMAMIT NOTES HUB',
      description: 'A comprehensive educational platform providing organized study materials and notes for NMAMIT students.',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://lnaigal.github.io/NMAMIT-Notes-Hub/',
      github: 'https://github.com/LnAigal/NMAMIT-Notes-Hub'
    },
    {
      title: 'Task Master',
      description: 'A powerful task management application with intuitive interface for organizing and tracking daily activities.',
      image: 'https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'JavaScript', 'CSS'],
      link: 'https://taskmasterhere.netlify.app/',
      github: '#'
    },
    {
      title: 'Laksh-Builds',
      description: 'A showcase of my development projects and builds, demonstrating various web technologies and frameworks.',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://lnaigal.github.io/Laksh-Builds/',
      github: 'https://github.com/LnAigal/Laksh-Builds'
    },
    {
      title: 'Laksh-Guides',
      description: 'Educational guides and tutorials helping developers learn new technologies and best practices.',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Documentation', 'Tutorials', 'Web Dev'],
      link: 'https://lnaigal.github.io/Laksh-Guides/',
      github: 'https://github.com/LnAigal/Laksh-Guides'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Lakshminarayana Aigal
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-300 hover:text-white transition-colors duration-200 hover:scale-105 transform"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-gray-800 rounded-lg mt-2 p-4 animate-fade-in">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 text-gray-300 hover:text-white transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-lg font-medium">
                <img src="../public/my-photo.jpg" alt="Lakshminarayana Aigal's profile picture" className="w-full h-full rounded-full object-cover"/>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 bg-clip-text text-transparent animate-slide-up">
            Lakshminarayana Aigal
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-up-delayed">
            Full Stack Developer & Student
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-delayed">
            Artificial Intelligence & Machine Learning student graduating in 2028, passionate about building innovative web applications 
            and educational platforms. I create practical solutions that help students and developers succeed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up-delayed">
            <button 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              View My Work
            </button>
            <button className="border border-gray-500 hover:border-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:bg-white hover:text-gray-900 transform hover:scale-105">
              <Download size={20} />
              Download Resume
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">
                Building Digital Experiences
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                With over 1 year of experience in web development and design, I specialize in creating 
                responsive, user-friendly applications that solve real-world problems. My approach combines 
                technical expertise with creative problem-solving.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm constantly learning new technologies and staying up-to-date with industry trends to 
                deliver cutting-edge solutions that exceed client expectations.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {['JavaScript', 'React', 'TypeScript', 'Node.js', 'Python', 'UI/UX Design'].map((tech) => (
                  <span key={tech} className="bg-gray-700 px-4 py-2 rounded-full text-sm hover:bg-blue-600 transition-colors cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-semibold mb-4 text-purple-400">Quick Facts</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Location:</span>
                  <span>India</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Experience:</span>
                  <span>Student Developer</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Projects Completed:</span>
                  <span>4+ Active Projects</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Graduation:</span>
                  <span className="text-green-400">2028</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div key={skill.name} className="bg-gray-700/50 p-6 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:shadow-lg hover:scale-105">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-lg mr-4">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{skill.name}</h3>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-3 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="bg-gray-700 px-3 py-1 rounded-full text-xs text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-400 hover:text-white transition-colors group-hover:translate-x-1 transform duration-300"
                    >
                      View Live <ExternalLink size={16} />
                    </a>
                    {project.github !== '#' && (
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group-hover:translate-x-1 transform duration-300"
                      >
                        <Github size={16} /> Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          
          <p className="text-gray-300 mb-12 text-lg leading-relaxed">
            Have a project in mind? I'd love to hear from you. Let's create something amazing together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a 
              href="mailto:your.email@example.com"
              className="flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <Mail size={20} />
              Get In Touch
            </a>
          </div>
          
          <div className="flex justify-center space-x-6">
            {[
              { icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' }
            ].map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="bg-gray-700 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 p-4 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                  aria-label={social.label}
                >
                  <Icon size={24} />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-700">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Lakshminarayana Aigal.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
