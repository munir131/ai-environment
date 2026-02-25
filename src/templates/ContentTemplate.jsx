import React from 'react';
import { motion } from 'framer-motion';

export default function ContentTemplate({ 
  title,
  subtitle,
  content,
  bullets = [],
  code = null,
  image = null,
  layout = "center" // "center", "left", "split"
}) {
  const renderContent = () => {
    if (typeof content === 'string') {
      return <p className="text-xl text-muted leading-relaxed">{content}</p>;
    }
    return content;
  };

  const renderBullets = () => (
    <ul className="space-y-3 text-left">
      {bullets.map((bullet, index) => (
        <motion.li
          key={index}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 + index * 0.1 }}
          className="flex items-start gap-3 text-lg text-muted"
        >
          <span className="text-primary mt-1">•</span>
          <span>{bullet}</span>
        </motion.li>
      ))}
    </ul>
  );

  const renderCode = () => (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="bg-surface/50 backdrop-blur-md rounded-xl border border-white/10 p-6 font-mono text-sm overflow-x-auto"
    >
      <pre className="text-green-400">{code}</pre>
    </motion.div>
  );

  const renderImage = () => (
    <motion.img
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5 }}
      src={image}
      alt="Content"
      className="max-w-full h-auto rounded-xl border border-white/10 shadow-2xl"
    />
  );

  const getLayoutClasses = () => {
    switch (layout) {
      case "left":
        return "items-start text-left";
      case "split":
        return "items-center";
      default:
        return "items-center text-center";
    }
  };

  return (
    <div className={`max-w-6xl w-full flex flex-col ${getLayoutClasses()} justify-center h-full p-8`}>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h2 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
          {title}
        </h2>
        {subtitle && (
          <p className="text-2xl text-muted">{subtitle}</p>
        )}
      </motion.div>

      <div className={`w-full ${layout === 'split' ? 'grid grid-cols-1 md:grid-cols-2 gap-12' : 'space-y-8'}`}>
        <div className="space-y-6">
          {renderContent()}
          {bullets.length > 0 && renderBullets()}
        </div>

        {(code || image) && (
          <div className="flex items-center justify-center">
            {code ? renderCode() : renderImage()}
          </div>
        )}
      </div>
    </div>
  );
}