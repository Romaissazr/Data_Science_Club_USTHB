// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
   './src/**/*.{html,js,jsx,ts,tsx}', 
  ],
  theme: {
    extend: {
      colors: {
        Bg:"#04334B",
        Button:"#536CBB",
        Secondery:"#226782",
        CardTeams:"#C1E8F3",
        hover:"#64CCC4"
      },
      backgroundImage: {
        social: "url('/src/assets/Images/follow.png')" // Make sure the path starts with a '/'
      },
    },
  },
  plugins: [],
  corePlugins: {
    scrollBehavior: true,
  }
}
