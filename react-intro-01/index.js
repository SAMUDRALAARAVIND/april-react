// <h1>Hello Dom</h1>
// const h1 = document.createElement("h1");
// h1.innerText = "Hello DOM";

// document.body.appendChild(h1);


/**
    <div id="container">
        <p class="para">Para text</p>
        <b>Bold text</b>
    </div>

    overwriting
 */

// document.body.innerHTML = `<div id="container">
// <p class="para">Para text</p>
// <b>Bold text</b>
// </div>`

// const container = document.createElement("div");
// container.id = "container";

// const para = document.createElement("p");
// para.className = "para";
// para.innerText = "Para text";

// const bold = document.createElement("b");
// bold.innerText = "Bold text";

// container.append(para, bold);

// document.body.appendChild(container);


// Why React ?

/**
    1. High Performance 
    2. Code re usability 
    3. Modular code 
 */



// console.log(React);
// console.log(ReactDOM);

// We can create a React Element

// document.createElement();

// React.createElement(tagName, attributes, children )
// <h1 id="" className="">Hello World</h1>
// const h1 = React.createElement("h1", { id: "title", className: "heading" }, "Hello World");
// h1 =>  React element
const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(h1);
// root.render(ReactElement)

/**
    <div id="container">
        <p class="para">Para <span>Span text</span> text</p>
        <b>Bold text</b>
    </div>
 */

// const span = React.createElement("span", null, "Span text")
// const para = React.createElement("p", { className: "para" }, "Para ", span, " text");
// const bold = React.createElement("b", null, "Bold text");

// const container = React.createElement("div", { id: "container" }, para, bold);

// root.render(container);
// NaN
// let name = "aravind"; // string => string , boolean, object, function, undefined, Symbol, BigInt

// const container = (
//     <div id="container">
//         <p class="para">Para <span>Span text</span> text</p>
//         <b>Bold text</b>
//     </div>
// );

// root.render(container);
