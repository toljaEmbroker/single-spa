import React from "react";
import { Button } from "@embroker/ui-toolkit";
export default function Root(props) {
  return (
    <section>
      {props.name} <React.Fragment>is mounted!</React.Fragment>{" "}
      <button>Heeh</button>
      <Button>dadad</Button>
    </section>
  );
}
