import { mapRange } from '$lib/utils'

export const mouseSticky = (node: HTMLElement) => {
	// the node has been mounted in the DOM

	let rect = node.getBoundingClientRect()
	const mouse = $state<{ x: number; y: number }>({ x: 0, y: 0 })

	const mouseMove = (e: MouseEvent) => {
		const mouseX = e.clientX
		const mouseY = e.clientY
		rect = node.getBoundingClientRect()

		mouse.x = mapRange((mouseX - rect.x) / rect.width, 0, 1, -1, 1)
		mouse.y = mapRange((mouseY - rect.y) / rect.height, 0, 1, -1, 1)
	}
	const mouseEnter = () => {
		node.style.transitionDuration = '0s'
	}
	const mouseLeave = () => {
		node.style.transition = 'transform 500ms cubic-bezier(0, 0, 0.1, 1)'
		mouse.x = 0
		mouse.y = 0
	}

	node.addEventListener('mousemove', mouseMove)
	node.addEventListener('mouseenter', mouseEnter)
	node.addEventListener('mouseleave', mouseLeave)

	$effect.pre(() => {
		node.style.transform = `perspective(3000px) rotateX(${-20 * mouse.y}deg) rotateY(${10 * mouse.x}deg)`
	})

	return {
		destroy() {
			node.removeEventListener('mousemove', mouseMove)
			node.removeEventListener('mouseenter', mouseEnter)
			node.removeEventListener('mouseLeave', mouseLeave)
		}
	}
}
