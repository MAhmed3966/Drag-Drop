import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { SearchContext } from "../Context/createContext";

const ImageGallery = () => {
  const { value1, value2 } = useContext(SearchContext);
  const [query, setQuery] = value1;
  const [image, setImage] = value2;

  console.log(query);
  return (
    <div>
      {image &&
        image.map((imgs) => {
          return (
            <img
              src={`https://farm${imgs.farm}.staticflickr.com/${imgs.server}/${imgs.id}_${imgs.secret}_m.jpg
`}
            />
          );
        })}
    </div>
  );
};

export default ImageGallery;
