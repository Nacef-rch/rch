import { themeSize } from "@rch/types"

interface ImageSliderConf {
    rounded: themeSize;
    maxWidth: number;
    duration: number;
    autoSlide: boolean;
    autoSlideInterval: number;
}
export const ImageSliderDefaultConfig : ImageSliderConf = {
    rounded : 'none',
    maxWidth : 1200,
    duration : 500,
    autoSlide : false,
    autoSlideInterval : 3000,
}