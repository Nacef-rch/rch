export interface ImageSliderProps {
    slides: string[];
    rounded: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    className?: string;
    maxWidth?: number;
    duration?: number;
    autoSlide?: boolean;
    autoSlideInterval?: number;
  }