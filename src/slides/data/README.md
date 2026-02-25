# Slide Data Files

This directory contains the data for each slide in the presentation, separated from the presentation logic and styling.

## Structure

Each file exports a data object that follows the structure expected by the corresponding template:

### titleSlide.js
- `title`: Main title text
- `subtitle`: Subtitle text (optional)
- `icon`: Lucide React icon component
- `presenter`: Presenter information
- `showStartHint`: Whether to show start hint
- `iconColor`: Color class for the icon

### aboutMeSlide.js
- `name`: Presenter name
- `role`: Job role
- `company`: Company name
- `bio`: Biography text
- `avatar`: Lucide React icon or image path
- `companyLink`: URL to company website

### contentTemplate-based slides
- `title`: Slide title
- `subtitle`: Subtitle (optional)
- `content`: Main content text
- `bullets`: Array of bullet points
- `steps`: Array of step-by-step instructions

### codeComparisonTemplate-based slides
- `title`: Slide title
- `subtitle`: Description text
- `beforeTitle`: Title for "before" code
- `beforeCode`: Code to show "before"
- `afterTitle`: Title for "after" code  
- `afterCode`: Code to show "after"

### iconGridTemplate-based slides
- `title`: Slide title
- `characteristics`: Array of objects with `icon`, `title`, and `description`

### thankYouSlide.js
- `title`: Thank you message
- `subtitle`: Subtitle text
- `icon`: Lucide React icon component
- `resources`: Array of resource objects with `icon`, `title`, `url`, and `description`

## Usage

These data files are imported and used in `../index.js` with the PresentationBuilder pattern:

```javascript
import { titleSlideData } from './data/titleSlide';

export const slides = createPresentation()
  .title(titleSlideData)
  // ... more slides
  .build();
```

## Benefits

1. **Separation of Concerns**: Content is separated from presentation logic
2. **Reusability**: Templates can be reused across different presentations
3. **Easy Maintenance**: Content can be updated without touching code
4. **Internationalization**: Easy to create multilingual presentations
5. **Consistency**: Ensures consistent styling across all slides