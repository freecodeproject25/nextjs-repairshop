const config = {
	content: [
	  "./src/**/*.{html,js,ts,jsx,tsx}", // adjust this based on your project structure
	],
	theme: {
	  extend: {
		backgroundImage: {
		  'home-img': "url('/images/home-img.jpg')",
		},
	  },
	},
	plugins: ["@tailwindcss/postcss"],
  };
  
  export default config;
  