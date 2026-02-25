export const themes = {
  default: {
    colors: {
      background: '#030712',
      surface: 'rgba(17, 24, 39, 0.7)',
      primary: '#22d3ee',
      secondary: '#a78bfa',
      accent: '#e879f9',
      text: '#f8fafc',
      muted: '#94a3b8',
    },
    fonts: {
      sans: ['Inter', 'sans-serif'],
      mono: ['JetBrains Mono', 'monospace'],
    },
    animations: {
      enabled: true,
      duration: 0.5,
      easing: [0.22, 1, 0.36, 1],
    }
  },
  
  minimal: {
    colors: {
      background: '#ffffff',
      surface: 'rgba(248, 250, 252, 0.7)',
      primary: '#1e40af',
      secondary: '#7c3aed',
      accent: '#dc2626',
      text: '#111827',
      muted: '#6b7280',
    },
    fonts: {
      sans: ['System UI', 'sans-serif'],
      mono: ['SF Mono', 'monospace'],
    },
    animations: {
      enabled: true,
      duration: 0.3,
      easing: 'ease-out',
    }
  },

  neon: {
    colors: {
      background: '#0a0a0a',
      surface: 'rgba(20, 20, 20, 0.8)',
      primary: '#00ff88',
      secondary: '#ff00ff',
      accent: '#00ffff',
      text: '#ffffff',
      muted: '#888888',
    },
    fonts: {
      sans: ['Space Mono', 'monospace'],
      mono: ['Space Mono', 'monospace'],
    },
    animations: {
      enabled: true,
      duration: 0.7,
      easing: 'ease-in-out',
    }
  },

  warm: {
    colors: {
      background: '#451a03',
      surface: 'rgba(120, 53, 15, 0.7)',
      primary: '#fbbf24',
      secondary: '#fb923c',
      accent: '#f87171',
      text: '#fef3c7',
      muted: '#fed7aa',
    },
    fonts: {
      sans: ['Georgia', 'serif'],
      mono: ['Courier New', 'monospace'],
    },
    animations: {
      enabled: true,
      duration: 0.6,
      easing: 'ease-out',
    }
  }
};

export const applyTheme = (themeName) => {
  const theme = themes[themeName] || themes.default;
  
  const root = document.documentElement;
  
  // Apply colors
  Object.entries(theme.colors).forEach(([key, value]) => {
    root.style.setProperty(`--color-${key}`, value);
  });
  
  // Apply fonts
  Object.entries(theme.fonts).forEach(([key, value]) => {
    root.style.setProperty(`--font-${key}`, value.join(', '));
  });
  
  return theme;
};