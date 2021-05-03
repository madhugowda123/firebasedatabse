// Ex 1 Using JSX

// const element = <h1>Hello World</h1>;
// ReactDOM.render(element, document.getElementById("root"));

//Ex 2 Without using JSX i.e React.createElement();

// const element1 = React.createElement("h1", null, "Hello JSX useing method");
// ReactDOM.render(element1, document.getElementById("root"));

// //Ex 3 JSX useing expression.

// const pname = "madhu";
// const pelement = <h2>Hello,Mr.{pname}</h2>;
// ReactDOM.render(pelement, document.getElementById("root"));

// Ex 4 functions

// function Employee() {
//   return <h1>Hello Mohit</h1>;
// }
// ReactDOM.render(<Employee />, document.getElementById("root"));

// Ex 5 call a function useing expression

// function Employee(user) {
//     return user.fname + user.lname;
//   }

//   const user = {
//     fname: "Charlie",
//     lname: "Smith",
//   };

//   const empDetails = <h1>Hello,{Employee(user)}</h1>;
//   ReactDOM.render(empDetails, document.getElementById("root"));

// Ex 6  To set time and time interval at a single function

// function Clock() {
//   let element = (
//     <div>
//       <h1>Hello Welcome</h1>
//       <h2>The Timing is{new Date().toLocaleTimeString()}</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById("root"));
// }
// setInterval(Clock, 1000);

// // Ex 7 USing React.createElement() with clas and is

// const jsxElement = React.createElement(
//   "h1",
//   { className: "test", id: "demo" },
//   "LIfe is Beautiful!!"
// );
// console.log("JSX Element is", jsxElement);

// ReactDOM.render(jsxElement, document.getElementById("root"));

//Ex 8 Createing Multiple Elemenets useing React.createElement()

// const jsxEle = React.createElement(
//   "h1",
//   null,
//   React.createElement("p", null, "Always stay and Think Positive")
// );
// console.log("JSX Element is", jsxEle);

// ReactDOM.render(jsxEle, document.getElementById("root"));

//Ex 9

const ele = React.createElement(
  "ul",
  { id: "menu" },
  React.createElement("li", { className: "sweets" }, "Gulab Jamun")
);
console.log(ele);
ReactDOM.render(ele, document.getElementById("root"));
