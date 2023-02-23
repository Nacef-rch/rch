import { useEffect, useState } from 'react';
import { IconButton } from '@mui/material';
import { Icon } from '../Icon';

interface ImageSliderProps {
  slides: string[];
  title: string;
  rounded : "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" ;
  className?:string;
  maxWidth?: number;
  duration?: number;
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

const prevSlide = (currentIndex: number, slides: string[]) => {
  const isFirstSlide = currentIndex === 0;
  return isFirstSlide ? slides.length - 1 : currentIndex - 1;
};

const nextSlide = (currentIndex: number, slides: string[]) => {
  const isLastSlide = currentIndex === slides.length - 1;
  return isLastSlide ? 0 : currentIndex + 1;
};

export const ImageSlider = ({
  slides,
  title,
  rounded = "none",
  className,
  maxWidth = 1200,
  duration = 500,
  autoSlide = false,
  autoSlideInterval = 3000,
}: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(() => {
      setCurrentIndex(nextSlide(currentIndex, slides));
    }, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className={`overflow-hidden relative group transition-all ease-out rounded-${rounded} duration-${duration}  ${className}`}>
      <div
        className={`max-w-[${maxWidth}px] flex transition-transform ease-out duration-${duration}`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((url, index) => (
          <img key={index} src={url} alt={title} className=" bg-center bg-cover"/>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4 ">
        <IconButton
          onClick={() => {
            setCurrentIndex(prevSlide(currentIndex, slides));
          }}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white hidden group-hover:block"
        >
          <Icon icon="ChevronLeftIcon" className="h-6 w-6" />
        </IconButton>

        <IconButton
          onClick={() => {
            setCurrentIndex(nextSlide(currentIndex, slides));
          }}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white hidden group-hover:block"
        >
          <Icon icon="ChevronRightIcon" className="h-6 w-6" />
        </IconButton>
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => setCurrentIndex(slideIndex)}
              className={`
            transition-all w-3 h-3 bg-white rounded-full
            ${currentIndex === slideIndex ? 'p-2' : 'bg-opacity-50'}
          `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
