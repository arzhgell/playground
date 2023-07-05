import React from "react";

export function Earth({ body }) {
  return (
    <div id="earth" className="relative h-screen w-screen overflow-hidden">
      {body}
    </div>
  );
}
