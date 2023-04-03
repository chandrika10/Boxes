const Box = (props) => {
  //  Write your code here.
  const { className, boxName } = props;
  return (
    <div className={`box ${className}`}>
      <p className="box-title">{boxName}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Boxes</h1>
    <div className="boxes-container">
      <Box boxName="Small" className="box-1" />
      <Box boxName="Medium" className="box-2" />
      <Box boxName="Large" className="box-3" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
