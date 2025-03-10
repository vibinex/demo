import { DockableWidget } from "./github";

const CustomButton = () => {
	console.log("==> Custom Button")
	return (
		<DockableWidget dummy={42} dummy2="Hello, World!"/>
	)
}

export default CustomButton