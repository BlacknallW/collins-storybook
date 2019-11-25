import React from "react";
import {storiesOf} from "@storybook/react";

import ImageCard from "../components/ImageCard";

storiesOf("ImageCard", module)
.add("with images", () => <ImageCard text="Ipsumdipsumhipsum" />)