import React from "react";
import { Earth } from "../../components/templates/Earth";
import { Ball } from "../../components/atoms/Ball";

export function PlaygroundOne() {
  return (
    <Earth
      body={
        <>
          <Ball />
        </>
      }
    />
  );
}
