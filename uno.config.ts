import { defineConfig } from 'unocss'
import { presetUno, presetAttributify, presetWebFonts, presetIcons } from 'unocss'

export default defineConfig({
	presets: [
		presetUno(),
		presetAttributify(),
		presetWebFonts({
			provider: 'google',
			fonts: {
				display: 'Space Grotesk',
				serif: 'Bricolage Grotesque',
				sans: 'Poppins'
			}
		}),
		presetIcons({
			extraProperties: {
				display: 'inline-block',
				'vertical-align': 'middle'
			}
		})
	],
	theme: {
		colors: {
			primary: 'var(--primary)',
			tcolor: 'var(--text)',
			'tcolor-alt': 'var(--text-alt)',
			bgcolor: 'var(--bg)'
		}
	}
})
