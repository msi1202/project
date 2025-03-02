import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Beaker, X } from 'lucide-react';

const Dashboard = () => {
  const [prompt, setPrompt] = useState('');
  const [expandedBlock, setExpandedBlock] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle prompt submission with backend API
    console.log('Submitted prompt:', prompt);
  };

  const infoBlocks = [
    {
      title: "Bacterial Analysis",
      description: "Our advanced machine learning algorithms analyze bacterial strains with unprecedented precision. By leveraging extensive databases of bacterial behaviors and resistance patterns, we can identify specific strain characteristics and predict their responses to various antibiotics. This system considers multiple factors including genetic markers, environmental conditions, and historical treatment outcomes to provide comprehensive analysis results that guide effective treatment strategies.",
      image: "https://images.unsplash.com/photo-1583912267550-d44c9c34c23c?auto=format&fit=crop&w=500&h=300&q=80"
    },
    {
      title: "Treatment Safety",
      description: "Safety is paramount in our analysis process. Our comprehensive evaluation system assesses potential side effects, drug interactions, and patient-specific risk factors. We analyze historical safety data, known contraindications, and individual patient profiles to ensure recommended treatments minimize risks while maximizing effectiveness. This includes detailed analysis of drug-drug interactions, allergic reaction possibilities, and cumulative toxicity considerations.",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=500&h=300&q=80"
    },
    {
      title: "Quick Results",
      description: "Our high-performance computing infrastructure delivers simulation results within seconds. This rapid analysis capability enables healthcare providers to evaluate multiple treatment options quickly and make time-critical decisions. The system processes vast amounts of data, running complex simulations and analyzing multiple scenarios simultaneously to provide comprehensive yet swift results that can be immediately acted upon in clinical settings.",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=500&h=300&q=80"
    },
    {
      title: "Smart Predictions",
      description: "Our AI-driven prediction system is built on extensive medical research and clinical data analysis. By processing millions of data points from real-world clinical outcomes, research papers, and treatment histories, we generate highly accurate predictions for treatment effectiveness. The system continuously learns from new data, improving its predictive capabilities and adapting to emerging bacterial resistance patterns in real-time.",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=500&h=300&q=80"
    },
    {
      title: "Precision Targeting",
      description: "Our precision targeting system identifies specific antibiotic combinations optimized for resistant strains. Using advanced molecular modeling and bacterial genome analysis, we can pinpoint vulnerabilities in even the most resistant bacteria. This targeted approach helps develop customized treatment strategies that are more likely to succeed where conventional approaches might fail, particularly in cases involving multi-drug resistant organisms.",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=500&h=300&q=80"
    },
    {
      title: "Lab Validated",
      description: "Every aspect of our system has been rigorously validated through comprehensive laboratory testing and clinical trials. Our recommendations are backed by extensive experimental data and real-world clinical outcomes. We maintain partnerships with leading research institutions and hospitals to continuously validate and improve our prediction models, ensuring that our suggestions are both scientifically sound and clinically relevant for real-world applications.",
      image: "https://images.unsplash.com/photo-1583912267550-d44c9c34c23c?auto=format&fit=crop&w=500&h=300&q=80"
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-primary-50 to-white">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300/30 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary-300/20 rounded-full filter blur-3xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="relative z-10 container mx-auto px-4 py-12"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="block text-gray-900">Welcome to</span>
            <span className="block mt-1 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
              Simulation Dashboard
            </span>
          </motion.h1>
          <motion.div 
            className="mt-6 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="h-1 w-24 bg-gradient-to-r from-primary-500 to-secondary-500 rounded"></div>
          </motion.div>
          <motion.p 
            className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Enter your bacterial infection details below, and our AI will suggest effective antibiotic combinations.
          </motion.p>
        </motion.div>
        

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="bg-white rounded-xl shadow-lg p-8 backdrop-blur-lg bg-white/80">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="prompt" className="block text-lg font-medium text-gray-700 mb-3">
                  Enter your simulation prompt
                </label>
                <div className="relative">
                  <textarea
                    id="prompt"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 min-h-[160px] text-base"
                    placeholder="Describe your bacterial infection scenario in detail..."
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Include relevant details such as infection type, symptoms, and any known resistances.
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-3 px-6 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Run Simulation</span>
                <Beaker className="h-5 w-5" />
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Info Blocks */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {infoBlocks.map((block, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                onClick={() => setExpandedBlock(index)}
                className="bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden cursor-pointer h-[250px]"
              >
                <div className="flex h-full">
                  <div className="w-1/2">
                    <img
                      src={block.image}
                      alt={block.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-1/2 p-6 flex flex-col">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
                      {block.title}
                    </h3>
                    <div className="text-gray-600 overflow-hidden flex-1">
                      <div className="pr-4">
                        <p className="line-clamp-2">{block.description}</p>
                        <div className="flex items-center mt-1">
                          <span className="text-gray-600 text-sm">...</span>
                          <span className="text-primary-600 font-medium text-sm ml-1">Click to read more</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Popup Overlay */}
        <AnimatePresence>
          {expandedBlock !== null && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
                onClick={() => setExpandedBlock(null)}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ type: "spring", duration: 0.5 }}
                  className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden"
                  style={{ height: '600px' }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setExpandedBlock(null)}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-10 bg-white/80 backdrop-blur-sm"
                  >
                    <X className="w-6 h-6 text-gray-600" />
                  </button>
                  <div className="flex h-full">
                    <div className="w-[55%] h-full">
                      <img
                        src={infoBlocks[expandedBlock].image}
                        alt={infoBlocks[expandedBlock].title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-[45%] p-8 overflow-y-auto">
                      <h2 className="text-2xl font-semibold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
                        {infoBlocks[expandedBlock].title}
                      </h2>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {infoBlocks[expandedBlock].description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Dashboard; 