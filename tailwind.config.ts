import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'bounce-x': {
					'0%, 100%': {
						transform: 'translateX(0)'
					},
					'50%': {
						transform: 'translateX(25%)'
					}
				},
				'bounce-slow': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-25%)'
					}
				},
				'fall-slow': {
					'0%': {
						transform: 'translateY(-10%) rotate(0deg)',
						opacity: '0'
					},
					'10%': {
						opacity: '1'
					},
					'100%': {
						transform: 'translateY(100vh) rotate(360deg)',
						opacity: '0'
					}
				},
				'shimmer': {
					'0%': {
						transform: 'translateX(-100%)'
					},
					'100%': {
						transform: 'translateX(100%)'
					}
				},
				'grow-height': {
					'0%': {
						height: '0'
					},
					'100%': {
						height: '40px'
					}
				},
				'grow-height-delay': {
					'0%, 30%': {
						height: '0'
					},
					'100%': {
						height: '60px'
					}
				},
				'grow-height-delay-more': {
					'0%, 60%': {
						height: '0'
					},
					'100%': {
						height: '50px'
					}
				},
				'leaf-appear': {
					'0%': {
						opacity: '0',
						transform: 'scale(0) rotate(45deg)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1) rotate(45deg)'
					}
				},
				'water-drop': {
					'0%': {
						opacity: '0',
						transform: 'translateY(-20px)'
					},
					'50%': {
						opacity: '1'
					},
					'100%': {
						opacity: '0',
						transform: 'translateY(100px)'
					}
				},
				'float-text': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'50%': {
						opacity: '1',
						transform: 'translateY(0)'
					},
					'100%': {
						opacity: '0',
						transform: 'translateY(-10px)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'bounce-x': 'bounce-x 1s ease-in-out infinite',
				'bounce-slow': 'bounce-slow 3s ease-in-out infinite',
				'fall-slow': 'fall-slow 3s linear forwards',
				'shimmer': 'shimmer 2s infinite',
				'grow-height': 'grow-height 2s ease-out forwards',
				'grow-height-delay': 'grow-height-delay 3s ease-out forwards',
				'grow-height-delay-more': 'grow-height-delay-more 4s ease-out forwards',
				'leaf-appear': 'leaf-appear 1s ease-out forwards',
				'water-drop': 'water-drop 2s ease-in forwards',
				'float-text': 'float-text 4s ease-in-out forwards'
			},
			skew: {
				'30': '30deg'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
