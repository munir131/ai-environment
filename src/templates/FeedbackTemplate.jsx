import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Star, Send } from 'lucide-react';

export default function FeedbackTemplate({ 
  title = "Feedback",
  subtitle = "I'd love to hear your thoughts!",
  questions = [],
  contactMethod = "email",
  contactInfo = "your.email@example.com",
  showRating = true
}) {
  const [ratings, setRatings] = useState({});
  const [feedback, setFeedback] = useState({});

  const handleRating = (questionId, rating) => {
    setRatings(prev => ({ ...prev, [questionId]: rating }));
  };

  const handleFeedback = (questionId, value) => {
    setFeedback(prev => ({ ...prev, [questionId]: value }));
  };

  const renderStars = (questionId, currentRating) => {
    return (
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <motion.button
            key={star}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleRating(questionId, star)}
            className="transition-colors"
          >
            <Star
              size={24}
              className={star <= currentRating ? "text-primary fill-primary" : "text-muted"}
            />
          </motion.button>
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-4xl w-full flex flex-col items-center justify-center h-full p-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center mb-12"
      >
        <div className="p-4 bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/10 mb-6 inline-block">
          <MessageSquare size={48} className="text-primary" />
        </div>
        <h2 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
          {title}
        </h2>
        <p className="text-2xl text-muted">{subtitle}</p>
      </motion.div>

      <div className="w-full max-w-2xl space-y-8">
        {questions.map((question, index) => (
          <motion.div
            key={question.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className="bg-surface/50 backdrop-blur-md rounded-xl border border-white/10 p-6"
          >
            <h3 className="text-xl font-semibold text-white mb-4">
              {question.text}
            </h3>

            {showRating && question.type === 'rating' && (
              <div className="mb-4">
                {renderStars(question.id, ratings[question.id] || 0)}
              </div>
            )}

            {question.type === 'text' && (
              <textarea
                value={feedback[question.id] || ''}
                onChange={(e) => handleFeedback(question.id, e.target.value)}
                placeholder="Share your thoughts..."
                className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-muted resize-none h-24 focus:outline-none focus:border-primary/50"
              />
            )}

            {question.type === 'choice' && question.options && (
              <div className="space-y-2">
                {question.options.map((option, optIndex) => (
                  <label key={optIndex} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name={question.id}
                      value={option}
                      onChange={(e) => handleFeedback(question.id, e.target.value)}
                      className="w-4 h-4 text-primary bg-white/5 border-white/10 focus:ring-primary/50"
                    />
                    <span className="text-muted">{option}</span>
                  </label>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-12 text-center space-y-4"
      >
        <p className="text-muted">
          Or reach out directly via {contactMethod}: 
          <a href={`mailto:${contactInfo}`} className="text-primary hover:underline ml-2">
            {contactInfo}
          </a>
        </p>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full hover:shadow-lg transition-all"
        >
          <Send size={18} />
          Send Feedback
        </motion.button>
      </motion.div>
    </div>
  );
}