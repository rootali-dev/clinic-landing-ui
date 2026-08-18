/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./*.php",
    "./components/**/*.php", /* اگر پوشه کامپوننت داری */
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#0F172A',
        'brand-blue': '#1E3A8A',
        'brand-mint': '#0F766E',
        'brand-mint-light': '#F0FDF4',
        'brand-slate': '#334155',
        'brand-bg': '#F8FAFC',
      },
      fontFamily: {
        // 🌟 با این کار، وزیرمتن تبدیل به فونت پیش‌فرض کل پروژه میشه
        sans: ['Vazirmatn', 'sans-serif'],
      },
    },
  },
}; // 👈 این همان براکتِ نجات‌دهنده‌ای بود که جایش خالی بود!
