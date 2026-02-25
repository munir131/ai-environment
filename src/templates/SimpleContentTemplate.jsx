import React from 'react';
import { motion } from 'framer-motion';
import { XCircle } from 'lucide-react';

export default function SimpleContentTemplate({ 
  title, 
  subtitle, 
  example, 
  conclusion,
  bullets,
  practices 
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
        {subtitle && (
          <p className="text-xl text-white/80 max-w-3xl">
            {subtitle}
          </p>
        )}
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="max-w-4xl w-full space-y-8"
      >
        {example && (
          <div className="bg-white/5 backdrop-blur-2xl rounded-2xl shadow-[0_0_30px_rgba(34,211,238,0.15)] border border-white/10 ring-1 ring-white/20 p-8">
            <h3 className="text-2xl font-semibold text-primary mb-6 flex items-center gap-3">
              <XCircle size={32} />
              Example:
            </h3>
            
            <div className="space-y-4 text-lg text-white/90">
              <div className="flex items-start gap-3">
                <span className="text-red-400 font-semibold">Scenario:</span>
                <span>{example.scenario}</span>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-orange-400 font-semibold">Temptation:</span>
                <span>{example.temptation}</span>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-green-400 font-semibold">YAGNI says:</span>
                <span>{example.yagniSays}</span>
              </div>
            </div>
          </div>
        )}

        {bullets && (
          <div className="grid grid-cols-1 gap-4">
            {bullets.map((bullet, index) => (
              <motion.div
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10"
              >
                <p className="text-lg text-white/90">{bullet}</p>
              </motion.div>
            ))}
          </div>
        )}

        {practices && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {practices.map((practice, index) => (
              <motion.div
                key={practice.title}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                className="p-6 bg-white/5 backdrop-blur-2xl rounded-2xl shadow-[0_0_30px_rgba(34,211,238,0.15)] border border-white/10 ring-1 ring-white/20 hover:bg-white/10 transition-colors"
              >
                <practice.icon size={32} className="text-primary mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{practice.title}</h3>
                <p className="text-white/70">{practice.description}</p>
              </motion.div>
            ))}
          </div>
        )}

        {conclusion && (
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-xl p-6 border border-green-500/30"
          >
            <p className="text-lg text-white/90 text-center">
              {conclusion}
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}