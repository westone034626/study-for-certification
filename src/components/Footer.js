import React from "react";

const FOOTER_HEIGHT = 100;

export default function Footer({ title }) {
  return (
    <React.Fragment>
      <div style={{ flex: 1 }}></div>

      <div
        style={{
          position: "sticky",
          bottom: 0,
          backgroundColor: "black",
          height: FOOTER_HEIGHT,
          marginTop: -FOOTER_HEIGHT,
        }}
      >
        <h1 style={{ color: "white" }}>{title}</h1>
      </div>
    </React.Fragment>
  );
}
