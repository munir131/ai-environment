import React from 'react';
import { createPresentation } from '../lib/PresentationBuilder';
import { 
  CodeComparisonTemplate, 
  IconGridTemplate, 
  SimpleContentTemplate 
} from '../templates';

// Import slide data
import { titleSlideData } from './data/titleSlide';
import { aboutMeSlideData } from './data/aboutMeSlide';
import { whatIsCodeQualitySlideData } from './data/whatIsCodeQualitySlide';
import { drySlideData } from './data/drySlide';
import { kissSlideData } from './data/kissSlide';
import { yagniSlideData } from './data/yagniSlide';
import { keyCharacteristicsSlideData } from './data/keyCharacteristicsSlide';
import { introducingGeminiSlideData } from './data/introducingGeminiSlide';
import { gettingStartedSlideData } from './data/gettingStartedSlide';
import { craftingPromptsSlideData } from './data/craftingPromptsSlide';
import { liveDemoSlideData } from './data/liveDemoSlide';
import { bestPracticesSlideData } from './data/bestPracticesSlide';
import { thankYouSlideData } from './data/thankYouSlide';

// Create presentation using the builder pattern
export const slides = createPresentation()
  .title(titleSlideData)
  .about(aboutMeSlideData)
  .content(whatIsCodeQualitySlideData)
  .custom(() => React.createElement(CodeComparisonTemplate, drySlideData))
  .custom(() => React.createElement(CodeComparisonTemplate, kissSlideData))
  .custom(() => React.createElement(SimpleContentTemplate, yagniSlideData))
  .custom(() => React.createElement(IconGridTemplate, keyCharacteristicsSlideData))
  .content(introducingGeminiSlideData)
  .content(gettingStartedSlideData)
  .content(craftingPromptsSlideData)
  .content(liveDemoSlideData)
  .custom(() => React.createElement(SimpleContentTemplate, bestPracticesSlideData))
  .thankYou(thankYouSlideData)
  .build();
