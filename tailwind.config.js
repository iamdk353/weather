/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      width: {
        half: "80vw",
        icon: "40vh",
        lessHalf: "60vw",
        nav: "70vw",
      },
      height: {
        half: "90vh",
        lessHalf: "60vh",
        icon: "50vh",
        nav: "30vh",
      },
    },
  },
};
