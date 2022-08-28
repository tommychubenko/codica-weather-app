// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import { Details } from "./components/Details";
// import { Error } from "./components/Error";
// import { Home } from "./components/Home";
// import { SearchBar } from "./components/SearchBar";

// export const add = (num1: number, num2: number) => {
//   return num1 + num2;
// };

// const App = () => {
//   return (
//     <div className="container">
//       <SearchBar />
//       <Routes>
//         <Route path="/" element={<Home />}>
//           <Route path="/city/:id" element={<Details />} />
//         </Route>
//         <Route path="*" element={<Error />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;

import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
