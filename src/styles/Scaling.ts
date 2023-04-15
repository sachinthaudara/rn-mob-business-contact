import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

// Guideline sizes are based on standard iPhone 13 mini / 11 Pro / X screen mobile device
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const hScale = (size: number) => (width / guidelineBaseWidth) * size;
const vScale = (size: number) => (height / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (hScale(size) - size) * factor;

export { hScale, vScale, moderateScale };
