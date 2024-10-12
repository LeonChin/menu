import React from "react";

function Title({ text }) {
  return (
    <main className="title">
      {text}
      <div className="title-underline"></div>
    </main>
  );
}

export default Title;
