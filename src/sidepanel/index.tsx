import { useEffect, useState } from "react"
import { ReactFlow } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { edges, nodes } from "~utils/reactFlow/sexiest-pr-data";

interface PRInfo {
	repo: string
	prNumber: number
}

function IndexSidePanel() {
	const [isPRPage, setIsPRPage] = useState(false)
	const [prInfo, setPRInfo] = useState<PRInfo | null>(null)

	useEffect(() => {
		const checkUrl = async () => {
			const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
			const url = tab?.url || ""
			const prRegex = /github\.com\/(.+?\/.+?)\/pull\/(\d+)/
			const match = url.match(prRegex)

			if (match) {
				setIsPRPage(true)
				setPRInfo({
					repo: match[1],
					prNumber: parseInt(match[2])
				})
			} else {
				setIsPRPage(false)
				setPRInfo(null)
			}
		}

		checkUrl()
		// Check URL when tab is updated
		chrome.tabs.onUpdated.addListener(checkUrl)
		chrome.tabs.onActivated.addListener(checkUrl)

		return () => {
			chrome.tabs.onUpdated.removeListener(checkUrl)
			chrome.tabs.onActivated.removeListener(checkUrl)
		}
	}, [])

	if (!isPRPage) {
		return (
			<div
				style={{
					padding: 16,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					height: "100vh",
					textAlign: "center",
					color: "#666"
				}}>
				<h3>No Pull Request Detected</h3>
				<p>Please navigate to a GitHub Pull Request to view the diff graph.</p>
			</div>
		)
	}

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				padding: 16,
				height: "100vh"
			}}>
			{prInfo && (
				<div style={{ marginBottom: 20 }}>
					<h3 style={{ margin: "0 0 8px 0" }}>Repository: {prInfo.repo}</h3>
					<h4 style={{ margin: 0 }}>Pull Request #{prInfo.prNumber}</h4>
				</div>
			)}
			<div
				style={{
					flex: 1,
					border: "1px dashed #ccc",
					borderRadius: 4,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					color: "#666"
				}}>
				<ReactFlow nodes={nodes} edges={edges} />
			</div>
		</div>
	)
}

export default IndexSidePanel