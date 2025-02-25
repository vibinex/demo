import type { PlasmoCSConfig } from "plasmo"
import { useEffect, useState, useRef } from "react"
import icon from "data-base64:assets/icon.png"

export const config: PlasmoCSConfig = {
	matches: ["https://github.com/*"]
}

export const DockableWidget = () => {
	const [isDragging, setIsDragging] = useState(false)
	const [position, setPosition] = useState({ y: 200 }) // Default vertical position
	const widgetRef = useRef<HTMLDivElement>(null)

	const handleMouseDown = (e: React.MouseEvent) => {
		setIsDragging(true)
	}

	const handleMouseMove = (e: MouseEvent) => {
		if (!isDragging) return

		const newY = Math.max(0, Math.min(e.clientY, window.innerHeight - 50))
		setPosition({ y: newY })
	}

	const handleMouseUp = () => {
		setIsDragging(false)
	}

	useEffect(() => {
		document.addEventListener('mousemove', handleMouseMove)
		document.addEventListener('mouseup', handleMouseUp)

		return () => {
			document.removeEventListener('mousemove', handleMouseMove)
			document.removeEventListener('mouseup', handleMouseUp)
		}
	}, [isDragging])

	const handleClick = () => {
		try {
			chrome.runtime.sendMessage({ type: "OPEN_SIDE_PANEL" }).catch(console.error)
		} catch (e) {
			console.error("Failed to send message", e)
		}
	}

	return (
		<div
			ref={widgetRef}
			style={{
				position: 'fixed',
				right: 0,
				top: position.y,
				width: '40px',
				height: '40px',
				backgroundColor: '#ffffff',
				borderRadius: '0 4px 4px 0',
				boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
				cursor: isDragging ? 'grabbing' : 'grab',
				zIndex: 9999,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center'
			}}
			onMouseDown={handleMouseDown}
			onClick={handleClick}>
			<img
				src={icon}
				alt="Extension Icon"
				style={{
					width: '24px',
					height: '24px'
				}}
			/>
		</div>
	)
}