import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#1ed5a9',
        'secondary-color': '#01b4e4',
        'primary-background': '#032541'
      }
    }
  },
  plugins: []
}
export default config
