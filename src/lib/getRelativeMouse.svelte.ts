import { spring } from 'svelte/motion'
import { mapRange } from './utils'

type fn = (
	n: () => HTMLElement | undefined,
	range: { min: number; max: number }
) => { x: number; y: number; isInside: boolean }

const springRune = <T = any>(value: T) => {
	let source = $state()
	let store = spring(value, {
		stiffness: 0.15,
		damping: 0.15
	})

	store.subscribe((v) => (source = v))

	return {
		get value() {
			return source as T
		},
		set value(v: T) {
			store.set(v)
		}
	}
}

export const getRelativeMouse: fn = (n, range = { min: 0, max: 1 }) => {
	let node = $derived(n())
	let mouseX = springRune(0)
	let mouseY = springRune(0)
	let isInside = $state(false)

	$effect(() => {
		if (!node) return

		const mouseEnter = () => {
			isInside = true
		}

		const mouseMove = (e: MouseEvent) => {
			const x = e.clientX
			const y = e.clientY
			const rect = node.getBoundingClientRect()

			mouseX.value = mapRange((x - rect.x) / rect.width, 0, 1, range.min, range.max)
			mouseY.value = mapRange((y - rect.y) / rect.height, 0, 1, range.min, range.max)
		}

		const mouseLeave = () => {
			isInside = false
			mouseX.value = 0
			mouseY.value = 0
		}

		node.addEventListener('mouseenter', mouseEnter)
		node.addEventListener('mousemove', mouseMove)
		node.addEventListener('mouseleave', mouseLeave)

		return () => {
			node.removeEventListener('mouseenter', mouseEnter)
			node.removeEventListener('mousemove', mouseMove)
			node.removeEventListener('mouseLeave', mouseLeave)
		}
	})

	return {
		get x() {
			return mouseX.value
		},
		get y() {
			return mouseY.value
		},
		get isInside() {
			return isInside
		}
	}
}
