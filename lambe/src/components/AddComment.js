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

import { connect } from 'react-redux'
import { addComment } from '../store/actions/post'

/**
 * Componente para adicionar um cometário.
 */
class AddComment extends Component {
    state = {
        comment: '',
        editMode: false
    }

    handleAddComment = () => {
        this.props.onAddComment({
            postId: this.props.postId,
            comment: {
                nickname: this.props.name,
                comment: this.state.comment
            }
        })
        this.setState({ comment: '', editMode: false })
    }

    render() {
        let comentArea = null;
        if (this.state.editMode) {
            comentArea = (
                <View style={styles.container}>
                    <TextInput
                        style={styles.editCommet}
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
    editCommet: {
        flex: 1,
        padding: 0,
        color: 'black',
        borderBottomWidth: 1,
        borderColor: '#ddd'
    }
});

const mapStateToProps = (({ user }) => {
    return {
        name: user.name
    }
})
const mapDispatchToProps = dispatch => {
    return {
        onAddComment: payload => dispatch(addComment(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddComment);