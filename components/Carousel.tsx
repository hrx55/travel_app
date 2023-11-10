import Image from "next/image";
import React, { useState } from "react";

const Carousel = ({ slika }: { slika: any }) => {
  const [currentIndex, setcurrentIndex] = useState(0);

  const goToNext = () => {
    setcurrentIndex((prevIndex) => (prevIndex + 1) % slika.length);
  };

  const goToPrev = () => {
    setcurrentIndex(
      (prevIndex) => (prevIndex - 1 + slika.length) % slika.length
    );
  };

  return (
    <>
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start overflow-x-auto lg:h-[400px] xl:h-[640px] relative">
        <button onClick={goToPrev}>
          <Image
            src="/angle-up-solid.svg"
            alt="arrow left"
            width={50}
            height={25}
            className="rotate-270 absolute top-1/2 transform -translate-y-1/2 left-[40px] z-20 arrow-white"
          />
        </button>
        {slika[currentIndex]}
        <button onClick={goToNext}>
          <Image
            src="/angle-up-solid.svg"
            alt="arrow right"
            width={50}
            height={25}
            className="rotate-90 absolute top-1/2 transform -translate-y-1/2 right-[40px] z-20 arrow-white"
          />
        </button>
      </div>
    </>
  );
};

export default Carousel;
