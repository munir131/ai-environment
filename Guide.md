# Creating a New Presentation

This guide will help you create a new presentation using the reusable template system.

## Quick Start

### 1. Create Your Presentation Data

Create a new file in `src/slides/data/` for your presentation content:

```javascript
// src/slides/data/myPresentation.js
import { Code2, User, Heart } from 'lucide-react';

export const myPresentationData = [
  {
    type: 'title',
    data: {
      title: "My Awesome Talk",
      subtitle: "Building Modern Web Apps",
      icon: Code2,
      presenter: "John Doe • Developer"
    }
  },
  {
    type: 'about',
    data: {
      name: "John Doe",
      role: "Senior Developer",
      company: "Tech Corp",
      bio: "Passionate about web development...",
      avatar: User
    }
  },
  {
    type: 'content',
    data: {
      title: "Key Concepts",
      bullets: [
        "Component-based architecture",
        "State management patterns",
        "Performance optimization"
      ]
    }
  },
  {
    type: 'thankYou',
    data: {
      title: "Thank You!",
      icon: Heart,
      resources: [
        {
          icon: Github,
          title: "Source Code",
          url: "https://github.com/user/repo",
          description: "View on GitHub"
        }
      ]
    }
  }
];
```

### 2. Create Your Presentation Builder

Create a new file to assemble your presentation:

```javascript
// src/slides/myPresentation.js
import React from 'react';
import { createPresentation } from '../lib/PresentationBuilder';
import { CodeComparisonTemplate } from '../templates/CodeComparisonTemplate';
import { myPresentationData } from './data/myPresentation';

export const myPresentationSlides = createPresentation();

// Add slides based on your data
myPresentationData.forEach(slide => {
  switch (slide.type) {
    case 'title':
      myPresentationSlides.title(slide.data);
      break;
    case 'about':
      myPresentationSlides.about(slide.data);
      break;
    case 'content':
      myPresentationSlides.content(slide.data);
      break;
    case 'thankYou':
      myPresentationSlides.thankYou(slide.data);
      break;
    case 'codeComparison':
      myPresentationSlides.custom(() => 
        React.createElement(CodeComparisonTemplate, slide.data)
      );
      break;
  }
});

export const slides = myPresentationSlides.build();
```

### 3. Update Your App

Replace the slides import in your main component:

```javascript
// src/App.jsx
import { slides } from './slides/myPresentation';
// instead of
// import { slides } from './slides';
```

## Available Templates

### TitleTemplate
Use for title slides with optional icon and presenter info.

```javascript
{
  type: 'title',
  data: {
    title: "Presentation Title",
    subtitle: "Optional subtitle",
    icon: Code2, // Lucide React icon
    presenter: "Name • Role",
    iconColor: "text-primary"
  }
}
```

### AboutTemplate
Use for personal introduction slides.

```javascript
{
  type: 'about',
  data: {
    name: "John Doe",
    role: "Senior Developer",
    company: "Tech Corp",
    bio: "Brief bio...",
    avatar: User, // Lucide React icon
    companyLink: "https://example.com"
  }
}
```

### ContentTemplate
Use for content slides with text and bullet points.

```javascript
{
  type: 'content',
  data: {
    title: "Slide Title",
    subtitle: "Optional subtitle",
    content: "Main content text",
    bullets: ["Point 1", "Point 2"],
    layout: "center" // "center", "left", "split"
  }
}
```

### CodeComparisonTemplate
Use for before/after code comparisons.

```javascript
{
  type: 'codeComparison',
  data: {
    title: "DRY Principle",
    subtitle: "Don't Repeat Yourself",
    beforeTitle: "Before (Repetitive)",
    beforeCode: `function processUser(user) {
      // validation logic
      if (!user.name || !user.email) {
        console.error("Invalid user");
        return;
      }
    }`,
    afterTitle: "After (DRY)",
    afterCode: `function validate(data, fields) {
      for (const field of fields) {
        if (!data[field]) {
          console.error(\`Invalid \${field}\`);
          return false;
        }
      }
      return true;
    }`
  }
}
```

### IconGridTemplate
Use for displaying a grid of items with icons.

```javascript
{
  type: 'iconGrid',
  data: {
    title: "Key Features",
    characteristics: [
      { 
        icon: Star, 
        title: "Readability", 
        description: "Easy to understand code" 
      },
      { 
        icon: Shield, 
        title: "Security", 
        description: "Protected from vulnerabilities" 
      }
    ]
  }
}
```

### ThankYouTemplate
Use for closing slides with resources.

```javascript
{
  type: 'thankYou',
  data: {
    title: "Thank You!",
    icon: Heart,
    subtitle: "Resources:",
    resources: [
      {
        icon: Github,
        title: "Source Code",
        url: "https://github.com/user/repo",
        description: "View on GitHub"
      }
    ]
  }
}
```

## Custom Slides

For slides that don't fit the templates, create custom components:

```javascript
// src/slides/data/myCustomSlide.js
export const myCustomSlideData = {
  title: "Custom Slide",
  // your custom data
};

// In your presentation builder
{
  type: 'custom',
  data: myCustomSlideData,
  component: MyCustomSlideComponent
}
```

## Best Practices

### 1. Organize Your Data
- Keep all slide data in the `data/` directory
- Use descriptive file names
- Group related slides together

### 2. Use Consistent Naming
- Follow the pattern: `[presentationName]Slide.js`
- Use camelCase for property names
- Be consistent with data structure

### 3. Reuse Templates
- Prefer existing templates over custom components
- Customize templates with data rather than code
- Keep styling consistent across presentations

### 4. Test Your Presentation
- Build the project to check for errors
- Test all slides in the browser
- Verify animations and transitions work

### 5. Version Control
- Commit your data files separately from code changes
- Use meaningful commit messages
- Tag presentation releases

## Advanced Features

### Custom Themes
Apply different themes to your presentation:

```javascript
import { applyTheme } from '../lib/themes';

// Apply a theme
applyTheme('neon'); // Options: 'default', 'minimal', 'neon', 'warm'
```

### Animations
Control animations in your data:

```javascript
{
  type: 'content',
  data: {
    title: "Animated Slide",
    bullets: ["Point 1", "Point 2"],
    animations: {
      stagger: 0.1, // Delay between bullet animations
      duration: 0.6 // Animation duration
    }
  }
}
```

### Conditional Content
Show different content based on conditions:

```javascript
{
  type: 'content',
  data: {
    title: "Dynamic Content",
    bullets: isAdvanced 
      ? ["Advanced topic 1", "Advanced topic 2"]
      : ["Basic topic 1", "Basic topic 2"]
  }
}
```

## Troubleshooting

### Common Issues

1. **Build Errors**: Check that all imports are correct and data structures match templates
2. **Missing Content**: Verify property names match what templates expect (`bullets` not `tips`)
3. **Icon Issues**: Make sure to import icons from `lucide-react`
4. **Animation Problems**: Check that motion components are properly wrapped

### Debug Tips

- Use the browser console to check for errors
- Verify data structures with `console.log()`
- Test slides individually before assembling the full presentation
- Check the network tab for missing imports

## Examples

See the existing presentation in `src/slides/` for a complete example of how to structure data and use templates.

## Need Help?

- Check the existing slides for reference
- Look at the template components in `src/templates/`
- Review the PresentationBuilder in `src/lib/PresentationBuilder.js`
- Test with the development server: `npm run dev`