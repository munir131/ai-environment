import React from 'react';
import { 
  TitleTemplate, 
  AboutTemplate, 
  ContentTemplate, 
  ThankYouTemplate, 
  FeedbackTemplate 
} from '../templates';

export class PresentationBuilder {
  constructor(config = {}) {
    this.config = {
      theme: 'default',
      animations: true,
      ...config
    };
    this.slides = [];
  }

  title(data) {
    this.slides.push(() => React.createElement(TitleTemplate, data));
    return this;
  }

  about(data) {
    this.slides.push(() => React.createElement(AboutTemplate, data));
    return this;
  }

  content(data) {
    this.slides.push(() => React.createElement(ContentTemplate, data));
    return this;
  }

  thankYou(data) {
    this.slides.push(() => React.createElement(ThankYouTemplate, data));
    return this;
  }

  feedback(data) {
    this.slides.push(() => React.createElement(FeedbackTemplate, data));
    return this;
  }

  custom(component) {
    this.slides.push(component);
    return this;
  }

  build() {
    return this.slides;
  }
}

export const createPresentation = (config) => {
  return new PresentationBuilder(config);
};