import React from "react";
import { action } from "@storybook/addon-actions";
// import { Button } from '@storybook/react/demo';
import { storiesOf } from "@storybook/react";
import { withKnobs, text, object } from "@storybook/addon-knobs";

import NavBar from "../components/NavBar";

// export const text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

storiesOf("Navbar", module)
	.addDecorator(withKnobs)
	.add("with buttons", () => {
		const style = {
			fontSize: "24px"
			//   background: "orange"
		};
		return <NavBar style={object("Style", style)} text={"Home"} />;
	});
