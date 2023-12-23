import { LayoutAnimation, LayoutAnimationConfig } from "react-native";

const layoutAnimationLogin: LayoutAnimationConfig = {
    duration: 1500,
    create: {
        type: LayoutAnimation.Types.spring,
        property: LayoutAnimation.Properties.scaleXY,
        springDamping: 0.7
    },
};

const layoutAnimationLisagem: LayoutAnimationConfig = {
    duration: 1000,
    create: {
        type: LayoutAnimation.Types.linear,
        property: LayoutAnimation.Properties.opacity,
        springDamping: 0.7
    },
};

export { layoutAnimationLogin,layoutAnimationLisagem };