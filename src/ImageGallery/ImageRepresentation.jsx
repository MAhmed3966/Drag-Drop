const ImageRepresentation = (props) => {
  const handleDragStart = (event) => {
      event.dataTransfer.setData("text/plain", event.target.src);
  };
  return (
    <img
      key={props.key}
      draggable="true"
      onDragStart={handleDragStart}
      src={props.src}
      alt="Text as an Altenative"
    ></img>
  );
};

export default ImageRepresentation;
