import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { HomeSectionCard } from "../HomeSectionCard/HomeSectionCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Button from "@mui/material/Button";

const HomeSectionCarousel = ({data,sectionName}) => {
  // We still need state to know when to hide the buttons
  const [activeIndex, setActiveIndex] = React.useState(0);
  
  // Create a ref to get direct access to the carousel
  const carousel = React.useRef(null);

  const responsive = {
    0: { items: 2 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const items = data.slice(0, 10).map((item) => <HomeSectionCard product={item} />);

  // This function updates our state when the user drags the carousel
  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  return (
    <div className="border">
      <h2 className="text-left text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
          ref={carousel} // Attach the ref here
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          // DO NOT pass the activeIndex prop
        />

        {/* --- NEXT Button --- */}
        {activeIndex < items.length -5 && (
          <Button
            variant="contained"
            className="z-50"
            onClick={() => carousel.current?.slideNext()} // Use the ref to slide
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%)",
              bgcolor: "white",
            }}
            aria-label="next"
          >
            <KeyboardArrowRightIcon sx={{ color: "black" }} />
          </Button>
        )}

        {/* --- PREV Button --- */}
        {activeIndex > 0 && (
          <Button
            variant="contained"
            className="z-50"
            onClick={() => carousel.current?.slidePrev()} // Use the ref to slide
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%)",
              bgcolor: "white",
            }}
            aria-label="previous"
          >
            <KeyboardArrowLeftIcon sx={{ color: "black" }} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;