import React from "react";

function Container({ children, style }) {
  return (
    <main
      className={`w-full sm:max-w-3xl md:max-w-5xl lg:max-w-[90rem] mx-auto ${style}`}
    >
      {children}
    </main>
  );
}

export default Container;
