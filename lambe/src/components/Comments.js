import React, { Component, Fragment } from 'react';
import { Text, View, StyleSheet } from 'react-native';


/**
 * Tranforma uma lista de comentários em um componente Jsx.
 * e retorna todos esses comentários em formato 
 */
class Comments extends Component {
    /**
     * Componente comentáios
     */
    oneComent = props => (
        <Fragment>
            <Text style={styles.nickname}>@{props.nickname} </Text>
            <Text style={styles.comment}>{props.comment}</Text>
        </Fragment>
    )

    render() {
        let view = null;
        if (this.props.comments) {
            view = this.props.comments.map((item, index) => {
                if (item) {
                    return (
                        <View style={styles.commentContainer} key={index}>
                            <this.oneComent nickname={item.nickname} comment={item.comment} />
                        </View>)
                }
            }
            )
        }
        return (
            <View style={styles.container}>
                {view}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,


    },
    commentContainer: {
        flexDirection: 'row',
        marginTop: 5,

        borderColor: 'tomato'
    },
    nickname: {
        marginLeft: 5,
        fontWeight: 'bold',
        color: '#333'
    },
    comment: {
        color: '#666'
    }
})

export default Comments;