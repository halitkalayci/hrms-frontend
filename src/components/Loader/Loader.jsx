import React from "react";
import { Dimmer } from "semantic-ui-react";

export default function Loader() {
  return (
    <Dimmer active inverted>
      <Loader inverted>Loading</Loader>
    </Dimmer>
  );
}
