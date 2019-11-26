import React from "react";
import { storiesOf } from "@storybook/react";
import FeaturedBookCard from "../components/FeaturedBookCard";


storiesOf("FeaturedBookCard", module).add("with featured book", () => (
	<>
		<FeaturedBookCard
			bookName="aliquam sem fringilla"
			bookTitle="ullamcorper a lacus"
			text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis ultricies lacus sed turpis tincidunt id. Sem nulla pharetra diam sit amet nisl suscipit adipiscing. Tempus quam pellentesque nec nam. Nunc lobortis mattis aliquam faucibus purus in massa tempor nec. Elit at imperdiet dui accumsan sit amet nulla. Nunc pulvinar sapien et ligula. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Consequat interdum varius sit amet mattis vulputate enim nulla aliquet. Massa tincidunt dui ut ornare lectus sit amet. Aliquam sem fringilla ut morbi."
		/>
	</>
));
