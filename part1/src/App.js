//import logo from './logo.svg';
import "./App.css";
import Mensaje from "./ComponenteMensaje";

function App() {
  const HolaMundo = "Hola Mundo";
  const Fechas = new Date();
  return (
    <>
      {HolaMundo}
      {Fechas.getFullYear()}
      <Mensaje message="estamos trabajando en un curso" color="red" />
      <Mensaje message="de react.js" color="gray" />
      
    </>
  );
}

export default App;
