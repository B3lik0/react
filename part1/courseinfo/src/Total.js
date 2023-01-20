const Total = (props) => {
  const { exercises } = props;
  return <p>Number of exercises {exercises.reduce((a, b) => a + b, 0)}</p>;
};

export default Total;
