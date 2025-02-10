module.exports = {
  // ... other config
  theme: {
    extend: {
      // ... other extensions
      lineClamp: {
        1: '1',
        2: '2',
        3: '3',
      },
      maxWidth: {
        '7xl': '80rem',
      },
      fontFamily: {
        'clash-bold': ['ClashDisplay-Bold', 'sans-serif'],
      },
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ]
} 