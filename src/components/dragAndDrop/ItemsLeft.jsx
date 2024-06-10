import React from "react";

export default function ItemLeft({ name, color }) {
  // console.log("left랜더링");
  return (
    <>
      <div style={{ backgroundColor: `${color}`, height: "10rem" }}>{name}</div>
    </>
  );
}
