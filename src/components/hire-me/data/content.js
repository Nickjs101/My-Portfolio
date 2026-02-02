// Copy and text content for the Hire Me landing page

export const heroContent = {
  headline: 'Automate Your Business with AI',
  subheadline: 'Stop wasting hours on repetitive tasks. Let intelligent automation handle the busy work while you focus on what matters—growing your business.',
  ctaPrimary: 'Book a Free Discovery Call',
  ctaSecondary: 'View Services',
  trustText: 'Trusted tools I work with:',
};

export const problemContent = {
  sectionTitle: 'Sound Familiar?',
  sectionSubtitle: 'These are the problems costing your business time and money',
  problems: [
    {
      title: 'Drowning in Manual Tasks',
      description: 'Your team spends hours on data entry, copy-pasting between apps, and updating spreadsheets. Time that should be spent on high-value work.',
      icon: 'Clock',
      stat: '60%',
      statLabel: 'of work time spent on repetitive tasks',
    },
    {
      title: 'Disconnected Tools',
      description: 'Your CRM doesn\'t talk to your email. Your calendar doesn\'t sync with your project tool. Information gets lost between systems.',
      icon: 'Unplug',
      stat: '5+',
      statLabel: 'apps that don\'t communicate',
    },
    {
      title: 'Scaling Bottlenecks',
      description: 'Growth means hiring more people to do the same manual work. Your processes don\'t scale—they just get more expensive.',
      icon: 'TrendingDown',
      stat: '40%',
      statLabel: 'of operational costs are avoidable',
    },
  ],
};

export const processContent = {
  sectionTitle: 'How It Works',
  sectionSubtitle: 'A simple, proven process to automate your business',
  steps: [
    {
      number: 1,
      title: 'Discovery Call',
      description: 'We discuss your current workflows, pain points, and goals. I\'ll ask questions to understand exactly what you need.',
      duration: '30 min call',
      icon: 'PhoneCall',
    },
    {
      number: 2,
      title: 'Custom Proposal',
      description: 'Within 48 hours, you\'ll receive a detailed proposal with solution design, timeline, and transparent pricing.',
      duration: '48 hours',
      icon: 'FileText',
    },
    {
      number: 3,
      title: 'Build & Test',
      description: 'I build your automation with regular check-ins. You\'ll see progress and can provide feedback throughout.',
      duration: '1-4 weeks',
      icon: 'Wrench',
    },
    {
      number: 4,
      title: 'Launch & Support',
      description: 'We go live together. I provide training, documentation, and support to ensure everything runs smoothly.',
      duration: 'Ongoing',
      icon: 'Rocket',
    },
  ],
};

export const ctaContent = {
  headline: 'Ready to Reclaim Your Time?',
  subheadline: 'Book a free 30-minute discovery call. No sales pitch—just an honest conversation about how automation can help your business.',
  buttonText: 'Schedule Your Free Call',
  alternativeText: 'Or send me a message',
  formFields: {
    name: 'Your Name',
    email: 'Email Address',
    company: 'Company (Optional)',
    service: 'Service Interest',
    message: 'Tell me about your project',
  },
  serviceOptions: [
    { value: '', label: 'Select a service...' },
    { value: 'automations', label: 'Automations ($500+)' },
    { value: 'ai-automations', label: 'AI Automations ($2,000+)' },
    { value: 'agentic-ai', label: 'Agentic AI Assistant (Custom)' },
    { value: 'not-sure', label: 'Not sure yet' },
  ],
};

export const footerContent = {
  backLink: 'Back to Portfolio',
  copyright: `© ${new Date().getFullYear()} Nick Joshua. All rights reserved.`,
};
