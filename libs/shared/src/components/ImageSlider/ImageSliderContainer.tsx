import { useEffect, useState } from 'react';
import { IconButton } from '@mui/material';
import { Icon } from '../Icon';
import { ImageSliderProps } from './types/ImageSlider.type';

interface ImageSliderContainerProps extends ImageSliderProps {
  children: React.ReactNode;
}

const prevSlide = (currentIndex: number, slides: string[]): number => {
  const isFirstSlide = currentIndex === 0;
  return isFirstSlide ? slides.length - 1 : currentIndex - 1;
};

const nextSlide = (currentIndex: number, slides: string[]): number => {
  const isLastSlide = currentIndex === slides.length - 1;
  return isLastSlide ? 0 : currentIndex + 1;
};

export const ImageSliderContainer = ({
  slides,
  rounded,
  className,
  children,
  maxWidth,
  duration,
  autoSlide,
  autoSlideInterval,
}: ImageSliderContainerProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(() => {
      setCurrentIndex(nextSlide(currentIndex, slides));
    }, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div
      className={`overflow-hidden inset-0 relative group transition-all ease-out rounded-${rounded} duration-${duration}  ${className}`}
    >
      <div
        className={`max-w-[${maxWidth}px] flex transition-transform ease-out duration-${duration}`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {children}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4 ">
        <IconButton
          onClick={() => {
            setCurrentIndex(prevSlide(currentIndex, slides));
          }}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white hidden group-hover:block"
        >
          <Icon icon="ChevronLeftIcon" className="h-4 w-4" />
        </IconButton>

        <IconButton
          onClick={() => {
            setCurrentIndex(nextSlide(currentIndex, slides));
          }}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white hidden group-hover:block"
        >
          <Icon icon="ChevronRightIcon" className="h-4 w-4" />
        </IconButton>
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => setCurrentIndex(slideIndex)}
              className={`
            transition-all w-2 h-2 bg-white rounded-full
            ${currentIndex === slideIndex ? 'p-1.5' : 'bg-opacity-50'}
          `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSliderContainer;
