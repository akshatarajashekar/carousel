export interface CarouselListType {
  title: string;
  imgPath: string;
}

export interface CarouselListPropType {
  data: CarouselListType[];
  slides: number;
}

export interface CarouselDataType {
  title: string;
  image: string;
}

export interface CarouselDataTypeWrap {
  data: CarouselDataType[];
  slides: number;
}