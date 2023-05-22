// iv) A user-defined component that has two local variables text and style where text is any
// string and style contains css style property . The component must display this text as a main
// heading with the style applied using interpolation.
// Display this tag from App component

import BootstrapDemo from "./pages/bootstrap.js";

// return JSX.
function App() {
  return (
    <div>
      <h1 style={{ color: "blue" }}>Interpolation Demo</h1>
      <hr />
      <InterpolationBasics />
    </div>
  );
}

function InterpolationBasics() {
  //1.  Data Member
  let title = "InterPolation DEMO";
  let para = `Kamlesh, Krushna, Vikas ipsum dolor sit amet consectetur adipisicing elit. Pariatur, optio
              repellendus delectus velit, est eaque nihil non, et alias dicta animi
              asperiores ullam placeat odit autem sunt voluptates impedit repudiandae?`;

  let mystyle = { color: "red" };
  //2. member function, coming soon...

  // 3. UI / VIEW :: JSX
  return (
    <div>
      <h1 style={mystyle}>{title}</h1>

      <p style={{ background: "green", color: "white", padding: "16px" }}>
        {para}
      </p>
    </div>
  );
}

export default App;
