import React from "react";

const ImageRepresentation = (props: {
  key: React.Key | null | undefined;
  src: string | undefined;
}) => {
  const handleDragStart: React.DragEventHandler<HTMLImageElement> = (event) => {
    const target = event.target as HTMLImageElement;
    event.dataTransfer.setData("text/plain", target.src);
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
