import React from 'react';
import { motion } from 'framer-motion';

export default function CodeComparisonTemplate({ 
  title, 
  subtitle, 
  beforeTitle, 
  beforeCode, 
  afterTitle, 
  afterCode 
}) {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            {title}
          </span>
        </h1>
        <p className="text-xl text-white/80 max-w-3xl">
          {subtitle}
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl w-full"
      >
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-red-400 mb-4">{beforeTitle}</h3>
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-red-500/30">
            <pre className="text-sm text-white/90 overflow-x-auto">
              {beforeCode}
            </pre>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-green-400 mb-4">{afterTitle}</h3>
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-green-500/30">
            <pre className="text-sm text-white/90 overflow-x-auto">
              {afterCode}
            </pre>
          </div>
        </div>
      </motion.div>
    </div>
  );
}