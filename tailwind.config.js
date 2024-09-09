/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         fontFamily: {
            super: "Great Vibes",
            pansy: "Lora",
            normal: "Assistant",
         },
         backgroundImage: {
            loginImg: "url('./src/assets/login/Login.jpg')",
            headersImg: "url('/src/assets/logo/img5.jpg')",
         },
      },
   },
   plugins: [require("daisyui")],
};
