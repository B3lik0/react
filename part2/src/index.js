import { useState } from "react";
import ReactDOM from "react-dom";

// const App = () => {
//   const [valueLeft, setLeft] = useState(1);
//   const [valueRight, setRight] = useState(2);

//   return (
//     <div>
//       {valueLeft}
//       <button onClick={() => setLeft(valueLeft + 1)}>Left</button>
//       <button onClick={() => setRight(valueRight + 2)}>Right</button>
//       {valueRight}
//     </div>
//   );
// };
const App = () => {
  const [counters, setCounter] = useState({ left: 0, right: 2 , mensaje: "mensaje en el estado"});
  const handleClickLeft = () => {
    setCounter({ ...counters, left: counters.left + 1,});
  };
  const handleClickRight = () => {
    setCounter({ ...counters, right: counters.right + 2 });
  };

  return (
    <div>
      {counters.left}
      <button onClick={handleClickLeft}>Left</button>
      <button onClick={handleClickRight}>Right</button>
      {counters.right}

      <br />
      {counters.mensaje}
    </div>
  );
};

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
