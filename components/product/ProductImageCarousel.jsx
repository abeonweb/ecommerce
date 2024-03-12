"use client";
import { useState } from "react";
import Image from "next/image";

// buttons move the slide
// click on any thumbnail to update the main image
export default function ProductImageCarousel({ images }) {
    const [sliderPosition, setSliderPosition] = useState(0);

  const handlePrevClick = () => {
    //check the current positon is not 0
    if (sliderPosition !== 0)
      setSliderPosition((prevPosition) => prevPosition - 1);
  };

  const handleNextClick = () => {
    //check the current positon is not 0
    if (sliderPosition !== images.length - 1)
      setSliderPosition((prevPosition) => prevPosition + 1);
  };

  return (
    <div className="carouselContainer self-center lg:self-start">
      <div className="carousel">
        <Image
          width={24}
          height={45}
          src={"/chevron_left.svg"}
          alt=""
          className="chevronLeft absolute left-[40px] z-20 h-auto"
          onClick={handlePrevClick}
        />
        <div
          className="slider"
          style={{
            transform: `translateX(${-sliderPosition * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <Image
              key={image.thumb + index}
              width={506}
              height={450}
              src={image.image_url}
              alt=""
              className="slide"
              priority
            />
          ))}
        </div>
        <Image
          width={24}
          height={45}
          src={"/chevron_right.svg"}
          alt=""
          className="chevronRight right-[40px] z-20"
          onClick={handleNextClick}
        />
      </div>
      <ul className="carouselThumbImages">
        {images.map((thumbnail, index) => (
          <li key={thumbnail.thumb + index}>
            <Image
              width={120}
              height={90}
              src={thumbnail.thumb}
              alt=""
              onClick={() => setSliderPosition(index)}
              className="carouselThumbImage"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
