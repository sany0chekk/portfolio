"use client";

import { useState } from "react";
import Lightbox, { SlideImage } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface Props {
  images: string[];
}

export default function ProjectGallery({ images }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const slides: SlideImage[] = images.map((image) => ({ src: image }));

  const openLightbox = (index: number) => {
    setIsOpen(true);
    setCurrentIndex(index);
  };

  return (
    <>
      {images.length > 0 && (
        <ul className="grid md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <li
              key={index}
              className="max-h-[300px]"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image}
                alt={`img-${index}`}
                className="rounded-md w-full h-full object-cover"
              />
            </li>
          ))}
        </ul>
      )}
      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={slides}
          index={currentIndex}
        />
      )}
    </>
  );
}
