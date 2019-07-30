import { Dimensions, PixelRatio } from "react-native";

const { width, height } = Dimensions.get("window");

export const widthPercentageToDP = widthPercent => {
  const elemWidth = parseFloat(widthPercent);

  return PixelRatio.roundToNearestPixel((width * elemWidth) / 100);
};

export const heightPercentageToDP = heightPercent => {
  const elemHeight = parseFloat(heightPercent);

  return PixelRatio.roundToNearestPixel((height * elemHeight) / 100);
};

export const sizePercentageToDP = size =>
  width > height ? heightPercentageToDP(size) : widthPercentageToDP(size);
