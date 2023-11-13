// Add a controlled form that includes:
// A text input
// A button with the text of “Click Me!”
// A paragraph that has a counter that starts at 0
// When they input text in the text field and submit it, the text input should reset. At the same time the counter should increment based on the word length.
// The counter will continue to increment based on word length and will never reset back to zero. So for example: if the student typed in hi and submitted 3 times, the counter would be at 6.

import { useState } from "react";

function ControlledForm() {
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    setCount((count) => count + input.length);
    setInput("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button>Click Me!</button>
      <p>{count}</p>
    </form>
  );
}

export default ControlledForm;
