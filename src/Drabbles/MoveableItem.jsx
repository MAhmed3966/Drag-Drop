import "./Draggables.css";
import { useDrag } from "react-dnd";
const ItemTypes = {
  CARD: "card",
  PHONE: "phone",
  WEAPON: "weapon",
  FOOD: "food",
  DRINK: "drink",
};
const MovableItem = (props) => {
  const {isFirstColumn,setIsFirstColumn} = props;
  console.log({isFirstColumn})
  // const [collected, drag, dragPreview] = useDrag({
  //   item: { name: "flickr_images", type: "image" },
  //   type: ItemTypes["CARD"],
  //   collect: (monitor) => {
  //     isDragging: monitor.isDragging();
  //   },
  // });
  // const opacity = isDragging ? 0.4 : 1;

  const [collected, drag, dragPreview] = useDrag(() => ({
    type: ItemTypes["CARD"],
    item: { name: "flickr_images", type: ItemTypes["CARD"] },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (dropResult && dropResult.name == "Column 1") {
        setIsFirstColumn(true);
      } else {
        setIsFirstColumn(!true);
      }
    },
  }));
  console.log(setIsFirstColumn)
  return (
    <div ref={drag} {...collected} style={{}} className="movable-item">
      We will move this item
    </div>
  );
  // return (
  //   <div ref={drag} className="movable-item">
  //     We will move this item
  //   </div>
  // );
};

export default MovableItem;
