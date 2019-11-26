import React from "react";
import { storiesOf } from "@storybook/react";

import LinkSection from "../components/LinkSection";

storiesOf("LinkSection", module).add(() => (
	<LinkSection
		text="duis convallis"
		header="erat imperdiet sed"
	/>
));
