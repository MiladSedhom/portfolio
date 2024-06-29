import { mapRange } from '$lib/utils'

export const mouseSticky = (node: HTMLElement) => {
	// the node has been mounted in the DOM
	let rect = node.getBoundingClientRect()
	const mouse = $state<{ x: number; y: number }>({ x: 0, y: 0 })

	const mouseMove = (e: MouseEvent) => {
		const mouseX = e.clientX
		const mouseY = e.clientY

		mouse.x = mapRange((mouseX - rect.x) / rect.width, 0, 1, -1, 1)
		mouse.y = mapRange((mouseY - rect.y) / rect.height, 0, 1, -1, 1)
	}
	const mouseEnter = () => {
		node.style.transitionDuration = '0s'
	}
	const mouseLeave = () => {
		node.style.transition = 'transform 300ms ease-in'
		mouse.x = 0
		mouse.y = 0
	}
	const resizeHandler = (e: Event) => {
		rect = node.getBoundingClientRect()
	}

	window.addEventListener('resize', resizeHandler)
	node.addEventListener('mousemove', mouseMove)
	node.addEventListener('mouseenter', mouseEnter)
	node.addEventListener('mouseleave', mouseLeave)

	$effect.pre(() => {
		console.log('before: ', node.style.transform)
		node.style.transform = `translateX(${8 * mouse.x}px) translateY(${4 * mouse.y}px) rotate(${-1 * mouse.x}deg)`
		mouse.x
		console.log('after: ', node.style.transform)
	})

	return {
		destroy() {
			window.removeEventListener('resize', resizeHandler)
			node.removeEventListener('mousemove', mouseMove)
			node.removeEventListener('mouseenter', mouseEnter)
			node.removeEventListener('mouseLeave', mouseLeave)
		}
	}
}
