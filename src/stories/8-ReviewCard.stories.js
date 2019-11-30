import React from "react";
import { storiesOf } from "@storybook/react";

import ReviewCard from "../components/ReviewCard";

storiesOf("Review Card", module).add("with reviews", () => (
	<ReviewCard
		review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Tellus at urna condimentum mattis pellentesque id nibh."
		author="leo duis"
	/>
));
