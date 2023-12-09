import { LayoutAnimation, LayoutAnimationConfig } from "react-native";

const layoutAnimationLogin: LayoutAnimationConfig = {
    duration: 1500,
    create: {
        type: LayoutAnimation.Types.spring,
        property: LayoutAnimation.Properties.scaleXY,
        springDamping: 0.7
    },
};

export { layoutAnimationLogin };