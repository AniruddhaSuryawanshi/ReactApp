import FunctionalComponent from "./pages/FunctionalComponent";
import ClassComponent from "./pages/ClassComponent";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const company = "abc";
  const [name, setname] = useState("Aniruddha");
  return (
    // <div className="App">
    //   <h1>Class component</h1>
    //   <ClassComponent />
    //   <h1>Functional Component</h1>
    //   <FunctionalComponent
    //     name={name}
    //     height={6}
    //     company={company}
    //     setname={setname}
    //   />
    // </div>

    <Routes>
      <Route path="/" element={<ClassComponent />}></Route>
      <Route
        path="/functional-component"
        element={
          <FunctionalComponent
            name={name}
            height={6}
            company={company}
            setname={setname}
          />
        }
      />
    </Routes>
  );
}

export default App;
