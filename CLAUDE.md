# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

React 18 portfolio site built with Create React App. Single-page architecture with manual hash-based navigation, Tailwind CSS styling, and dark/light theme support.

**Tech Stack**: React 18, Tailwind CSS, Framer Motion, Redux (installed but unused), FontAwesome/Lucide/React Icons.

## Commands

```bash
npm start      # Dev server at http://localhost:3000
npm run build  # Production build to /build
npm test       # Run tests in watch mode
npm run lint   # ESLint check (auto-runs after file changes via hooks)
```

## Critical Rules

1. **ALWAYS use theme CSS variables for colors** - Never hardcode colors. Use `var(--accent-primary)`, `var(--text-primary)`, etc.

2. **Run lint after changes** - `npm run lint` (auto-runs via hooks after Edit/Write)

3. **Follow existing component patterns** - Check similar components before creating new ones

4. **Responsive design is required** - Use Tailwind breakpoints: sm, smmd, md, lg, xl, 2xl

5. **Support both themes** - All UI must work in light AND dark mode

## Architecture

### Key Files
- `src/App.js` - Main app, manages view switching (Main vs Projects)
- `src/index.css` - Theme CSS variables, Tailwind config, global styles
- `src/components/data/projects.js` - Project data model and collections
- `tailwind.config.js` - Custom breakpoints, Fira Code font

### Navigation Flow
- **Page switching**: `App.jsx` manages `currentContent` state ("Main" vs "Projects")
- **Section navigation**: Hash-based smooth scrolling (#Work, #Skills, etc.)
- **Project display**: Work.jsx → displayProject() → Cyberprojects.jsx → Sidebar.jsx

### Project Data Model

```javascript
// src/components/data/projects.js
{
  id: number,
  title: string,
  category: "Software Development" | "Cybersecurity" | "Automation" | "DevOps",
  description: string,
  image: ReactComponent,
  skills: string[],
  component: JSX,  // Detail view component
  links: { github: URL | null, live: URL | null }
}
```

Collections: `Latest`, `SoftwareDev`, `Cybersecurity`, `Automation`, `DevOps`

## Common Patterns

### Using Theme Colors

```jsx
// Inline style with CSS variables (for dynamic colors)
<div style={{ color: 'var(--accent-primary)' }}>Highlighted text</div>
<div style={{ backgroundColor: 'var(--background-secondary)' }}>Card</div>

// Tailwind with theme classes defined in index.css
<div className="card">Card with theme background</div>
<button className="button">Themed button</button>
```

### Adding a New Project

1. Create detail component in `src/components/subcomponents/`
2. Add entry to appropriate array in `src/components/data/projects.js`
3. Import and reference the component in the `component` field

### Responsive Design

```jsx
// Use Tailwind breakpoints
<div className="px-4 sm:px-6 md:px-8 lg:px-12">
  <h1 className="text-2xl md:text-4xl lg:text-5xl">Responsive heading</h1>
</div>
```

### Framer Motion Animation

```jsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Animated content
</motion.div>
```

## Theme System Reference

CSS variables in `src/index.css`:

| Variable | Purpose |
|----------|---------|
| `--accent-primary` | Links, highlights, CTAs |
| `--accent-secondary` | Hover states, secondary actions |
| `--text-primary` | Main content text |
| `--text-secondary` | Subtitles, descriptions |
| `--text-muted` | Timestamps, metadata |
| `--background-primary` | Page background |
| `--background-secondary` | Cards, sections |
| `--background-tertiary` | Nested elements |
| `--button-background` | Button fill |
| `--button-text` | Button text |
| `--input-background` | Form input fill |
| `--input-border` | Form input borders |

## Claude Code Tools

### Slash Commands
- `/checkpoint` - Create a detailed commit with all changes staged
- `/create-spec` - Create feature specification in `specs/` folder with requirements and implementation plan

### Specialized Agents
- **designer** - Visual design decisions, layout planning, UX improvements
- **ui-expert** - Review UI code for Tailwind/theme compliance
- **file-explorer** - Fast codebase navigation (uses haiku model for speed)
- **coder** - Research-first coding with mandatory verify workflow
- **code-review** - Thorough quality review with severity ratings

### Hooks (Automatic)
- **postToolUse**: Auto-runs `npm run lint` after file modifications
- **preCommit**: Blocks commits if lint fails

### Workflow Tips
1. For new features, use `/create-spec` to plan before coding
2. Before major UI work, use **designer** agent for design direction
3. After writing UI code, use **ui-expert** agent to validate styling
4. Before committing, use **code-review** agent for quality check
5. Use `/checkpoint` for detailed commit messages
6. Lint runs automatically - check notifications for errors
