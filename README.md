
# Developer Portfolio

A high-performance, accessible, and responsive developer portfolio built with React 19, TypeScript, and Tailwind CSS.

## Features

- ⚡ **Performance**: Optimized for speed with minimal dependencies.
- 🎨 **Design**: Modern, clean aesthetic with smooth animations.
- 📱 **Responsive**: Fully responsive layout for mobile, tablet, and desktop.
- ⚙️ **Configurable**: All content is driven by a single configuration file (`constants.ts`).
- 📂 **GitHub Pages Ready**: Configured for easy deployment with relative paths.

## Setup & Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

## Customization

### Content
Navigate to `constants.ts`. This file contains all the text, links, and data for the website. Update the `PROFILE_DATA` object to reflect your own information.

### Assets
To use your own images and resume:

1. Create a directory named `assets` inside the `public` folder: `public/assets/`.
2. Add your image files (e.g., `profile.jpg`, `logo.png`) and resume PDF to this folder.
3. Update the file paths in `constants.ts` to match your filenames.
   - Example: `heroImageUrl: "assets/my-photo.png"`

**Important**: Use relative paths (e.g., `assets/image.png`) rather than absolute paths (`/assets/image.png`) to ensure the site works correctly when deployed to GitHub Pages subdirectories.

### Styling
Tailwind CSS is used for styling. Configuration is embedded in `index.html` for this standalone version, but can be moved to `tailwind.config.js` for larger setups. Colors and fonts are defined in the `tailwind.config` script in `index.html`.

## Deployment to GitHub Pages

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy**
   
   **Option A: Manual Upload**
   - Upload the contents of the `dist` (or `build`) folder to your repository (usually a `gh-pages` branch).
   - Go to repository Settings -> Pages and select the source branch.

   **Option B: gh-pages package (Recommended)**
   - Install gh-pages: `npm install --save-dev gh-pages`
   - Add to `package.json`:
     ```json
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist" 
     }
     ```
     *(Note: verify if your build output folder is `dist` or `build`)*
   - Run `npm run deploy`.

## Project Structure

```
├── components/       # React components (Hero, About, Experience, etc.)
├── constants.ts      # Centralized data file for easy editing
├── types.ts          # TypeScript interfaces
├── App.tsx           # Main application layout
├── index.tsx         # Entry point
└── index.html        # HTML template
```

---

*Designed & Built by Dustin Nguyen*
