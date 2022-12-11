const defaultConfig = require('tailwindcss/defaultConfig')
const formsPlugin = require('@tailwindcss/forms')

/** @type {import('tailwindcss/types').Config} */
const config = {
	content: ['index.html', 'src/**/*.tsx'],
	theme: {
		extend: {
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				'blue-fauv': '#2274AC',
				'grey-fauv': '#E5EBF0',
				'softblue-fauv': '#EBF9FD'
			},
			fontFamily: {
				lexend: ['Lexend Deca', 'sans-serif'],
				montserrat: ['Montserrat', 'sans-serif']
			},
			fontSize: {
				'xl-fauv': '4rem',
				base: '1rem'
			},
			lineHeight: {
				20: '5rem'
			},
			letterSpacing: {
				login: '1rem'
			},
			borderRadius: {
				btn: '0.625rem'
			},
			boxShadow: {
				btn: ' 0px 4px 4px rgba(0, 0, 0, 0.3)'
			}
		}
	},
	experimental: { optimizeUniversalDefaults: true },
	plugins: [formsPlugin]
}
module.exports = config
