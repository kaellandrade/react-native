import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image,
    Dimensions,
    Platform,
    ScrollView,
    Alert
} from 'react-native';

import * as ImagePicker from 'react-native-image-picker';
import IconButton from '../components/IconButton';


class AddPhoto extends Component {
    state = {
        image: null,
        comment: ''
    }
    captureOrLibrary = (type) => {
        if (type.type == 'library') {
            ImagePicker.launchImageLibrary(type.options, res => {
                if (!res.didCancel) {
                    this.setState({ image: { uri: res.assets[0].uri } })
                } else {
                    console.log('Cancelado')
                }
            })
        } else {
            ImagePicker.launchCamera(type.options, res => {
                if (!res.didCancel) {
                    this.setState({ image: { uri: res.assets[0].uri } })
                }
            })
        }
    }


    save = async () => {
        Alert.alert('Imagem adicionada!', this.state.comment)
    }

    render() {
        return (

            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Compartilhe uma imagem</Text>
                    <View styles={styles.imageContainer}>
                        <Image source={this.state.image} style={styles.image} />
                    </View>
                    <View style={styles.buttonGroup}>
                        <IconButton
                            label='Galeria'
                            name='image'
                            press={_ => this.captureOrLibrary({
                                type: 'library',
                                options: {
                                    maxHeight: 500,
                                    maxWidth: 500,
                                    selectionLimit: 0,
                                    mediaType: 'photo',
                                    includeBase64: false,
                                },
                            })}
                            color='tomato'

                        />
                        <IconButton
                            label='Tirar Foto'
                            name='camera'
                            press={_ => this.captureOrLibrary(
                                {
                                    type: 'capture',
                                    options: {
                                        saveToPhotos: true,
                                        mediaType: 'photo',
                                        includeBase64: false,
                                    },
                                }
                            )}
                            color='#AA0'

                        />
                    </View>
                    <TextInput placeholder='Comentário...'
                        style={styles.input}
                        value={this.state.comment}
                        onChangeText={comment => this.setState({ comment })}
                    />
                    <IconButton
                        label='Salvar'
                        name='image'
                        press={this.save}
                        color='#004'

                    />
                </View>
            </ScrollView>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginTop: Platform.OS == 'ios' ? 30 : 10,
        fontWeight: 'bold'
    },
    imageContainer: {
        width: '90%',
        height: Dimensions.get('window').width / 2,
        marginTop: 10
    },
    image: {
        width: '100%',
        backgroundColor: '#EEE',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width / 2,
        resizeMode: 'center'

    },
    button: {
        // flex: 1,
        padding: 10,
        backgroundColor: '#4286f4',
        borderRadius: 10,
    },
    input: {
        marginTop: 20,
        width: '90%'
    },
    buttonGroup: {
        justifyContent: 'space-around',
        width: Dimensions.get('window').width,
        marginTop: 30,
        flexDirection: 'row',
    }
});


const actions = [
    ,
    {
        title: 'Select Image',
        type: 'library',
        options: {
            maxHeight: 500,
            maxWidth: 500,
            selectionLimit: 0,
            mediaType: 'photo',
            includeBase64: false,
        },
    }
];

export default AddPhoto;
