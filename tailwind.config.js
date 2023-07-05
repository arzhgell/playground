const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: [
    ...[...Array(10000).keys()].flatMap((i) => [
      `top-[${i * 1}px]`,
      `left-[${i * 1}px]`,
    ]),
  ],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      padding: {
        18: "72px",
        22: "88px",
      },
      aspectRatio: {
        "21/9": "21 / 9",
        "10/1": "10 / 1",
      },
      borderWidth: {
        xs: "2px",
        sm: "4px",
        md: "8px",
        lg: "16px",
      },
      boxShadow: {
        xsm: "0px 1px 8px rgba(14, 21, 28, 0.05)",
        sm: "0px 0px 4px rgba(14, 21, 28, 0.02), 1px 2px 16px rgba(42, 64, 84, 0.06)",
        md: "0px 0px 4px rgba(14, 21, 28, 0.04),1px 2px 24px rgba(42, 64, 84, 0.06)",
        lg: "0px 0px 4px rgba(14, 21, 28, 0.04),1px 3px 32px rgba(42, 64, 84, 0.08)",
        xlg: "0px 0px 4px rgba(14, 21, 28, 0.04), 1px 4px 40px rgba(42, 64, 84, 0.09)",
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "16px",
      },
      spacing: {
        xxsm: "4px",
        xsm: "8px",
        sm: "16px",
        md: "24px",
        lg: "32px",
        xlg: "48px",
        xxlg: "64px",
        xxxlg: "80px",
        xxxxlg: "96px",
      },
      fontSize: {
        xxxlg: [
          "40px",
          {
            lineHeight: "52px",
            fontWeight: "700",
            letterSpacing: "-1.5%",
          },
        ],
        xxlg: [
          "34px",
          {
            lineHeight: "48px",
            fontWeight: "700",
            letterSpacing: "-0.3%",
          },
        ],
        xlg: [
          "30px",
          {
            lineHeight: "40px",
            fontWeight: "700",
            letterSpacing: "0%",
          },
        ],
        lg: [
          "26px",
          {
            lineHeight: "36px",
            fontWeight: "600",
            letterSpacing: "0%",
          },
        ],
        md: [
          "24px",
          {
            lineHeight: "32px",
            fontWeight: "600",
            letterSpacing: "0%",
          },
        ],
        sm: [
          "18px",
          {
            lineHeight: "24px",
            fontWeight: "400",
            letterSpacing: "0%",
          },
        ],
        xsm: [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "400",
            letterSpacing: "0%",
          },
        ],
        xxsm: [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "400",
            letterSpacing: "0%",
          },
        ],
        xxxsm: [
          "12px",
          {
            lineHeight: "16px",
            fontWeight: "400",
            letterSpacing: "0%",
          },
        ],
      },
      colors: {
        "primary-50": "#f6f8f9",
        "primary-100": "#edf0f3",
        "primary-150": "#c8d3dc",
        "primary-200": "#a3b5c5",
        "primary-300": "#7590a8",
        "primary-500": "#466a8b",
        "primary-700P": " #2a4054",
        "primary-900": "#0e151c",

        "secondary-50": "#fbf5e5",
        "secondary-100": "#f8edd2",
        "secondary-300": "#f1d99e",
        "secondary-500P": "#edc666",
        "secondary-600": "#e7b433",
        "secondary-700": "#d5a019",

        "accent-1-lighter": "#e9f5f4",
        "accent-2-lighter": "#fdf0e4",
        "accent-3-lighter": "#fbe6e1",
        "accent-4-lighter": "#e9f5e4",

        "accent-1-light": "#bfe2de",
        "accent-2-light": "#fad1b0",
        "accent-3-light": "#f3b7a8",
        "accent-4-light": "#bfe1b2",

        "accent-1": "#7fc4bc",
        "accent-2": "#f4a261",
        "accent-3": "#e76f51",
        "accent-4": "#7ec264",

        "accent-1-dark": "#4ba398",
        "accent-2-dark": "#de6d0f",
        "accent-3-dark": "#ca3f1c",
        "accent-4-dark": "#529339",

        "info-light": "#e9f5f4",
        "info-dark": "#429086",

        "success-light": "#e9f5e4",
        "success-dark": "#7ec264",
        "success-darker": "#529339",

        "warning-light": "#fdf9f0",
        "warning-dark": "#e7b433",

        "error-light": "#fbe6e1",
        "error-dark": "#ca3f1c",

        "stroke-flat": "#f4f6f7",
        "stroke-light": "#e9ecee",
        "stroke-dedium": "#dbe0e3",
        "stroke-dark": "#c1cace",
      },
    },
    screens: {
      sm: "429px",
      md: "799px",
      lg: "1279px",
      xl: "1919px",
      xxl: "2559px",
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    }),
  ],
};
