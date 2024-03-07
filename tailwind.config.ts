import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-purple',
    'bg-yellow',
    'bg-teal',
    'bg-gray-9',
  ],
  theme: {
    fontFamily: {
      'sans': ['var(--font-manrope)'],
      'display': ['var(--font-forum)'],
      'body': ['var(--font-manrope)'],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'neutral': "#FBF6ED",
        'primary':"#905E12",
        'primary-3': "#DDC098",
        'primary-4': "#FFEBCC",
        'primary-5':"#FFF5E5",
        'gray-9': "#1A1A1A",
        'gold-1':"#FBE18F",
        'gold-2': "#F5C276",
        'gradient-start': '#D6B480',
        'gradient-end': '#79592C',
      },
    },
  },
  plugins: [nextui({})],
};
export default config;
