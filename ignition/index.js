import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", { key: "1", id: "heading1" }, "Hello World"),
        React.createElement("h1", { key: "2", id: "heading2" }, "In React JS"),
    ])
);

const parent2 = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { key: "div1", id: "child" }, [
        React.createElement("h1", { key: "1", id: "heading1" }, "Hello World"),
        React.createElement("h1", { key: "2", id: "heading2" }, "In React JS"),
    ]),
    React.createElement("div", { key: "div2", id: "child" }, [
        React.createElement("h1", { key: "1", id: "heading1" }, "Hello World"),
        React.createElement("h1", { key: "2", id: "heading2" }, "In React JS"),
    ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent2);
