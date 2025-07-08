import { useState, useEffect } from 'react';
import {
  FaLinkedin, FaGithub, FaMedium, FaEnvelope, FaPenNib, FaAngleDoubleDown,
  FaBrain, FaChartLine, FaLightbulb, FaTools, FaBook, FaBlog
} from 'react-icons/fa';
import avatar from './assets/avatar.png';
import iitLogo from './assets/iit.png';
import uciLogo from './assets/uci.png';
import gatechLogo from './assets/gatech.png';
import muSigmaLogo from './assets/musigma.png';
import deloitteLogo from './assets/deloitte.png';
import starbucksLogo from './assets/starbucks.png';
import eclerxLogo from './assets/eclerx.png';
import dellLogo from './assets/dell.png';
import amazonLogo from './assets/amazon.png';

function App() {
  const bgColorStops = "#ec4899, #8b5cf6, #06b6d4, #10b981";
  // "#0f172a, #164e63, #155e75, #0e7490, #0891b2";
  const bgGradient = `linear-gradient(45deg, ${bgColorStops})`;

  // Highlight colors
  const highlightBase = "rose";
  const highlightDefaultClass = `text-${highlightBase}-500`;
  const highlightHoverClass = `hover-text-${highlightBase}`;

  // Collapsible header state
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroHeight = heroSection.getBoundingClientRect().height;
        const triggerPoint = heroHeight * 0.4;
        if (window.scrollY > triggerPoint) {
          setShowHeader(true);
        } else {
          setShowHeader(false);
        }
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen text-white font-sans overflow-x-hidden">

      {/* Fixed Collapsible Header */}
      {showHeader && (
        <div className="fixed top-0 left-0 w-full text-white shadow z-50" style={{ background: bgGradient }}>
          <div className="flex justify-between items-center px-8 py-4">
            <h1 className="text-2xl font-bold">Nikhil Singh</h1>
            <div className="flex space-x-6 text-2xl">
              <a href="mailto:your-email@example.com" target="_blank" rel="noreferrer"><FaEnvelope className={`${highlightHoverClass}`} /></a>
              <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer"><FaLinkedin className={`${highlightHoverClass}`} /></a>
              <a href="https://github.com/your-profile" target="_blank" rel="noreferrer"><FaGithub className={`${highlightHoverClass}`} /></a>
              <a href="https://medium.com/@your-profile" target="_blank" rel="noreferrer"><FaMedium className={`${highlightHoverClass}`} /></a>
              <a href="https://substack.com/@your-profile" target="_blank" rel="noreferrer"><FaPenNib className={`${highlightHoverClass}`} /></a>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section with Parallax */}
      <section
        id = "hero"
        className="flex flex-col items-center justify-center text-center px-8 py-32 relative overflow-hidden min-h-screen bg-fixed bg-cover animate-fadein"
        style={{ background: bgGradient }}
      >
        <h2 className="text-5xl md:text-8xl font-extrabold mb-4 tracking-wider">Nikhil Singh</h2>
        <p className="text-md md:text-xl font mb-8">Data Scientist | AI Product Builder | Business Strategist</p>
        
        {/* Social Icons */}
        <div className="flex space-x-8 text-4xl mb-12">
          <a href="mailto:your-email@example.com" target="_blank" rel="noreferrer"><FaEnvelope className={`${highlightHoverClass}`} /></a>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer"><FaLinkedin className={`${highlightHoverClass}`} /></a>
          <a href="https://github.com/your-profile" target="_blank" rel="noreferrer"><FaGithub className={`${highlightHoverClass}`} /></a>
          <a href="https://medium.com/@your-profile" target="_blank" rel="noreferrer"><FaMedium className={`${highlightHoverClass}`} /></a>
          <a href="https://substack.com/@your-profile" target="_blank" rel="noreferrer"><FaPenNib className={`${highlightHoverClass}`} /></a>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-8 text-xl font mb-20">
          <a href="#about" className={`${highlightHoverClass}`}>About Me</a>
          <a href="#mywork" className={`${highlightHoverClass}`}>My Work</a>
        </div>

        {/* Scroll Down Arrow */}
        <div className="absolute bottom-8 animate-bounce">
          <a href="#about">
            <FaAngleDoubleDown className={`text-4xl ${highlightHoverClass}`} />
          </a>
        </div>
      </section>

      {/* About Me Section with fade-in */}
      <section id="about" className="bg-gray-50 text-gray-800 px-8 py-16 flex flex-col items-center w-full animate-fadein">
        <img src={avatar} alt="Nikhil Singh" className="w-48 h-48 rounded-full mb-6 shadow-lg" />
        <p className="max-w-5xl text-center text-sm mb-12 px-4">
          I am a Data Scientist and AI Product Builder with a passion for creating impactful solutions. My work focuses on designing and deploying AI-driven tools that empower businesses to make data-informed decisions. From advertising intelligence to predictive analytics, I strive to build scalable products that bridge the gap between data science and real-world strategy. I believe in combining technical rigor with user-centric design to drive innovation and growth.
        </p>

        {/* 3 Subsections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mb-12 px-4">
          <div className="flex flex-col items-center text-center">
            <FaBrain className={`${highlightDefaultClass} text-4xl mb-4`} />
            <h3 className="text-xl font-semibold mb-2">AI Innovation</h3>
            <p className="text-sm">Building intelligent products and solutions that drive business impact.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaChartLine className={`${highlightDefaultClass} text-4xl mb-4`} />
            <h3 className="text-xl font-semibold mb-2">Data Strategy</h3>
            <p className="text-sm">Designing scalable data pipelines and analytical frameworks.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaLightbulb className={`${highlightDefaultClass} text-4xl mb-4`} />
            <h3 className="text-xl font-semibold mb-2">Product Leadership</h3>
            <p className="text-sm">Driving product vision and execution with a focus on user impact.</p>
          </div>
        </div>
      </section>

      {/* My Work Section with fade-in */}
      <section id="mywork" className="bg-white text-gray-800 px-8 py-20 animate-fadein">
        <h2 className="text-3xl font-bold text-center mb-12">My Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <a href="#" className="bg-gray-50 rounded-lg p-6 shadow text-center transform transition duration-300 hover:scale-105 hover:bg-gray-200">
            <FaTools className={`${highlightDefaultClass} ${highlightHoverClass} text-6xl mx-auto mb-4`} />
            <h3 className="text-xl font-semibold mb-2">Business Tools & Solutions</h3>
            <p className="text-sm mb-4">Streamlit apps and AI tools for real-world business impact.</p>
          </a>
          <a href="#" className="bg-gray-50 rounded-lg p-6 shadow text-center transform transition duration-300 hover:scale-105 hover:bg-gray-200">
            <FaBook className={`${highlightDefaultClass} ${highlightHoverClass} text-6xl mx-auto mb-4`} />
            <h3 className="text-xl font-semibold mb-2">Research Work</h3>
            <p className="text-sm mb-4">Publications, projects, and knowledge contributions.</p>
          </a>
          <a href="#" className="bg-gray-50 rounded-lg p-6 shadow text-center transform transition duration-300 hover:scale-105 hover:bg-gray-200">
            <FaBlog className={`${highlightDefaultClass} ${highlightHoverClass} text-6xl mx-auto mb-4`} />
            <h3 className="text-xl font-semibold mb-2">Blogs & Articles</h3>
            <p className="text-sm mb-4">My insights on AI, data science, and product building.</p>
          </a>
        </div>
      </section>

      
      {/* Combined Education + Experience Row */}
      <section className="bg-gray-100 text-gray-800 px-8 py-12">
        <div className="flex flex-wrap justify-center items-center gap-12 max-w-6xl mx-auto">
          <img src={iitLogo} alt="IIT Roorkee" title="IIT Roorkee" className="w-20 h-20 object-contain" />
          <img src={uciLogo} alt="UC Irvine" title="UC Irvine" className="w-20 h-20 object-contain" />
          <img src={gatechLogo} alt="Georgia Tech" title="Georgia Tech" className="w-20 h-20 object-contain" />
          <img src={muSigmaLogo} alt="Mu Sigma" title="Mu Sigma" className="w-20 h-20 object-contain" />
          <img src={deloitteLogo} alt="Deloitte" title="Deloitte" className="w-20 h-20 object-contain" />
          <img src={starbucksLogo} alt="Starbucks" title="Starbucks" className="w-20 h-20 object-contain" />
          <img src={eclerxLogo} alt="eClerx" title="eClerx" className="w-20 h-20 object-contain" />
          <img src={dellLogo} alt="Dell" title="Dell" className="w-20 h-20 object-contain" />
          <img src={amazonLogo} alt="Amazon" title="Amazon" className="w-20 h-20 object-contain" />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6 animate-fadein">
        <p>© {new Date().getFullYear()} Nikhil Singh. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
