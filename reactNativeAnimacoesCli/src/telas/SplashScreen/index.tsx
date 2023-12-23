import LottieView from "lottie-react-native";
import styles from "./styles";
import splashScreen from "../../assets/nova-animacao.json";
import LinearGradient from "react-native-linear-gradient";

export default function SplaashScreen({ navigation }) {
    function animacaoFinalizada() {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Onboarding' }],
        })
    }

    return (
        <LinearGradient
            colors={['rgba(248,244,255,0.0)', '#D6E7FF']}
            style={styles.container}
        >
            <LottieView
                loop={false}
                autoPlay
                source={splashScreen}
                style={{
                    width: '100%',
                    height: '100%',
                }}
                onAnimationFinish={animacaoFinalizada}
            />
        </LinearGradient>
    );
}