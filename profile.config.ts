export interface ProfileConfig {
  // Basic Profile Information
  profile: {
    name: string;
    username: string;
    title: string;
    description: string;
    bio: string;
    image: string;
    website: string;
    location: string;
    email?: string;
    currentFocus: string[];
    funFact: string;
  };

  // Social Links
  socialLinks: {
    github: string;
    linkedin?: string;
    twitter?: string;
    telegram?: string;
    discord?: string;
    instagram?: string;
    youtube?: string;
    website?: string;
    [key: string]: string | undefined;
  };

  // Skills and Technologies
  skills: string[];

  // Stats to display
  stats: {
    projects: string;
    profileViews: string;
    streak: string;
    botUsers?: string;
    [key: string]: string | undefined;
  };

  // Achievements
  achievements: Array<{
    title: string;
    description: string;
    icon?: string;
  }>;

  // Terminal Configuration
  terminal: {
    hostname: string;
    username: string;
    theme: 'dark' | 'light' | 'matrix' | 'cyberpunk';
    welcomeMessage: string[];
    customCommands: {
      [command: string]: {
        description: string;
        output: string[] | (() => string[]);
        action?: 'navigate' | 'external' | 'function';
        target?: string;
      };
    };
    enabledCommands: string[];
    prompt: string;
  };

  // System Information for neofetch
  systemInfo: {
    os: string;
    host: string;
    kernel: string;
    uptime: string;
    packages: string;
    shell: string;
    resolution: string;
    de: string;
    wm: string;
    terminal: string;
    cpu: string;
    gpu: string;
    memory: string;
    ascii?: string[];
  };

  // Project Configuration
  projects: {
    featuredRepos: string[];
    excludeRepos: string[];
    categories: {
      [category: string]: string[];
    };
  };

  // Blog Configuration
  blogs: {
    enabled: boolean;
    featuredPosts: string[];
    categories: string[];
    availableBlogs: string[];
  };

  // SEO Configuration
  seo: {
    siteName: string;
    keywords: string[];
    author: string;
    twitterHandle?: string;
    ogImage?: string;
  };

  // Theme Configuration
  theme: {
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
    backgroundColor: string;
    textColor: string;
    terminalBackground: string;
    terminalText: string;
    font: string;
  };

  // Navigation Configuration
  navigation: {
    brandName: string;
    brandUrl: string;
    links: Array<{
      name: string;
      path: string;
      external?: boolean;
      color?: string;
    }>;
    systemInfo: {
      // os: string;
      shell: string;
      showDateTime: boolean;
    };
  };

  // Footer Configuration
  footer: {
    statusMessage: string;
    madeWithLove: {
      enabled: boolean;
      text: string;
      location: string;
    };
    systemStatus: {
      enabled: boolean;
      message: string;
    };
  };
}

// Default configuration - Users can override any of these values
export const profileConfig: ProfileConfig = {
  profile: {
    name: "AimerQ",
    username: "aimerq",
    title: "懂技术、懂业务、有人文关怀和家国情感的HR",
    description: "一位连接业务、人才与组织的 HR，关注组织成长、人才发展与长期价值创造。",
    bio: "我是一名长期扎根业务一线的人力资源从业者，既理解技术和组织运作，也重视人的成长、尊严与潜能释放。我相信，好的 HR 不只是支持业务，更是在效率与温度之间搭桥，在组织目标、人才发展与社会责任之间寻找更长期的平衡。",
    image: "/H.svg",
    website: "https://github.com/",
    location: "北京",
    email: "qinfeiyii@gmail.com",
    currentFocus: [
      "支持业务伙伴，提升组织协同效率",
      "推动招聘与人才配置更贴近业务发展节奏",
      "关注组织发展与人才培养的长期机制建设",
      "在制度、关怀与价值观之间找到更好的平衡"
    ],
    funFact: "我相信组织的竞争力，最终来自人被看见、被激发，也被善待。"
  },

  socialLinks: {
    github: "https://github.com/"
  },

  skills: [
    "业务伙伴支持",
    "招聘与人才配置",
    "组织发展与人才培养"
  ],

  stats: {
    projects: "HRBP",
    profileViews: "People First",
    streak: "长期主义",
    totalStars: "组织共成长"
  },

  achievements: [
    {
      title: "业务伙伴",
      description: "理解业务目标，并把人力支持真正做到业务现场",
      icon: "🤝"
    },
    {
      title: "人才配置",
      description: "关注岗位匹配、招聘效率与关键人才引入",
      icon: "🎯"
    },
    {
      title: "组织发展",
      description: "推动团队协同、人才培养与组织能力建设",
      icon: "🌱"
    },
    {
      title: "人文关怀",
      description: "相信制度之外，还需要理解、同理与责任感",
      icon: "❤️"
    }
  ],

  terminal: {
    hostname: "aimerq.local",
    username: "aimerq",
    theme: "cyberpunk",
    welcomeMessage: [
      "",
      "╭─────────────────────────────────────────────────────────────────────────────╮",
      "│                                                                             │",
      "│      █████╗ ██╗███╗   ███╗███████╗██████╗  ██████╗                         │",
      "│     ██╔══██╗██║████╗ ████║██╔════╝██╔══██╗██╔═══██╗                        │",
      "│     ███████║██║██╔████╔██║█████╗  ██████╔╝██║   ██║                        │",
      "│     ██╔══██║██║██║╚██╔╝██║██╔══╝  ██╔══██╗██║▄▄ ██║                        │",
      "│     ██║  ██║██║██║ ╚═╝ ██║███████╗██║  ██║╚██████╔╝                        │",
      "│     ╚═╝  ╚═╝╚═╝╚═╝     ╚═╝╚══════╝╚═╝  ╚═╝ ╚══▀▀═╝                         │",
      "│                                                                             │",
      "│                     HUMAN-CENTERED HR TERMINAL // BEIJING                  │",
      "│                                                                             │",
      "├─────────────────────────────────────────────────────────────────────────────┤",
      "│                                                                             │",
      "│  欢迎来到 AimerQ 的个人终端。这里记录我对业务、人才与组织的理解。             │",
      "│                                                                             │",
      "│  你可以在这里快速了解：                                                     │",
      "│     ▸ 我的 HR 视角与工作方法                                                │",
      "│     ▸ 业务伙伴支持、招聘配置与组织发展重点                                  │",
      "│     ▸ 我对人才成长、人文关怀与长期价值的思考                                │",
      "│                                                                             │",
      "│  快速查看：                                                                 │",
      "│     ▸ help    查看可用命令                                                  │",
      "│     ▸ about   了解我的背景与介绍                                            │",
      "│     ▸ skills  查看我的核心能力                                              │",
      "│     ▸ hire-me 获取联系信息                                                  │",
      "│                                                                             │",
      "│  关键词：                                                                   │",
      "│     ▸ 业务理解  ▸ 组织协同  ▸ 人才发展  ▸ 长期主义                          │",
      "│                                                                             │",
      "╰─────────────────────────────────────────────────────────────────────────────╯",
      "",
      "欢迎继续向下浏览，看看这个终端式主页如何呈现一个 HR 的专业与温度。",
      ""
    ],
    customCommands: {
      "hire-me": {
        description: "Get my contact information",
        output: [
          "Contact Information:",
          "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
          "",
          "Name: AimerQ",
          "Email: qinfeiyii@gmail.com",
          "Location: Beijing",
          "GitHub: https://github.com/",
          "",
          "Focus Areas:",
          "• Business partnering",
          "• Recruiting and talent allocation",
          "• Organizational development and talent growth",
          "",
          "Let's connect around people, business, and long-term organizational value."
        ]
      },
      "coffee": {
        description: "Buy me a coffee",
        output: [
          "Thanks for visiting!",
          "",
          "This page is a small experiment in presenting an HR profile in terminal style.",
          "If it resonates with you, feel free to reach out by email.",
          "",
          "Meaningful work starts with meaningful conversations."
        ]
      },
      "joke": {
        description: "Tell a programming joke",
        output: () => {
          const jokes = [
            "A good HR doesn't just fill a role. A good HR helps the role find the right person.",
            "Recruiting is not speed dating. It's long-term compatibility with consequences.",
            "The best org chart is the one people can feel in collaboration, not just see in a slide deck.",
            "Sometimes the real KPI is whether people still want to build together after a hard quarter.",
            "Business grows faster when trust doesn't need to wait for process."
          ];
          return [jokes[Math.floor(Math.random() * jokes.length)]];
        }
      }
    },
    enabledCommands: [
      "help", "about", "whoami", "profile", "projects", "neofetch", "clear",
      "ls", "cd", "pwd", "fortune", "cowsay", "tree", "ps", "top", "grep",
      "cat", "man", "history", "date", "uptime", "uname", "parrot", "sl",
      "hire-me", "coffee", "joke"
    ],
    prompt: "aimerq@beijing:~$"
  },

  systemInfo: {
    os: "Human-Centered HR OS",
    host: "Beijing",
    kernel: "Business x People 1.0",
    uptime: "Long-termist mode: enabled",
    packages: "Empathy, structure, judgment",
    shell: "dialogue + execution",
    resolution: "See people, see business, see context",
    de: "Clarity",
    wm: "Trust",
    terminal: "AimerQ",
    cpu: "Systems thinking",
    gpu: "Human insight",
    memory: "Care, discipline, and responsibility"
  },

  projects: {
    featuredRepos: [], // Will be filled from GitHub API
    excludeRepos: ["private-repo", "test-repo"],
    categories: {
      "Web Development": ["react-app", "vue-project"],
      "CLI Tools": ["cli-tool", "automation-script"],
      "Libraries": ["npm-package", "python-lib"]
    }
  },

  blogs: {
    enabled: true,
    featuredPosts: ["why-i-still-believe-in-gentleness", "reading-notes-the-ordinary-world"],
    categories: ["生活感悟", "读书笔记"],
    availableBlogs: [
      "why-i-still-believe-in-gentleness.md",
      "reading-notes-the-ordinary-world.md",
    ]
  },

  seo: {
    siteName: "AimerQ - HR Terminal Portfolio",
    keywords: ["HR", "HRBP", "招聘", "人才配置", "组织发展", "人才培养", "北京"],
    author: "AimerQ",
    ogImage: "/og-image.jpg"
  },

  theme: {
    primaryColor: "#0070f3",
    secondaryColor: "#ff6b6b",
    accentColor: "#4ecdc4",
    backgroundColor: "#000000",
    textColor: "#ffffff",
    terminalBackground: "#1a1a1a",
    terminalText: "#00ff00",
    font: "CascadiaCode, 'Courier New', monospace"
  },

  navigation: {
    brandName: "aimerq.terminal",
    brandUrl: "/",
    links: [
      { name: "notes", path: "/blogs", color: "var(--theme-accent)" },
      { name: "gh", path: "https://github.com/", external: true, color: "var(--theme-secondary)" },
      { name: "mail", path: "mailto:qinfeiyii@gmail.com", external: true, color: "var(--theme-primary)" }
    ],
    systemInfo: {
      // os: "Linux 6.1.0",
      shell: "zsh",
      showDateTime: false
    }
  },

  footer: {
    statusMessage: "Connected",
    madeWithLove: {
      enabled: true,
      text: "Made with care, structure, and long-termism",
      location: "北京"
    },
    systemStatus: {
      enabled: true,
      message: "People x Business x Trust • System OK"
    }
  }
};

export default profileConfig;
