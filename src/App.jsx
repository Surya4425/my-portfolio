import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  ChevronDown, 
  Cpu, 
  Code, 
  Award, 
  BookOpen,
  Zap,
  Radio,
  Menu,
  X
} from 'lucide-react';

// --- Data extracted from Resume ---
const personalInfo = {
  name: "Jaisurya S",
  role: "Electronics & Communication Engineer",
  tagline: "Specializing in Embedded Systems, VLSI, and Analog Electronics",
  email: "jaisurya4425@gmail.com",
  phone: "+91 97897 94974",
  location: "Coimbatore, India",
  linkedin: "https://www.linkedin.com/in/jaisurya-s-196885270",
  about: "I am a passionate Electronics and Communication Engineering student at PSG College of Technology with a strong academic record (CGPA 7.8). My interests lie deeply in Analog Electronics, Digital Electronics, Embedded Systems, and VLSI. I have hands-on experience developing real-time systems using microcontrollers like ESP32 and NodeMCU, and I actively participate in design and technical competitions.",
};

const skills = {
  languages: ["C", "Python", "Verilog", "System Verilog (Basics)"],
  platforms: ["Windows", "Arduino IDE", "Keil µVision", "VS Code"],
  tools: [
    "Xilinx Vivado ISE", "MATLAB", "Cadence", "Wireshark", 
    "Multisim", "Cisco Packet Tracer", "Canva"
  ],
  coreAreas: ["Analog Electronics", "Digital Electronics", "Embedded Systems", "VLSI"]
};

const projects = [
  {
    title: "Cognitive Load Analysis",
    period: "Dec 2024 - Apr 2025",
    category: "Embedded Systems & IoT",
    description: "Developed a real-time system to analyze student mental well-being using Heart Rate, GSR, and Skin Temperature. Processed data using ESP32 and NodeMCU and utilized a Random Forest model to classify cognitive load.",
    tags: ["ESP32", "NodeMCU", "Machine Learning", "Sensors"]
  },
  {
    title: "Indoor Localization System",
    period: "July 2024 - Feb 2025",
    category: "Wireless Communication",
    description: "Built a real-time indoor navigation system using BLE beacons for GPS-denied environments. Integrated RSSI-based tracking and UUID filtering for accurate location updates.",
    tags: ["BLE Beacons", "RSSI", "Navigation", "Wireless"]
  },
  {
    title: "AI Dehaze for Capture",
    period: "Oct 2024 - May 2025",
    category: "Deep Learning",
    description: "Created an AI-powered image dehazing model using GANs and Densely Connected Pyramid Networks. Optimized for real-time performance on resource-constrained mobile platforms.",
    tags: ["GANs", "Image Processing", "Deep Learning", "Python"]
  }
];

const miniProjects = [
  {
    title: "Virtual Access Points Analysis",
    description: "Configured WiFi 6 router using OpenWrt to create multiple VAPs (2.4GHz & 5GHz) to reduce network traffic.",
    tags: ["Networking", "OpenWrt", "WiFi 6"]
  },
  {
    title: "Proximity Based Advertiser",
    description: "Designed an 8051 microcontroller system with ultrasonic sensors to trigger ads on an LCD when customers are nearby.",
    tags: ["8051", "Embedded C", "Sensors"]
  },
  {
    title: "Acquisition of Hand Signals",
    description: "Designed a signal acquisition circuit using Op-Amps, instrumentation amplifiers, and filters for precise signal extraction.",
    tags: ["Analog", "LIC", "Circuit Design"]
  }
];

const education = [
  {
    degree: "B.E. Electronics and Communication Engineering",
    institution: "PSG College of Technology, Coimbatore",
    year: "2022 - 2026",
    score: "CGPA: 7.8 (till 6th Sem)",
    details: "Active member of IEEE and Youth Outreach Club."
  },
  {
    degree: "HSC (Class XII)",
    institution: "Komarappa Sengundhar, Chennimalai",
    year: "2022",
    score: "88.1%"
  },
  {
    degree: "SSLC (Class X)",
    institution: "Shri Ganga, Ingur",
    year: "2020",
    score: "94.2%"
  }
];

const achievements = [
  "GATE 2025 AIR - 5732",
  "1st Place - APTI-RUSH 2024 (Aptitude Event, ECE Association)",
  "1st Place - THIRAN 2025 (Design Thinking)",
  "2nd Place - GALACTIC ACCORD 2023 (Astronomy Club)",
  "3rd Place - THIRAN 2025 (Project Expo)"
];

const certifications = [
  "IoT & Embedded Systems (InternEzy)",
  "Analog Mixed Signal Design Verification for TI e-FUSE (Texas Instruments)",
  "System Verification and Methodologies (Qualcomm)"
];

// --- Components ---

const SectionTitle = ({ children, icon: Icon }) => (
  <div className="flex items-center gap-3 mb-8">
    <div className="p-2 bg-blue-600 rounded-lg">
      <Icon size={24} className="text-white" />
    </div>
    <h2 className="text-3xl font-bold text-gray-800 dark:text-white">{children}</h2>
  </div>
);

const Card = ({ children, className = "" }) => (
  <div className={`bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 dark:border-slate-700 ${className}`}>
    {children}
  </div>
);

const Badge = ({ children }) => (
  <span className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 dark:text-blue-300 dark:bg-blue-900/30 rounded-full">
    {children}
  </span>
);

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(true);

  // Toggle Dark Mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Education', id: 'education' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors duration-300 font-sans">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                J
              </div>
              <span className="font-bold text-xl text-gray-800 dark:text-white">Jaisurya S</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className={`${
                    activeSection === link.id 
                      ? 'text-blue-600 dark:text-blue-400' 
                      : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                  } transition-colors font-medium`}
                >
                  {link.name}
                </button>
              ))}
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-gray-200 dark:bg-slate-800 text-gray-800 dark:text-yellow-400 transition-colors"
              >
                {darkMode ? <Zap size={20} fill="currentColor"/> : <Radio size={20} />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
               <button 
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-gray-200 dark:bg-slate-800 text-gray-800 dark:text-yellow-400"
              >
                {darkMode ? <Zap size={20} fill="currentColor"/> : <Radio size={20} />}
              </button>
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 dark:text-gray-300"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-20 dark:opacity-10">
           <div className="absolute top-10 right-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
           <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 font-medium text-sm">
            Available for Internships & Projects
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Jaisurya S</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            {personalInfo.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30"
            >
              Contact Me
            </button>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-slate-800 rounded-full text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 shadow-md transition-colors">
                <Linkedin size={24} />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="p-3 bg-white dark:bg-slate-800 rounded-full text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 shadow-md transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-400 dark:text-slate-600">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white dark:bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <SectionTitle icon={BookOpen}>About Me</SectionTitle>
          <p className="text-lg text-gray-700 dark:text-slate-300 leading-relaxed mb-6">
            {personalInfo.about}
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <Card>
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                <Award className="text-yellow-500" size={20} />
                Key Achievements
              </h3>
              <ul className="space-y-3">
                {achievements.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-slate-400 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>

            <Card>
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                <BookOpen className="text-purple-500" size={20} />
                Certifications
              </h3>
              <ul className="space-y-3">
                {certifications.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-slate-400 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle icon={Cpu}>Technical Skills</SectionTitle>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-t-4 border-t-blue-500">
              <h3 className="font-bold text-xl mb-4 text-gray-800 dark:text-white">Core Areas</h3>
              <div className="flex flex-wrap gap-2">
                {skills.coreAreas.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </Card>
            
            <Card className="border-t-4 border-t-green-500">
              <h3 className="font-bold text-xl mb-4 text-gray-800 dark:text-white">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </Card>
            
            <Card className="border-t-4 border-t-purple-500">
              <h3 className="font-bold text-xl mb-4 text-gray-800 dark:text-white">Tools & Software</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </Card>

            <Card className="border-t-4 border-t-orange-500">
              <h3 className="font-bold text-xl mb-4 text-gray-800 dark:text-white">Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {skills.platforms.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-100 dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <SectionTitle icon={Code}>Major Projects</SectionTitle>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project, idx) => (
              <Card key={idx} className="flex flex-col h-full hover:-translate-y-2 transition-transform">
                <div className="mb-4">
                  <span className="text-xs font-bold tracking-wider text-blue-600 uppercase mb-1 block">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{project.period}</p>
                  <p className="text-gray-600 dark:text-slate-300 text-sm mb-4 flex-grow">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 pl-2 border-l-4 border-blue-500">
            Mini Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {miniProjects.map((project, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-gray-200 dark:border-slate-700">
                <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">{project.title}</h4>
                <p className="text-gray-600 dark:text-slate-400 text-sm mb-3">{project.description}</p>
                <div className="flex gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs text-blue-600 dark:text-blue-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionTitle icon={BookOpen}>Education History</SectionTitle>
          
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            {education.map((edu, idx) => (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-hover:bg-blue-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                
                <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-bold text-blue-600 dark:text-blue-400 text-sm">{edu.year}</span>
                    <span className="text-xs font-semibold px-2 py-1 bg-green-100 text-green-700 rounded-full">{edu.score}</span>
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1">{edu.degree}</h3>
                  <p className="text-gray-600 dark:text-slate-400 text-sm mb-2">{edu.institution}</p>
                  {edu.details && <p className="text-gray-500 dark:text-slate-500 text-xs italic">{edu.details}</p>}
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white dark:bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <SectionTitle icon={Mail}>Get In Touch</SectionTitle>
          <p className="text-gray-600 dark:text-slate-300 mb-10">
            Currently open for internship opportunities and collaborative projects in Embedded Systems and VLSI.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <a href={`mailto:${personalInfo.email}`} className="flex flex-col items-center p-6 bg-gray-50 dark:bg-slate-800 rounded-xl hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors group">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-1">Email</h3>
              <p className="text-sm text-gray-500 dark:text-slate-400">{personalInfo.email}</p>
            </a>

            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 bg-gray-50 dark:bg-slate-800 rounded-xl hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors group">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Linkedin size={24} />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-1">LinkedIn</h3>
              <p className="text-sm text-gray-500 dark:text-slate-400">Connect with me</p>
            </a>

            <div className="flex flex-col items-center p-6 bg-gray-50 dark:bg-slate-800 rounded-xl hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors group">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Phone size={24} />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-1">Phone</h3>
              <p className="text-sm text-gray-500 dark:text-slate-400">{personalInfo.phone}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 dark:text-slate-600 text-sm border-t border-gray-200 dark:border-slate-800">
        <p>© {new Date().getFullYear()} Jaisurya S. All rights reserved.</p>
        <p className="mt-2">Built with React & Tailwind CSS</p>
      </footer>

    </div>
  );
}