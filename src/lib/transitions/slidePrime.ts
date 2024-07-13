import { quintOut } from 'svelte/easing'

export const slidePrime = (
	node: HTMLElement,
	params: {
		delay?: number
		duration?: number
		easing?: (t: number) => number
		top?: boolean
		right?: boolean
		bottom?: boolean
		left?: boolean
		x?: number
		y?: number
	} = {}
) => {
	const existingTransform = getComputedStyle(node).transform.replace('none', '')

	return {
		delay: params.delay || 0,
		duration: params.duration || 400,
		easing: params.easing || quintOut,
		css: (t: number, u: number) => {
			return `
            clip-path: inset(${Number(params.top || 0) * u * 100}% ${Number(params.right || 0) * u * 100}% ${Number(params.bottom || 0) * u * 100}% ${Number(params.left || 1) * u * 100}%);
			transform:  ${existingTransform} translateX(${u * (params.x || -100)}%) translateY(${u * (params.y || 0)}%);
			`
		}
	}
}
