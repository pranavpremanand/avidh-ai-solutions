/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        bounce: "bounce 1s infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        bounce: {
          "0%, 100%": {
            transform: "translateY(-25%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
      boxShadow: {
        custom: "0px 0px 5px 0px rgba(0,0,0,0.75)", // Add your custom box-shadow here
      },
      colors: {
        // 'primary': '#5B6CFF',
        primary: "#967BB3",
        secondary: "#B9A7CC",
        tertiary: "#2773A7",
        rounderheadingbg: "#eae1ef",
        primarygradient: "#adf4cb",
        decsriptioncolor: "#747474",
        headerandfooterbg: "#000E29",
        footerparacolor: "#A3A6AE",
        customPurple: "rgb(150,123,179)",
      },
      backgroundImage: {
        buttonBackground:
          "linear-gradient(90deg, rgba(150,123,179,1) 0%, rgba(185,167,204,1) 50%, rgba(220,211,230,1) 100%)",
      },
      height: {
        bannerheight: "calc(100vh - 124px)",
        bannerheightsm: "calc(100vh - 80px)",
      },
    },
    fontSize: {
      "1xl": [
        "73px",
        {
          fontWeight: "700",
        },
      ],
      smallxl: [
        "53px",
        {
          fontWeight: "700",
        },
      ],
      landsmallxl: [
        "33px",
        {
          fontWeight: "700",
        },
      ],
      sechead: [
        "44px",
        {
          fontWeight: "700",
        },
      ],
      head: [
        "28px",
        {
          fontWeight: "700",
        },
      ],
      smhead: [
        "16px",
        {
          fontWeight: "600",
        },
      ],
      desc: [
        "16px",
        {
          fontWeight: "400",
        },
      ],
      "8xl": [
        "50px",
        {
          fontWeight: "700",
        },
      ],
      "2xl": [
        "24px",
        {
          fontWeight: "500",
        },
      ],
      "3xl": [
        "26px",
        {
          fontWeight: "700",
        },
      ],
      "4xl": [
        "34px",
        {
          fontWeight: "700",
        },
      ],
      "5xl": [
        "43px",
        {
          fontWeight: "500",
        },
      ],
      "7xl": [
        "20px",
        {
          fontWeight: "600",
        },
      ],
      "6xl": [
        "24px",
        {
          fontWeight: "600",
        },
      ],
    },
  },
  plugins: [],
};
