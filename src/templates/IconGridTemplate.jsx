import React from 'react';
import { motion } from 'framer-motion';

export default function IconGridTemplate({ title, characteristics }) {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
            {title}
          </span>
        </h1>
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className={`grid grid-cols-1 md:grid-cols-2 ${characteristics.length === 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-3'} gap-6 max-w-6xl w-full`}
      >
        {characteristics.map((char, index) => (
          <motion.div
            key={char.title}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
            className="p-6 bg-white/5 backdrop-blur-2xl rounded-2xl shadow-[0_0_30px_rgba(34,211,238,0.15)] border border-white/10 ring-1 ring-white/20 hover:bg-white/10 transition-colors"
          >
            <char.icon size={32} className="text-primary mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">{char.title}</h3>
            <p className="text-white/70 text-sm">{char.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}