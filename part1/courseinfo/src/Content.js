const Content = (props) => {
  const parts = props.parts;
  const exercises = props.exercises;
  var datos = [];
  for (let i = 0; i < parts.length; i++) {
    datos[i] = `${parts[i]} - ${exercises[i]}`;
  }
  return (
    <div>
      {datos.map((indice) => {
        return indice + '\n';
      })}
    </div>
  );
};

export default Content;
