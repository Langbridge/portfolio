/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:"jit",
  content: ['./src/**/*.{html,js,svelte,ts}'],
  safelist:[
      {
          pattern:/bg-(slate|gray)-(100|200|300|400|500|600|700|800|900)/,
          variants:["sm", "md", "lg", "xl", "before", "after"]
      },
      {
          pattern:/bg-opacity-(10|20|30|40|50|60|70|80|90)/,
          variants:["sm", "md", "lg", "xl", "before", "after"]
      },
      {
          pattern:/(right|left)-([3/4]|[1/2]|[1/4]|[1/3]|[2/3])/,
          variants:["sm", "md", "lg", "xl", "before", "after"]
      }
  ],
  theme: {
      fontFamily: {
          sans: ['"Open Sans"', 'sans-serif']
      },  
      extend: {
          colors:{
              secondary: {
                  base:"#34339e",
                  dark:"#191854"
              },
              accent: {
                  base:"#eb2337",
                //   base:"#d04b4b",
                  dark:"#8c0a17",
                //   dark:"#a12d2d",
                  //   pastel:"#f5cece"
                  pastel:"#f5d3d3"
                }
          },
          fontFamily: {
              OpenSans:["Open Sans", "sans-serif"]
          },
          aspectRatio: {
              "16/9":"16/9"
          }
      },
      
  },
  // plugins: [],
}