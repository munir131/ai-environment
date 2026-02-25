import { 
  Terminal, 
  User, 
  Cpu, 
  Bot, 
  Code, 
  Zap, 
  Globe, 
  TrendingUp, 
  Heart,
  Layers,
  Command,
  Wrench,
  Brain,
  Rocket
} from 'lucide-react';

export const aiEnvironmentData = [
  {
    type: 'title',
    data: {
      title: "How to Build Your AI Environment",
      icon: Terminal,
      presenter: "Munir Khakhi • Backend Infrastructure Developer",
      iconColor: "text-blue-500"
    }
  },
  {
    type: 'about',
    data: {
      name: "Munir Khakhi",
      role: "Principal Backend Developer",
      bio: "Passionate about clean code, developer experience, and cloud technologies.\nEnjoys adding apps in homelab, attends events and contribute to open source.",
      avatar: "https://avatars.githubusercontent.com/u/6319375?v=4",
      companyLink: "https://optimizewithmunir.com"
    }
  },
  {
    type: 'content',
    data: {
      title: "Agenda",
      subtitle: "What we'll cover today",
      bullets: [
        "LLM vs AI: Understanding the difference",
        "Core Concepts: Agents, Skills, Commands",
        "The Tooling Landscape",
        "Deep Dive: OpenCode, Gemini CLI, Antigravity",
        "VS Code & AI Extensions",
        "Models & Prompts",
        "Market Evolution: Why you need to upgrade"
      ],
      layout: "left"
    }
  },
  {
    type: 'iconGrid',
    data: {
      title: "LLM vs AI",
      characteristics: [
        {
          icon: Brain,
          title: "Artificial Intelligence",
          description: "The broad discipline of creating intelligent machines capable of performing tasks that typically require human intelligence."
        },
        {
          icon: Layers,
          title: "Large Language Models",
          description: "A specialized subset of AI trained on vast amounts of text data to understand, generate, and manipulate human language."
        }
      ]
    }
  },
  {
    type: 'content',
    data: {
      title: "Core Concepts",
      subtitle: "Building blocks of an AI environment",
      bullets: [
        "Agents: Autonomous entities that can plan and execute tasks",
        "Skills: Specific capabilities or tools an agent can use (e.g., 'git', 'search')",
        "Commands: Direct instructions or triggers for specific actions",
        "Tools: The software that orchestrates these agents and models"
      ],
      layout: "left"
    }
  },
  {
    type: 'content',
    data: {
      title: "The Tooling Landscape",
      subtitle: "It's not just about the tool, it's about the concepts",
      bullets: [
        "Agents: The 'Who' - Specialized personas (Architect, Backend Dev)",
        "Skills: The 'How' - Capabilities they possess (Coding, Testing)",
        "Commands: The 'What' - Actions they execute (Setup, Deploy)",
        "Tools like OpenCode & Antigravity are just the orchestrators"
      ],
      layout: "split",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=1064&q=80" // Generic tech/code image
    }
  },
  {
    type: 'content',
    data: {
      title: "Defining an Agent",
      subtitle: "Example: The Architect",
      code: `---
name: architect
description: An infrastructure and environment specialist.
model: google/gemini-3-pro-preview
temperature: 0.2
---
You are an Architect agent. Your goal is to design robust infrastructure.

Responsibilities:
- Design local development environments (Docker, Compose).
- Plan automated testing strategies and CI/CD pipelines.
- Ensure scalability, maintainability, and security.

Output:
- Provide concrete configuration examples (Dockerfile, CI yamls).
- Explain the rationale behind architectural decisions.`,
      layout: "left"
    }
  },
  {
    type: 'content',
    data: {
      title: "Defining a Skill",
      subtitle: "Example: Backend Development",
      code: `---
name: backend
description: Specialized skill for robust, 12-factor backend development
---
Develop backend services adhering to the following standards:

12-Factor App Patterns:
- **Config**: Strict separation of config from code.
- **Processes**: Execute the app as one or more stateless processes.
- **Disposability**: Graceful shutdown and fast startup.

Architecture & Design:
- **Separation of Concerns**: Separate business logic from transport.
- **TDD**: Test-Driven Development is mandatory.
- **Event-Driven**: Utilize event-driven architecture where appropriate.`,
      layout: "left"
    }
  },
  {
    type: 'content',
    data: {
      title: "Defining a Command",
      subtitle: "Example: Project Setup",
      code: `---
description: Bootstraps a new project with standard configuration.
---
You are the Project Initializer. Your goal is to set up a robust foundation.

Steps:
1. **Git Initialization**: 
   - Run \`git init\` if the directory is not already a repository.
2. **Package Management**:
   - Detect the language/stack.
   - Run the standard initialization command (e.g., \`npm init -y\`).
3. **Configuration Files**:
   - Create a \`.gitignore\` file tailored to the project stack.
   - Create an \`.editorconfig\` file.
4. **Quality Assurance**:
   - Set up **pre-commit hooks** (using \`husky\`).`,
      layout: "left"
    }
  },
  {
    type: 'content',
    data: {
      title: "OpenCode",
      subtitle: "The Open Source AI Coding Agent",
      bullets: [
        "Terminal-based & Privacy-focused",
        "Model Agnostic: Use Claude, GPT, Gemini, or local models",
        "No vendor lock-in",
        "Great for: Scripts, quick refactors, and command-line workflows"
      ],
      layout: "left"
    }
  },
  {
    type: 'content',
    data: {
      title: "Gemini CLI",
      subtitle: "Google's AI in your Terminal",
      bullets: [
        "Deep integration with Google's ecosystem",
        "Multimodal capabilities (Images, Audio, Video)",
        "Massive Context Window (1M+ tokens)",
        "Great for: analyzing large codebases, complex reasoning"
      ],
      layout: "left"
    }
  },
  {
    type: 'content',
    data: {
      title: "Google Antigravity",
      subtitle: "The Agent-First IDE",
      bullets: [
        "Reimagines the IDE experience",
        "Orchestrates multiple agents simultaneously",
        "Focus on 'Planning' and 'Execution' modes",
        "Great for: Complex, multi-step development tasks"
      ],
      layout: "left"
    }
  },
  {
    type: 'content',
    data: {
      title: "VS Code + Kilo Code",
      subtitle: "Supercharging the Standard",
      bullets: [
        "Kilo Code: A powerful AI extension for VS Code",
        "Brings agentic capabilities to your existing setup",
        "Automated refactoring and code generation",
        "Great for: Developers who want to stay in VS Code"
      ],
      layout: "left"
    }
  },
  {
    type: 'content',
    data: {
      title: "AI-Native Editors",
      subtitle: "Cursor & Windsurf",
      bullets: [
        "Cursor: A fork of VS Code built from the ground up for AI",
        "Windsurf: Focuses on 'Flows' and deep context awareness",
        "Both offer superior integration compared to standard extensions",
        "Great for: A seamless, AI-integrated coding experience"
      ],
      layout: "left"
    }
  },
  {
    type: 'content',
    data: {
      title: "Models & Prompts",
      subtitle: "The Engine and the Fuel",
      bullets: [
        "Models: Gemini 1.5 Pro, GPT-4o, Claude 3.5 Sonnet",
        "Choose the right model for the task (Speed vs. Reasoning)",
        "Prompts: Context is King",
        "Be specific, provide examples, and iterate",
        "Use 'System Prompts' to define behavior"
      ],
      layout: "left"
    }
  },
  {
    type: 'content',
    data: {
      title: "Market Evolution",
      subtitle: "Adapt or Die",
      bullets: [
        "The market is changing at breakneck speed",
        "AI is not replacing developers...",
        "...but developers using AI will replace those who don't",
        "Upgrade your workflow to survive and thrive"
      ],
      layout: "split",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" // Cyberpunk/Future city image
    }
  },
  {
    type: 'thankYou',
    data: {
      title: "Thank You!",
      subtitle: "Q & A",
      icon: Heart,
      resources: [
        {
          icon: Globe,
          title: "Optimize With Munir",
          url: "https://optimizewithmunir.com",
          description: "My Personal Site"
        }
      ]
    }
  }
];
