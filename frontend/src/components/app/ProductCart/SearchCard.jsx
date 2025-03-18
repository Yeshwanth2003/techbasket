import { forwardRef } from "react";
import BasicCard from "./BasicCard";
import AddToCart from "./AddToCart";

const SearchCard = forwardRef(({ elem, index }, ref) => {
  return (
    <>
      <div className="searchcard-wrapper">
        <BasicCard
          cat={elem.category}
          img={elem.img}
          dislikes={elem.dislike}
          likes={elem.likes}
          name={elem.name}
          price={elem.price}
          key={`${index}card`}
          pid={elem.pid}
          ref={ref}
        />
        <AddToCart ref={ref} pid={elem.pid} />
      </div>
    </>
  );
});

export default SearchCard;
