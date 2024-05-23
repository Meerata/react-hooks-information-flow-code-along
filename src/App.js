import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // Update the document title when 'text' changes
  useEffect(() => {
    document.title = text;
  }, [text]);

  // Reset 'count' to 0 after 5 seconds on the initial render
  useEffect(() => {
    const timer = setTimeout(() => setCount(0), 5000);
    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  // Log a message every time the component renders
  useEffect(() => {
    console.log("useEffect called");
  });

  console.log("Component rendering");

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        I've been clicked {count} times
      </button>
      <input
        type="text"
        placeholder="Type away..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default App;
