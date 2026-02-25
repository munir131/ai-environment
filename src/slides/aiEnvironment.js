import React from 'react';
import { createPresentation } from '../lib/PresentationBuilder';
import { aiEnvironmentData } from './data/aiEnvironment';
import IconGridTemplate from '../templates/IconGridTemplate';

export const aiEnvironmentSlides = createPresentation();

aiEnvironmentData.forEach(slide => {
  switch (slide.type) {
    case 'title':
      aiEnvironmentSlides.title(slide.data);
      break;
    case 'about':
      aiEnvironmentSlides.about(slide.data);
      break;
    case 'content':
      aiEnvironmentSlides.content(slide.data);
      break;
    case 'iconGrid':
      aiEnvironmentSlides.custom(() => 
        React.createElement(IconGridTemplate, slide.data)
      );
      break;
    case 'thankYou':
      aiEnvironmentSlides.thankYou(slide.data);
      break;
  }
});

export const slides = aiEnvironmentSlides.build();
