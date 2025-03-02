import React from 'react';
import { Beaker, Mail, Phone, MapPin, Github, Twitter, Linkedin, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary-500 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary-500 rounded-full blur-md opacity-30"></div>
                <Beaker className="h-8 w-8 text-primary-400 relative z-10" />
              </div>
              <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400">BioSim</span>
            </motion.div>
            <p className="text-gray-300 text-base max-w-md">
              Discover innovative antibiotic combinations through advanced simulation technology.
              Revolutionizing how researchers combat bacterial resistance.
            </p>
            <div className="flex space-x-6">
              <SocialLink href="#" icon={<Twitter className="h-6 w-6" />} label="Twitter" />
              <SocialLink href="#" icon={<Github className="h-6 w-6" />} label="GitHub" />
              <SocialLink href="#" icon={<Linkedin className="h-6 w-6" />} label="LinkedIn" />
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Navigation</h3>
                <ul className="mt-4 space-y-4">
                  <FooterLink to="/" text="Home" />
                  <FooterLink to="/about" text="About" />
                  <FooterLink to="/faqs" text="FAQs" />
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Resources</h3>
                <ul className="mt-4 space-y-4">
                  <FooterLink to="#" text="Documentation" />
                  <FooterLink to="#" text="Research Papers" />
                  <FooterLink to="#" text="Case Studies" />
                  <FooterLink to="#" text="API" />
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Contact Us</h3>
                <ul className="mt-4 space-y-4">
                  <li className="flex items-center group">
                    <Mail className="h-5 w-5 text-primary-400 mr-2 group-hover:text-primary-300 transition-colors" />
                    <a href="mailto:info@biosim.com" className="text-base text-gray-400 hover:text-white transition-colors">
                      info@biosim.com
                    </a>
                  </li>
                  <li className="flex items-center group">
                    <Phone className="h-5 w-5 text-primary-400 mr-2 group-hover:text-primary-300 transition-colors" />
                    <a href="tel:+1234567890" className="text-base text-gray-400 hover:text-white transition-colors">
                      +1 (234) 567-890
                    </a>
                  </li>
                  <li className="flex items-start group">
                    <MapPin className="h-5 w-5 text-primary-400 mr-2 mt-1 group-hover:text-primary-300 transition-colors" />
                    <span className="text-base text-gray-400">
                      123 Science Way, Research Park, CA 94103, USA
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-base text-gray-400">
              &copy; 2025 BioSim. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon, label }) => (
  <motion.a 
    href={href} 
    className="text-gray-400 hover:text-white transition-colors"
    whileHover={{ scale: 1.2, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
  >
    <span className="sr-only">{label}</span>
    {icon}
  </motion.a>
);

const FooterLink = ({ to, text }) => (
  <li>
    <Link 
      to={to} 
      className="text-base text-gray-400 hover:text-white transition-colors flex items-center group"
    >
      {text}
      <ArrowUpRight 
        size={14} 
        className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" 
      />
    </Link>
  </li>
);

export default Footer