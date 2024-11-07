'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Mail, Briefcase, GraduationCap, Award, ChevronDown, ChevronUp, Code, Moon, Sun, Home, FolderOpen, FileText, Download } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"

export default function FuturisticPortfolio() {
  const [activeTab, setActiveTab] = useState("home")
  const [expandedSections, setExpandedSections] = useState<string[]>([])
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode)
  }, [isDarkMode])

  const skills = ['Python', 'JavaScript', 'React', 'Node.js', 'Machine Learning', 'Deep Learning', 'Natural Language Processing', 'Computer Vision', 'TensorFlow', 'PyTorch', 'MongoDB', 'SQL', 'Git', 'Docker']
  const experiences = [
    { 
      title: 'Web Development Intern', 
      company: 'InternPe', 
      duration: 'April 2024 – May 2024',
      description: 'Innovated and sustained high-performance websites emphasizing user experience and cross-device functionality; utilized HTML, CSS, JavaScript, and React.js, resulting in a 30% increase in user retention and a 20% reduction in bounce rates.'
    },
    { 
      title: 'Data Science Intern', 
      company: 'IBM Skills build and CSRBOX-Micro Internship', 
      duration: 'Feb 2024',
      description: 'Acquired foundational knowledge in data science, including data analysis, visualization techniques, and statistical methods, through hands-on projects and coursework.'
    },
  ]
  const projects = [
    { 
      title: 'Online Campus Navigation System', 
      description: 'Crafted and deployed an interactive online campus navigation system utilizing OpenStreetMap and frontend technologies, enhancing campus accessibility and improving user experience with dynamic, real-time maps, benefiting over 10,000 students.', 
      technologies: ['OpenStreetMap', 'HTML5', 'CSS3', 'JavaScript'],
      link: '#' 
    },
    { 
      title: 'Student Material Management', 
      description: 'Created a Student Material Management system using MongoDB and frontend technologies, organizing over 50 resources and benefiting 1500 students by providing efficient access and retrieval of educational materials.', 
      technologies: ['MongoDB', 'React.js', 'Node.js', 'CSS'],
      link: '#' 
    },
  ]
  const techStack = [
    { name: 'Python', icon: '🐍', description: 'Primary programming language for ML and data science' },
    { name: 'JavaScript', icon: '🌐', description: 'Web development and interactive frontend applications' },
    { name: 'React', icon: '⚛️', description: 'Building user interfaces for web applications' },
    { name: 'Node.js', icon: '🟢', description: 'Server-side JavaScript runtime' },
    { name: 'MongoDB', icon: '🍃', description: 'NoSQL database for scalable applications' },
    { name: 'Git', icon: '🔄', description: 'Version control system for code management' },
    { name: 'Docker', icon: '🐳', description: 'Containerization platform for application deployment' },
    { name: 'Cloud', icon: '☁️', description: 'Google Cloud Platform and cloud technologies' },
  ]

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    )
  }

  const BackgroundAnimation = () => (
    <div className="fixed inset-0 z-0">
      <svg className="absolute w-full h-full">
        <defs>
          <radialGradient id="grad" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor={isDarkMode ? "#4B0082" : "#FFD700"} stopOpacity="0.3" />
            <stop offset="100%" stopColor={isDarkMode ? "#000000" : "#FFFFFF"} stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad)">
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="5s" repeatCount="indefinite" />
        </rect>
        {[...Array(50)].map((_, i) => (
          <circle
            key={i}
            cx={Math.random() * 100 + "%"}
            cy={Math.random() * 100 + "%"}
            r="1"
            fill={isDarkMode ? "#FFFFFF" : "#000000"}
            opacity={Math.random()}
          >
            <animate
              attributeName="opacity"
              values="0;1;0"
              dur={`${Math.random() * 5 + 2}s`}
              repeatCount="indefinite"
              begin={`${Math.random() * 5}s`}
            />
          </circle>
        ))}
      </svg>
    </div>
  )

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} transition-colors duration-300`}>
      <BackgroundAnimation />
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-opacity-70 bg-gray-800 dark:bg-gray-900 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex space-x-4">
            <Button variant="ghost" onClick={() => setActiveTab('home')} className={activeTab === 'home' ? 'bg-primary' : ''}>
              <Home className="mr-2 h-4 w-4" /> Home
            </Button>
            <Button variant="ghost" onClick={() => setActiveTab('projects')} className={activeTab === 'projects' ? 'bg-primary' : ''}>
              <FolderOpen className="mr-2 h-4 w-4" /> Projects
            </Button>
            <Button variant="ghost" onClick={() => setActiveTab('experience')} className={activeTab === 'experience' ? 'bg-primary' : ''}>
              <Briefcase className="mr-2 h-4 w-4" /> Experience
            </Button>
            <Button variant="ghost" onClick={() => setActiveTab('resume')} className={activeTab === 'resume' ? 'bg-primary' : ''}>
              <FileText className="mr-2 h-4 w-4" /> Resume
            </Button>
          </div>
          <div className="flex items-center space-x-2">
            <Sun className="h-4 w-4" />
            <Switch checked={isDarkMode} onCheckedChange={setIsDarkMode} />
            <Moon className="h-4 w-4" />
          </div>
        </div>
      </nav>

      <div className="container mx-auto p-4 space-y-8 relative z-10">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <motion.header 
                className="text-center"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Avatar className="w-32 h-32 mx-auto mb-4 border-4 border-primary">
                    <AvatarImage src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-I0BMU3nc1xdM4HOiRtnCL9LwRt6yNc.png" alt="Sathwik Kokkonda" />
                    <AvatarFallback>SK</AvatarFallback>
                  </Avatar>
                </motion.div>
                <h1 className="text-4xl font-bold mb-2 text-primary">Sathwik Kokkonda</h1>
                <p className="text-xl text-secondary-foreground">Full Stack Developer | AI Enthusiast</p>
              </motion.header>

              <motion.section 
                aria-labelledby="about-section"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h2 id="about-section" className="text-2xl font-semibold mb-4 text-primary">About Me</h2>
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-secondary-foreground">
                      I'm a passionate Full Stack Developer with a strong foundation in Python, JavaScript, and various web technologies. 
                      Currently pursuing my B.Tech in Computer Science and Engineering at VNR Vignana Jyothi Institute of Engineering and Technology, 
                      I'm dedicated to creating innovative solutions and driving technological advancements.
                    </p>
                  </CardContent>
                </Card>
              </motion.section>

              <motion.section 
                aria-labelledby="tech-stack-section"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <h2 id="tech-stack-section" className="text-2xl font-semibold mb-4 text-primary">Tech Stack</h2>
                <Card>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                      {techStack.map((tech) => (
                        <motion.div
                          key={tech.name}
                          className="relative"
                          whileHover={{ scale: 1.05 }}
                          onHoverStart={() => setHoveredTech(tech.name)}
                          onHoverEnd={() => setHoveredTech(null)}
                        >
                          <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-secondary hover:bg-secondary/80 transition-all duration-300">
                            <span className="text-4xl mb-2">{tech.icon}</span>
                            <span className="text-center">{tech.name}</span>
                          </div>
                          <AnimatePresence>
                            {hoveredTech === tech.name && (
                              <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                className="absolute top-full left-0 right-0 mt-2 p-2 bg-popover rounded-md shadow-lg z-10"
                              >
                                <p className="text-sm text-popover-foreground">{tech.description}</p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.section>
            </motion.div>
          )}

          {activeTab === 'projects' && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-primary">Projects</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <Card className="h-full flex flex-col">
                      <CardHeader>
                        <CardTitle className="text-primary">{project.title}</CardTitle>
                        <CardDescription className="text-secondary-foreground">{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary">{tech}</Badge>
                          ))}
                        </div>
                      </CardContent>
                      <CardContent className="pt-0">
                        <Button asChild variant="outline" className="w-full">
                          <a href={project.link}>View Project</a>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'experience' && (
            <motion.div
              key="experience"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-primary">Experience</h2>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-primary">{exp.title}</CardTitle>
                        <CardDescription>{exp.company} | {exp.duration}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-secondary-foreground">{exp.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'resume' && (
            <motion.div
              key="resume"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-primary">Resume</h2>
              <Card>
                <CardContent className="space-y-6">
                  <section>
                    <h3 className="text-2xl font-semibold mb-2 text-primary">Education</h3>
                    <p className="text-secondary-foreground">
                      <strong>VNR VJIET</strong>, Hyderabad, India<br />
                      Bachelor of Technology in Computer Engineering<br />
                      CGPA: 9.80 | 2022-2026
                    </p>
                  </section>
                  <section>
                    <h3 className="text-2xl font-semibold mb-2 text-primary">Experience</h3>
                    {experiences.map((exp, index) => (
                      <div key={index} className="mb-4">
                        <h4 className="text-lg font-semibold text-secondary-foreground">{exp.title}</h4>
                        <p className="text-muted-foreground">{exp.company} | {exp.duration}</p>
                        <p className="text-secondary-foreground">{exp.description}</p>
                      </div>
                    ))}
                  </section>
                  <section>
                    <h3 className="text-2xl font-semibold mb-2 text-primary">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <Badge key={skill} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </section>
                  <section>
                    <h3 className="text-2xl font-semibold mb-2 text-primary">Achievements</h3>
                    <ul className="list-disc pl-5 space-y-2 text-secondary-foreground">
                      <li>Certifications: Introduction to Internet of Things, PYTHON BOOTCAMP, REACT BOOTCAMP, CODING CONTEST</li>
                      <li>Competed in 5+ hackathons such as Smart India Hackathon by Govt. of India and 24 Hour Hackathon conducted by our college Clubs</li>
                    </ul>
                  </section>
                  <Button asChild className="w-full">
                    <a href="/path-to-your-resume.pdf" target="_blank" rel="noopener noreferrer">
                      <Download className="mr-2 h-4 w-4" /> Download Resume
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.section 
          aria-labelledby="contact-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2 id="contact-section" className="text-2xl font-semibold mb-4 text-primary">Contact</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-center space-x-4">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Button asChild variant="outline" size="icon">
                    <a href="mailto:sathwikkokkonda997@gmail.com" aria-label="Email">
                      <Mail className="h-4 w-4" />
                    </a>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Button asChild variant="outline" size="icon">
                    <a href="https://github.com/sathwikkokkonda" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Button asChild variant="outline" size="icon">
                    <a href="https://www.linkedin.com/in/sathwikkokkonda/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  )
}