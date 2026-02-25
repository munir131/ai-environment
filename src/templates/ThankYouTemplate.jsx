import React from 'react';
import { motion } from 'framer-motion';

export default function ThankYouTemplate({ 
  title = "Thank You!",
  subtitle,
  message,
  contactInfo = [],
  resources = [],
  callToAction
}) {
  const ResourceCard = ({ icon: Icon, title, description, url, displayUrl, delay }) => (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay, duration: 0.5 }}
      className="flex items-center gap-6 p-4 bg-surface/50 backdrop-blur-md rounded-xl border border-white/10 hover:bg-white/10 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] transition-all group w-full"
    >
      <div className="p-3 bg-white/5 rounded-lg text-white group-hover:text-primary group-hover:scale-110 transition-all shrink-0">
        <Icon size={24} />
      </div>
      <div className="flex-1 min-w-0 text-left">
        <div className="flex justify-between items-baseline">
          <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
            {title}
          </h3>
          {displayUrl && (
            <span className="text-xs font-mono text-muted/60 group-hover:text-primary/70 transition-colors hidden sm:block">
              {displayUrl}
            </span>
          )}
        </div>
        <p className="text-muted text-sm truncate">
          {description}
        </p>
      </div>
    </motion.a>
  );

  return (
    <div className="max-w-4xl w-full flex flex-col items-center justify-center h-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center mb-12"
      >
        <h2 className="text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x">
          {title}
        </h2>
        {subtitle && (
          <p className="text-2xl text-muted mb-4">{subtitle}</p>
        )}
        {message && (
          <p className="text-xl text-muted">{message}</p>
        )}
      </motion.div>

      {resources.length > 0 && (
        <div className="flex flex-col gap-4 w-full max-w-2xl mb-12">
          {resources.map((resource, index) => (
            <ResourceCard
              key={index}
              icon={resource.icon}
              title={resource.title}
              description={resource.description}
              url={resource.url}
              displayUrl={resource.displayUrl}
              delay={0.2 + index * 0.1}
            />
          ))}
        </div>
      )}

      {callToAction && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="text-xl text-white font-medium">{callToAction}</p>
        </motion.div>
      )}

      {contactInfo.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex gap-8 text-muted/50"
        >
          {contactInfo.map((contact, index) => (
            <React.Fragment key={index}>
              {index > 0 && <span>•</span>}
              <a 
                href={contact.url} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <contact.icon size={18} />
                {contact.label}
              </a>
            </React.Fragment>
          ))}
        </motion.div>
      )}
    </div>
  );
}