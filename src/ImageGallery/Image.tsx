import ImageRepresentation from "./ImageRepresentation";
import { useContext} from "react";
import axios from "axios";
import { SearchContext } from "../Context/createContext";
import { useDrag } from "react-dnd";
import React from "react";
const ItemTypes = {
  CARD: "card",
  PHONE: "phone",
  WEAPON: "weapon",
  FOOD: "food",
  DRINK: "drink",
};

const ImageGallery = () => {
  // const { isFirstColumn, setIsFirstColumn } = props;
  const { query, setQuery, image, setImage } = useContext(SearchContext);
 
  return (
    <div>

      {image &&
        image.map((imgs) => {
          return (
            <ImageRepresentation
              key={imgs.secret}
              src={`https://farm${imgs.farm}.staticflickr.com/${imgs.server}/${imgs.id}_${imgs.secret}_m.jpg
`}
            />
          );
        })}
    </div>
  );
};

export default ImageGallery;






