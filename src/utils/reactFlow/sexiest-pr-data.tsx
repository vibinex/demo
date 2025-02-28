import React from 'react';
import { MarkerType, type Edge, type Node } from '@xyflow/react';

export const nodes: Node[] = [
	{
		id: 'browser_use/browser/browser.py',
		type: 'default',
		draggable: false,
		selectable: false,
		data: {
			level: 1,
			label:
				'browser_use/browser/browser.py',
		},
		position: { x: 0, y: 0 },
		style: {
			width: 200,
			height: 300,
			fontSize: 12,
		},
	},
	{
		id: 'BrowserConfig',
		type: 'default',
		data: {
			label: 'class BrowserConfig',
			level: 1,
		},
		position: { x: 30, y: 30 },
		style: {
			width: 130,
			height: 20,
			fontSize: 10,
			textAlign: "center",
			alignItems: "flex-start",
			padding: "1px",
			backgroundColor: "yellow"
			
		},
	},
	{
		id: 'Browser',
		type: 'default',
		data: {
			label: 'class Browser',
			level: 1,
		},
		position: { x: 30, y: 60 },
		style: {
			width: 130,
			height: 230,
			fontSize: 10,
			textAlign: "center",
			alignItems: "flex-start",
			padding: "1px"
		},
	},
	{
		id: '_setup_cdp',
		type: 'default',
		data: {
			label: 'fn _setup_cdp',
			level: 1,
		},
		position: { x: 40, y: 90 },
		style: {
			width: 110,
			height: 40,
			fontSize:8,
			textAlign: "center",
			alignItems: "flex-start",
			padding: "1px",
			backgroundColor: "yellow",
		},
	},
	{
		id: '_setup_users',
		type: 'default',
		data: {
			label: 'fn _setup_users',
			level: 1,
		},
		position: { x: 40, y: 140 },
		style: {
			width: 110,
			height: 40,
			fontSize: 8,
			textAlign: "center",
			alignItems: "flex-start",
			padding: "1px",
			backgroundColor: "yellow"
		},
	},
	{
		id: '_setup_browser_with_instance',
		type: 'default',
		data: {
			label: 'fn _setup_browser_with_instance',
			level: 1,
		},
		position: { x: 40, y: 190 },
		style: {
			width: 110,
			height: 40,
			fontSize: 8,
			textAlign: "center",
			alignItems: "flex-start",
			padding: "1px",
			backgroundColor: "yellow"
		},
	},
	{
		id: '_setup_browser',
		type: 'default',
		data: {
			label: 'fn _setup_browser',
			level: 1,
		},
		position: { x: 40, y: 240 },
		style: {
			width: 110,
			height: 40,
			fontSize: 8,
			textAlign: "center",
			alignItems: "flex-start",
			padding: "1px",
			backgroundColor: "yellow"
		},
	},
];

export const edges: Edge[] = [
	{
		id: 'e1-2',
		source: 'BrowserConfig',
		target: 'Browser',
		label: 'Line 75',
		type: 'smoothstep',
		markerEnd: {
			type: MarkerType.ArrowClosed,
		},
	},
];