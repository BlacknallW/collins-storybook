import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, object } from "@storybook/addon-knobs";

import Title from "../components/Title";


storiesOf("Title", module)
  .addDecorator(withKnobs)
  .add("with string", () => {
    const style = {
      fontSize: "20px"
    };
    return (
      <Title
        style={object("Style", style)}
        text={text("Title text", "Suzanne Collins")}
      />
    );
  });
