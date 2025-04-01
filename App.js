import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement("div", { id: "child_1" }, [
    React.createElement("h1", {}, "This is Namaste React"),
    React.createElement("h2", {}, "I'm an h2 tag in child element 1"),
  ]),React.createElement("div", { id: "child_2" }, [
    React.createElement("h1", {}, "I'm an h1 tag in child element 2"),
    React.createElement("h2", {}, "I'm an h2 tag in child element 2"),
  ])]
);

const jsxHeading = (
  <div id="aprent">
    <div id="child_1">
      <h2>I'm an h2 tag in child element 1</h2>
    </div>
    <div id="child_2">
      <h2>I'm an h2 tag in child element 2</h2>
    </div>    
  </div>
)
const root = ReactDOM.createRoot(document.getElementById("reactRoot"));
root.render(jsxHeading);
