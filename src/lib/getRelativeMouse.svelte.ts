import { mapRange } from './utils'

type fn = (
	n: () => HTMLElement | undefined,
	range: { min: number; max: number }
) => { x: number; y: number; isHovering: boolean }

export const getRelativeMouse: fn = (n, range = { min: 0, max: 1 }) => {
	let node = $derived(n())
	const mouse = $state({ x: 0, y: 0, isHovering: false })

	$effect.pre(() => {
		if (!node) return

		const mouseEnter = () => {
			mouse.isHovering = true
		}

		const mouseMove = (e: MouseEvent) => {
			const mouseX = e.clientX
			const mouseY = e.clientY
			const rect = node.getBoundingClientRect()

			mouse.x = mapRange((mouseX - rect.x) / rect.width, 0, 1, range.min, range.max)
			mouse.y = mapRange((mouseY - rect.y) / rect.height, 0, 1, range.min, range.max)
		}

		const mouseLeave = () => {
			mouse.isHovering = false
			console.log('isHover = false')
			requestAnimationFrame(() => {
				mouse.x = 0
				mouse.y = 0
				console.log('mouse.xy = 0')
			})
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

	return mouse
}
