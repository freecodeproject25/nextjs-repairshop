const config = {
	content: [
	  "./src/**/*.{html,js,ts,jsx,tsx}", // adjust this based on your project structure
	],
	theme: {
	  extend: {
		backgroundImage: {
			'home-img': "url('/images/home-img.jpg')",
		},
		keyframes: {
			"appear": {
				from: {
					opacity: "0",
				},
				to: {
					opacity: "1",
				}
			},
			"slide": {
				from: {
					"transform": "translateX(100%)",
				},
				to: {
					"transform": "translateX(0%)",
				}
			}
		},
		animation: {
			"appear": "appear 1s ease-in-out",
			"slide": "slide 750ms ease-in-out",
		},
	  },
	  
	},
	plugins: ["@tailwindcss/postcss"],
  };
  
  export default config;
  