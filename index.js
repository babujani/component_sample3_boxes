function Box(props) {
  return (
    <div className={`outerBox ${props.boxSize}`}>
      <p>{props.boxName}</p>
    </div>
  );
}

const element = (
  <div>
    <h1>Boxes</h1>
    <div className="boxContainer">
      <Box boxSize="size1" boxName="Small" />
      <Box boxSize="size2" boxName="Medium" />
      <Box boxSize="size3" boxName="Large" />
    </div>
  </div>
);
ReactDOM.render(element, document.getElementById("root"));
