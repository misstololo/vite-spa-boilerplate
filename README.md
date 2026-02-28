# Vite SPA Boilerplate

A minimal and fast Single Page Application (SPA) boilerplate built with [Vite](https://vitejs.dev/).

## Features

- Lightning-fast development server with Hot Module Replacement (HMR)
- Optimized production builds
- Modern ES module support
- Easy to extend with your framework of choice (React, Vue, Svelte, etc.)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/misstololo/vite-spa-boilerplate.git
cd vite-spa-boilerplate

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
vite-spa-boilerplate/
├── public/          # Static assets
├── src/
│   ├── main.js      # App entry point
│   └── style.css    # Global styles
├── index.html       # HTML entry point
├── vite.config.js   # Vite configuration
└── package.json
```

## Customization

This boilerplate is framework-agnostic. To add a framework:

- **React**: `npm create vite@latest -- --template react`
- **Vue**: `npm create vite@latest -- --template vue`
- **Svelte**: `npm create vite@latest -- --template svelte`

## License

MIT
