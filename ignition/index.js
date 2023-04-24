import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = <h1>Hello From React</h1>;

const Title = () => {
    return <h1>Namaste Javascript</h1>;
};

const title = (
    <div>
        <h2>This is a react element</h2>
    </div>
);

const HeadingComponent = () => {
    return (
        <>
            <>
                <Title />
                {title}
                <h2>This is such a good course</h2>
            </>
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
const root2 = ReactDOM.createRoot(document.getElementById("root2"));

root.render(<HeadingComponent />);
root2.render(<Title/>)

// const parent = React.createElement(
//     "div",
//     { id: "parent" },
//     React.createElement("div", { id: "child" }, [
//         React.createElement("h1", { key: "1", id: "heading1" }, "Hello World"),
//         React.createElement("h1", { key: "2", id: "heading2" }, "In React JS"),
//     ])
// );

// const parent2 = React.createElement("div", { id: "parent" }, [
//     React.createElement("div", { key: "div1", id: "child" }, [
//         React.createElement("h1", { key: "1", id: "heading1" }, "Hello World"),
//         React.createElement("h1", { key: "2", id: "heading2" }, "In React JS"),
//     ]),
//     React.createElement("div", { key: "div2", id: "child" }, [
//         React.createElement("h1", { key: "1", id: "heading1" }, "Hello World"),
//         React.createElement("h1", { key: "2", id: "heading2" }, "In React JS"),
//     ]),
// ]);
