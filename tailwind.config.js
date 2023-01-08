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
				'softblue-fauv': '#EBF9FD',
				'gray-fauv': '#E5EBF0',
				'gray-fauv-2': '#828282',
				'bluishgray-fauv': '#CDDDE8',
				'black-fauv': '#404040',
				'black-fauv-2': '#2D2D2D',
				'black-fauv-3': '#4F4F4F',
				'white-transparent': 'rgb(250, 250, 250, 0.18)',
				'gray-transparent': 'rgba(100, 100, 100, .7)'
			},
			fontFamily: {
				lexend: ['Lexend Deca', 'sans-serif'],
				montserrat: ['Montserrat', 'sans-serif'],
				inter: ['Inter', 'sans-serif']
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
				btn: '0.25rem',
				'btn-2': '0.625rem'
			},
			boxShadow: {
				btn: ' 0px 4px 4px rgba(0, 0, 0, 0.3)',
				nav: '0px 8px 24px rgba(0, 0, 0, 0.1)'
			},
			width: {
				22: '5.5rem',
				23: '5.75rem'
			},
			height: {
				18: '4.5rem'
			},
			backgroundImage: {
				'page-top':
					'linear-gradient(180deg, #FFFFFF 76.25%, rgba(250, 250, 250, 0.18) 100%)'
			}
		}
	},
	experimental: { optimizeUniversalDefaults: true },
	plugins: [formsPlugin]
}
module.exports = config
