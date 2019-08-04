import { Dimensions } from 'react-native';

// SCALE: ratio to zoom in or zoom out elements in all devices
const entireScreenWidth = Dimensions.get('window').width;
let SCALE = 0.875;
if (entireScreenWidth > 768) {
    SCALE = 2.5;
} else if (entireScreenWidth > 414) {
    SCALE = 1.625;
} else if (entireScreenWidth > 375) {
    SCALE = 1.125;
} else if (entireScreenWidth > 320) {
    SCALE = 1;
}

export default {
    scale: SCALE,
};
