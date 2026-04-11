/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // --- The Obsidian Palette (Tonal Depth) ---
        "surface-container-lowest": "#000000", // Strictly for deepest background
        "surface": "#0e0e0e",                  // Level 0: Main Canvas / Code Editor
        "surface-container-low": "#131313",    // Level 1: Sidebars, Sunken trays
        "surface-container": "#1a1919",        // Level 2: Standard Workspace Cards
        "surface-container-highest": "#262626",// Level 3: Floating panels, Modals
        
        // --- Neon Accents ---
        // Image aur .md ke hisaab se neon colors
        "primary": "#2E5BFF",   // Neon Blue
        "secondary": "#A855F7", // Neon Purple (Document mentions #7511c3 for shadow tint, but Synth Matrix uses this purple)
        
        // --- Utilities ---
        "error-dim": "#d73357", // High-end subtle error state
      },
      fontFamily: {
        // Editorial Engineer Typography
        display: ['"Space Grotesk"', 'sans-serif'], // For Headlines & Hero
        "body": ['Inter', 'sans-serif'],              // For UI & Body text
      },
      borderRadius: {
        // Document specified roundedness
        'sm': '0.5rem',  // Code specific elements
        'lg': '2rem',    // Video participant tiles
        'xl': '3rem',    // Main layout containers
      },
      backgroundImage: {
        // The Signature Neon Gradient (Text ya Buttons pe lagane ke liye)
        'neon-gradient': 'linear-gradient(135deg, var(--tw-colors-primary, #2E5BFF) 0%, var(--tw-colors-secondary, #A855F7) 100%)',
      }
    },
  },
  plugins: [],
}