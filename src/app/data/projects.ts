import { Project, Skill, SocialLink } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    id: 'flashfood-notifier',
    title: 'Flashfood Deal Notifier',
    description: 'A Telegram bot that monitors grocery store deals and sends personalized notifications about discounted food items.',
    longDescription: `Built a notification system that polls the Flashfood API to find discounted grocery items
    and sends real-time Telegram alerts based on user preferences. The system runs on GitHub Actions
    for free hosting and supports multiple users with independent configurations.

    Key features include:
    - Real-time Telegram notifications for new deals
    - Configurable favorite stores with instant alerts for any new items
    - Deal alerts with price and discount thresholds (e.g., items under $5 or 50%+ off)
    - Expiry date filtering (e.g., only items that expire on or after grocery day)
    - Multi-user support with independent preferences
    - Smart deduplication to avoid repeat notifications
    - Scheduled polling via GitHub Actions (every 10 min during store hours)`,


    blog: `Flashfood is a discount food app where items close to their expiry dates are sold at a discount. When you purchase items they're held for you to pick up until their expiry date.

    My friends and I are obsessed with this app, but we've also spent years commenting on what we would change if we could submit feature requests. Late notifications, lack of search or filtering, unclear expiry dates, the dreaded 10 click refund process when you arrive at a store to find that they've accidentally given your items to someone else...

    Long story short, I realized I could implement a lot of these myself.`,

    techStack: ['Python', 'Telegram Bot API', 'GitHub Actions', 'REST APIs'],
    repoUrl: 'https://github.com/AbarbaSA/Flashfood_Enhanced_Notifications',
    screenshots: [
      { url: "assets/project_photos/alert_sour_cream.jpg", caption: 'Telegram notification with deal details' },
      { url: "assets/project_photos/alert_chicken_wings.jpg", caption: 'Telegram notification with deal details' }
    ],
    featured: true
  },
  {
    id: 'french-anki-generator',
    title: 'French Anki Card Generator',
    blog: `Anki is a program that allows you to create personalized flashcards for long term learning. Throughout my 1.5 years of french study, I noticed that a lot of the words, sentence fragments, and structures I was learning about in school weren't really sticking if I only understood their meaning once. But I didn't think it was a good use of time to manually style each of these flashcards myself when they basically all fell into one of three formulas.
    So instead, when I ran into something I knew I needed to retain, I added it to a spreadsheet, and set out creating a python program to that would take the spreadsheet, find the information needed for the cards, and create the deck by itself. That way I could use the time actually looking at the flashcards instead of making them.`,
    description: 'A tool that automatically generates Anki flashcards for French language learning using AI and dictionary scraping.',
    longDescription: `Created a Python tool to streamline French vocabulary acquisition by automatically
    generating rich Anki flashcards. The system combines dictionary data from USITO with AI-generated
    content to create comprehensive study materials.

    Key features include:
    - Single word mode with dictionary scraping from USITO
    - Sentence fragment analysis with AI-generated context
    - Grammar structure cards (gerondif, conditionnel, etc.)
    - Batch processing for bulk card generation
    - Direct export to Anki package format (.apkg)
    - Configuration work for possible future use with more languages`,
    techStack: ['Python', 'OpenAI API', 'Web Scraping', 'Anki'],
    repoUrl: 'https://github.com/AbarbaSA/French_Anki_Card_Generator',
    screenshots: [
      { url: "assets/project_photos/preview_front.PNG", caption: 'Front-side of verb card' },
      { url: "assets/project_photos/preview_back.PNG", caption: 'Back-side of verb card' },
      { url: "assets/project_photos/anki_verb.PNG", caption: 'Custom verb card example with fields' },
      { url: "assets/project_photos/noun.PNG", caption: 'Custom noun card example with fields' },
      { url: "assets/project_photos/en_train_de.PNG", caption: 'Custom fragment card example with fields ' },
      { url: "assets/project_photos/structure.PNG", caption: 'Custom structure card example with fields' }
    ],
    featured: true
  }
];

export const SKILLS: Skill[] = [
  // Frontend
  { name: 'Angular', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'HTML/CSS', category: 'frontend' },

  // Backend
  { name: 'C#', category: 'backend' },
  { name: '.NET', category: 'backend' },
  { name: 'Java', category: 'backend' },
  { name: 'Python', category: 'backend' },
  { name: 'SQL', category: 'backend' },
  { name: 'Selenium', category: 'backend' },

  // Tools
  { name: 'Git', category: 'tools' },
  { name: 'GitHub', category: 'tools' },
  { name: 'Bash', category: 'tools' },
  { name: 'Azure Services', category: 'tools' },
  { name: 'Active Directory', category: 'tools' },
  { name: 'Jira', category: 'tools' },
  { name: 'Confluence', category: 'tools' },
  { name: 'Crucible', category: 'tools' },

  // Other
  { name: 'Mobile Development', category: 'other' },
  { name: 'Splunk', category: 'other' },
  { name: 'OWASP', category: 'other' }
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/AbarbaSA',
    icon: 'github'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/sarah-abarbanel',
    icon: 'linkedin'
  },
  {
    name: 'Email',
    url: 'mailto:sarah.c.abarbanel@gmail.com',
    icon: 'email'
  }
];
