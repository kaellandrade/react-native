import { StyleSheet } from 'react-native';
import { randomColor } from '../util/randomColor';

const estilo = StyleSheet.create({
    // Fontes
    TextoG: {
        fontSize: 60,
        textAlign: 'center',
        padding: 10
    },
    TextoM: {
        fontSize: 25,
        textAlign: 'center',
        padding: 10
    },

    // Viwes
    Display: {
        backgroundColor: '#d9d5e5',
        borderRadius: 5,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        display: 'flex',
        flexGrow: 0.5,
        color: 'black'
    },
    Flex: {
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        flexWrap: 'wrap',
        margin: 10,
        justifyContent: 'center'

    },
    Button: {
        // borderRadius: 0
    }

});

export default estilo;