import ReactDOM from "react-dom";
import { useState } from "react";
const rootElement = document.getElementById("root");

const App = () => {
  let contador = useState(0);
  const [contadorValue, contadorUpdate] = contador;
  const handleClick = () => {
    contadorUpdate(contadorValue + 1);
    //contadorUpdate(contadorValue + 1);//modificar directamente el valor
    /*contadorUpdate((contadorValorAnterior) => { // modificar el valor mediante el valor anterior
            return contadorValorAnterior + 1;*/
  };

  const Contador = (props) => {
    const {value} = props
    return <h2>{value}</h2>;
  };
  const handleClickReset = () => {
    contadorUpdate(0);
  };

  const esPar = contadorValue % 2 === 0;
  const mensaje = esPar ? "si es par" : "es impar";

  return (
    <div>
      <Contador value={contadorValue}></Contador>
      <p>{mensaje}</p>
      <button onClick={handleClick}>Incrementar</button>
      <button onClick={handleClickReset}>Incrementar</button>
    </div>
  );
};

ReactDOM.render(<App />, rootElement);
