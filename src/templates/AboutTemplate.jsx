import React from 'react';
import { motion } from 'framer-motion';

export default function AboutTemplate({ 
  name,
  role,
  company,
  bio,
  avatar,
  socialLinks = [],
  skills = []
}) {
  return (
    <div className="max-w-4xl w-full flex flex-col items-center justify-center h-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center mb-12"
      >
        <h2 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
          About Me
        </h2>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center gap-12 w-full">
        {avatar && (
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex-shrink-0"
          >
            {typeof avatar === 'string' ? (
              <img
                src={avatar}
                alt={name}
                className="w-48 h-48 rounded-full object-cover border-4 border-white/10 shadow-2xl"
              />
            ) : (
              <div className="w-48 h-48 rounded-full bg-white/10 border-4 border-white/10 shadow-2xl flex items-center justify-center text-white">
                {React.createElement(avatar, { size: 80 })}
              </div>
            )}
          </motion.div>
        )}

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex-1 text-center md:text-left space-y-4"
        >
          <div>
            <h3 className="text-3xl font-bold text-white mb-2">{name}</h3>
            <p className="text-xl text-primary">{role}</p>
            {company && <p className="text-lg text-muted">{company}</p>}
          </div>

          {bio && (
            <p className="text-muted leading-relaxed max-w-2xl">
              {bio}
            </p>
          )}

          {skills.length > 0 && (
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-white/70"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}

          {socialLinks.length > 0 && (
            <div className="flex gap-4 justify-center md:justify-start pt-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted hover:text-white transition-colors"
                >
                  <link.icon size={18} />
                  <span className="text-sm">{link.label}</span>
                </a>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}