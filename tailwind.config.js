/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/index.html'],
  theme: {
    extend: {
      colors:{
        primary: '#0AA1DD',
        secondary: '#ECF01D',
        gelap: '#383F48',
        diamond: '#D5F3FF',
        akun: '#93EACB',
        voucher: '#FFE8CD',
      },
      backgroundImage:{
        'promo': "url('../EyePay/img/Voucher/Group 17.png')",
      }
    },
  },
  plugins: [],
}

