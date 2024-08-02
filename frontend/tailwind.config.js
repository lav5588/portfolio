/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'topShadow': '-5px -5px 5px'
      },
      colors: {
        'BG1': '#292F36',
        'BG2': '#1A1E23',
        'Brand1': '#12F7D6',
        'Brand2': '#98FAEC',
        'Grey': '#43454D',
        'White': '#FFFFFF',
        'Html': '#E54F26',
        'CSS': '#0C73B8',
        'JS': '#E7A020',
        'REACT': '#28A9E0',
        'Node': '#6cc24a',
        'Express': "#22863A",
        'Tailwind': '#38BDF8',
        "MongoDB": "#47A248",
        "C": "#A8B9CC",
        "C++": "#00599C",
        "Python": "#FFD43B",
        "GitHub": "#2E4053",
        "Postman": "#FF6C37",
        "LeetCode": "#FF9C00"

      },
      screens: {
        'mobile': '390px',
      },
      backgroundImage: {
        'aboutMeBgImage': 'url("About me background.svg")',
        'skillsBgImage': 'url("Skills background.svg")',
        'worksBgImage': 'url("Works background.svg")',
      }
    },
  },
  plugins: [],
}

