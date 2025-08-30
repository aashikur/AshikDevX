/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: { center: true, padding: "1rem" },
    extend: {
      colors: {
        brand: {
          50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe",
          300: "#a5b4fc", 400: "#818cf8", 500: "#6366f1",
          600: "#4f46e5", 700: "#4338ca", 800: "#3730a3",
          900: "#312e81"
        },
        accent: {
          cyan: "#22d3ee",
          violet: "#8b5cf6",
          amber: "#facc15"
        },
        neutral: {
          50: "#f9fafb", 100: "#f3f4f6", 200: "#e5e7eb",
          300: "#d1d5db", 400: "#9ca3af", 500: "#6b7280",
          600: "#4b5563", 700: "#374151", 800: "#1f2937",
          900: "#111827"
        }
      },
      fontFamily: { inter: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
      borderRadius: { xl: "1rem", "2xl": "1.25rem", full: "9999px" },
      boxShadow: {
        soft: "0 6px 24px rgba(2,6,23,.06)",
        lift: "0 10px 30px rgba(99,102,241,.15)",
        glow: "0 0 20px rgba(99,102,241,0.5)"
      }
    }
  },
  plugins: [],
};
