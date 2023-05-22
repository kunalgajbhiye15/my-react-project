// Create a react-app that displays the following
// iii) A user-defined component that has a local variable text .The component must display this
// text as a main heading using interpolation.
function App() {
  return (
    <div>
      <h1>Hello World</h1>;<h1>InterPolation Demo</h1>
      <hr />
      <InterpolationBasics />
    </div>
  );
}

function InterpolationBasics() {
  //1.  Data Member
  let title = "Hello World";
  let para = `Vikas,Kamlesh,Krushna ipsum dolor sit amet consectetur adipisicing elit. Pariatur, optio
              repellendus delectus velit, est eaque nihil non, et alias dicta animi
              asperiores ullam placeat odit autem sunt voluptates impedit repudiandae?`;
  //2. member function, coming soon...

  // 3. UI / VIEW :: JSX
  return (
    <div>
      <h1>{title}</h1>
      <p>{para}</p>
    </div>
  );
}

export default App;
