import { Star, Zap, Shield, Gauge, Tag, Users } from 'lucide-react';

export const keyCharacteristicsSlideData = {
  title: "Key Characteristics of Quality Code",
  characteristics: [
    { icon: Star, title: "Readability", description: "Is the code easy to understand for other developers?" },
    { icon: Shield, title: "Testability", description: "Can you write tests for the code easily?" },
    { icon: Users, title: "Maintainability", description: "How easy is it to fix bugs or add new features?" },
    { icon: Gauge, title: "Performance", description: "Does the code run efficiently?" },
    { icon: Tag, title: "Naming Conventions", description: "Are variables, functions, and classes named clearly and consistently?" },
    { icon: Zap, title: "Efficiency", description: "Is the code optimized for both time and space complexity?" }
  ]
};