import type { Config } from 'tailwindcss';
import flowbite from 'flowbite-react/tailwind';
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/data/**/*.{js,ts,jsx,tsx,mdx}',
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      height: {
        'screen-75': '75vh',
        'screen-80': '80vh',
        'screen-85': '85vh',
        'screen-90': '90vh',
        'screen-95': '95vh',
        'screen-100': '100vh',
        'screen-custom': 'calc(100vh-80px)',
      },
    },
  },
  plugins: [flowbite.plugin()],
} satisfies Config;
