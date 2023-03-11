import { useDrop } from "react-dnd";
import "./Draggables.css";
const SecondColumn = () => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: "card",
    drop: () => ({ name: "flickr_images" }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  console.log({ canDrop, isOver }, drop);
  return (
    <div ref={drop} className="column second-column">
      Column 2
    </div>
  );
};

export default SecondColumn;
