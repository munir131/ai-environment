import { Heart, ExternalLink, Github, Globe } from 'lucide-react';

export const thankYouSlideData = {
  title: "Thank You!",
  icon: Heart,
  subtitle: "Resources:",
  resources: [
    {
      icon: Globe,
      title: "Gemini Documentation",
      url: "https://ai.google.dev",
      description: "Official documentation and API reference"
    },
    {
      icon: Github,
      title: "Demo Repo",
      url: "https://github.com/munir131/pubsub-eda",
      description: "Example implementations and code samples"
    },
    {
      icon: ExternalLink,
      title: "This Presentation",
      url: "https://optimizewithmunir.com/code-quality-with-gemini-slides",
      description: "Slides and additional resources"
    }
  ]
};