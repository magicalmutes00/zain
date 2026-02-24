export default = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#f39c12',
        secondary: '#1b4f72',
      },
      backgroundImage: {
        'futuristic-grad': 'linear-gradient(135deg, rgba(243,156,18,0.12), rgba(27,79,114,0.06))',
      },
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}