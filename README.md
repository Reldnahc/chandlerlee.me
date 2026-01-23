# chandlerlee.me

A modern, minimal portfolio website built with React, TypeScript, and Tailwind CSS v4.

## Features

- **Clean, minimal design** with a focus on readability and accessibility
- **Dark/light mode** with system preference detection
- **Responsive layout** optimized for mobile and desktop
- **Image carousel** for project screenshots with modal view
- **Smooth animations** with respect for reduced motion preferences
- **Fast performance** using Vite for bundling and development

## Tech Stack

- **React 19** with TypeScript
- **Tailwind CSS v4** for styling
- **Vite** for build tooling and dev server
- **GitHub Pages** for deployment

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Container.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Section.tsx
│   ├── ProjectCard.tsx
│   ├── ImageCarousel.tsx
│   └── ThemeToggle.tsx
├── sections/         # Page sections
│   ├── Hero.tsx
│   ├── Projects.tsx
│   ├── About.tsx
│   └── Contact.tsx
├── data/
│   └── projects.ts   # Project data
├── styles/
│   └── App.css       # Global styles and theme
├── App.tsx
└── main.tsx
```

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/chandlerlee.me.git

# Navigate to the project directory
cd chandlerlee.me

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

```bash
# Create a production build
npm run build

# Preview the production build
npm run preview
```

## Deployment

The site automatically deploys to GitHub Pages via GitHub Actions when changes are pushed to the `main` branch.

## Customization

### Theme Colors

Edit the CSS variables in `src/styles/App.css` to customize the color scheme:

```css
:root[data-theme="light"] {
  --bg: #f9fafb;
  --surface: #ffffff;
  --border: #e5e7eb;
  --text: #111827;
  --muted: #4b5563;
  --accent: #06768d;
}
```

### Projects

Update the projects array in `src/data/projects.ts` to add or modify portfolio projects.

### Content

Edit the section components in `src/sections/` to update the Hero, About, and Contact sections.

## License

This project is open source and available under the MIT License.