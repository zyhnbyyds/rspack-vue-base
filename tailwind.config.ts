import type { Config } from 'tailwindcss'

const tailwindcssConfig: Config = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {},
  },
  important: true,
  plugins: [],
}
export default tailwindcssConfig
