import React from "react";
import {storiesOf} from "@storybook/react";

import GenreCard from "../components/GenreCard"

storiesOf("GenreCard", module)
.add("Book Genres", () => <GenreCard title="GoobleGobble" bookTitle="Tales of GibblyGoo" text="Enter the tales of gibbledee gee!" />)