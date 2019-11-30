import React from "react";
import { storiesOf } from "@storybook/react";

import LinkSection from "../components/LinkSection";

storiesOf("LinkSection", module).add("with link section",() => (
	<LinkSection text="duis convallis" header="erat imperdiet sed" />
));
