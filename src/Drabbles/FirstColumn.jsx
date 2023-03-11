import MovableItem from "./MoveableItem";
import "./Draggables.css";
import { useDrop } from "react-dnd";

const FirstColumn = ({ children, className, title }) => {
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
    <div className={className} ref={drop} >
      {title}
      {children}
    </div>
  );
};

export default FirstColumn;
