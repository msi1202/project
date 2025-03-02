import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Microscope } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300/30 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary-300/20 rounded-full filter blur-3xl"></div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <motion.div 
            className="lg:col-span-6 flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <motion.div 
                className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-primary-50 text-primary-700 mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <Zap size={16} className="mr-2" />
                Next-Gen Antibiotic Research
              </motion.div>
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <span className="block text-gray-900">Discover innovative</span>
                <span className="block mt-1 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
                  antibiotic combinations
                </span>
              </motion.h1>
              <motion.p 
                className="mt-6 text-lg text-gray-600 max-w-3xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Through advanced simulation technology, we're revolutionizing how researchers identify effective antibiotic combinations to combat resistant bacteria.
              </motion.p>
            </div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <motion.button 
                className="btn-primary group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Simulation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </motion.button>
              <motion.button 
                className="btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
            
            <motion.div 
              className="mt-12 grid grid-cols-2 gap-x-4 gap-y-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary-600">
                    <Microscope className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Advanced AI</h3>
                  <p className="mt-1 text-sm text-gray-500">Powered by cutting-edge machine learning algorithms</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary-600">
                    <Shield className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Secure Data</h3>
                  <p className="mt-1 text-sm text-gray-500">Your research data remains private and protected</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="mt-16 lg:mt-0 lg:col-span-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-full flex justify-center items-center">
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary-400/20 rounded-full filter blur-xl animate-pulse-slow"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary-400/20 rounded-full filter blur-xl animate-pulse-slow"></div>
              
              {/* Main image with blob shape */}
              <motion.div 
                className="relative z-10 w-full h-full max-h-[500px] overflow-hidden blob"
                animate={{ rotate: [0, 1, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
              >
                <img
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                  alt="Scientific laboratory with advanced equipment"
                />
              </motion.div>
              
              {/* Floating card */}
              <motion.div 
                className="absolute -bottom-6 -left-6 glass-card p-4 max-w-xs"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Zap className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-gray-900">Success Rate</h3>
                    <div className="mt-1 flex items-center">
                      <span className="text-2xl font-bold text-green-600">94%</span>
                      <span className="ml-2 text-sm text-gray-500">accuracy in predictions</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="relative z-10">
        <svg className="w-full h-24 fill-white" viewBox="0 0 1440 74" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,37.1L48,42.5C96,47.8,192,58.6,288,58.6C384,58.6,480,47.8,576,42.5C672,37.1,768,37.1,864,42.5C960,47.8,1056,58.6,1152,58.6C1248,58.6,1344,47.8,1392,42.5L1440,37.1V74H1392C1344,74,1248,74,1152,74C1056,74,960,74,864,74C768,74,672,74,576,74C480,74,384,74,288,74C192,74,96,74,48,74H0V37.1Z" />
        </svg>
      </div>
      
      {/* Features section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h2 
              className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Revolutionizing Antibiotic Research
            </motion.h2>
            <motion.p 
              className="mt-4 max-w-2xl mx-auto text-xl text-gray-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Our platform combines AI, big data, and microbiology expertise
            </motion.p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                {
                  title: "AI-Powered Analysis",
                  description: "Our algorithms analyze thousands of antibiotic combinations to identify optimal treatments.",
                  icon: <Microscope className="h-6 w-6" />,
                  delay: 0
                },
                {
                  title: "Real-time Simulations",
                  description: "Test potential treatments against virtual bacterial models before lab testing.",
                  icon: <Zap className="h-6 w-6" />,
                  delay: 0.2
                },
                {
                  title: "Research Collaboration",
                  description: "Connect with researchers worldwide to share findings and accelerate discovery.",
                  icon: <Shield className="h-6 w-6" />,
                  delay: 0.4
                }
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  className="card p-6 hover:-translate-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: feature.delay, duration: 0.8 }}
                >
                  <div className="h-12 w-12 rounded-md bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-medium text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;