// Create a new file for shared project styles
export const projectStyles = {
  container: {
    backgroundColor: 'var(--bg-primary)',
    color: 'var(--text-primary)'
  },
  heading: {
    color: 'var(--text-primary)'
  },
  subheading: {
    color: 'var(--accent-primary)'
  },
  text: {
    color: 'var(--text-secondary)'
  },
  link: {
    color: 'var(--accent-primary)',
    '&:hover': {
      opacity: 0.8
    }
  },
  card: {
    backgroundColor: 'var(--bg-secondary)',
    borderColor: 'var(--card-border)'
  },
  tag: {
    backgroundColor: 'var(--bg-tertiary)',
    color: 'var(--text-secondary)'
  }
}; 