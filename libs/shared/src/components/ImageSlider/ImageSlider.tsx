import ImageSliderContainer from './ImageSliderContainer';
import { ImageSliderProps } from './types/ImageSlider.type';
import { ImageSliderDefaultConfig as CF } from './config/ImageSlider.config';

interface ImageSliderCpProps extends ImageSliderProps {
  title: string;
}

export const ImageSlider = ({
  slides,
  title,
  className,
  rounded = CF.rounded,
  maxWidth = CF.maxWidth,
  duration = CF.duration,
  autoSlide = CF.autoSlide,
  autoSlideInterval = CF.autoSlideInterval,
}: ImageSliderCpProps) => {
  return (
    <ImageSliderContainer
      slides={slides}
      className={className}
      rounded={rounded}
      maxWidth={maxWidth}
      duration={duration}
      autoSlide={autoSlide}
      autoSlideInterval={autoSlideInterval}
    >
      {slides.map((url, index) => (
        <img key={index} src={url} alt={title} className="bg-center bg-cover" />
      ))}
    </ImageSliderContainer>
  );
};

export default ImageSlider;
