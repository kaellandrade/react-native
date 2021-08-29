import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableWithoutFeedback as Twf,
    Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

/**
 * Componente para adicionar um cometário.
 */
class AddComment extends Component {
    state = {
        comment: '',
        editMode: false
    }

    handleAddComment = () => {
        Alert.alert('Adicionado!', this.state.comment);
    }

    render() {
        let comentArea = null;
        if (this.state.editMode) {
            comentArea = (
                <View style={styles.container}>
                    <TextInput
                        placeholder='Pode comentar...'
                        autoFocus={true}
                        value={this.state.comment}
                        onChangeText={comment => this.setState({ comment })}
                        onSubmitEditing={this.handleAddComment}
                    />
                    <Twf onPress={_ => this.setState({ editMode: false })}>
                        <Icon name='times' size={15} color='#555' />
                    </Twf>
                </View>
            )
        } else {
            comentArea = (
                <Twf onPress={_ => this.setState({ editMode: true })}>
                    <View style={styles.container}>
                        <Icon name='comments' size={25} color='#555' />
                        <Text style={styles.caption}>Adicione um comentário...</Text>
                    </View>
                </Twf>
            )
        }
        return (
            <View style={{ flex: 1 }}>
                {comentArea}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10
    },
    caption: {
        marginLeft: 10,
        fontSize: 12,
        color: '#ccc'
    },
    input: {
        width: '90%',

    }
});

export default AddComment;