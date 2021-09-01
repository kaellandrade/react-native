import React, { Component } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import Header from '../components/Header';
import Post from '../components/Post';

class Feed extends Component {
    state = {
        posts: [
            {
                id: Math.random(),
                nickname: 'Micael Andrade',
                email: 'micael..java@gmail.com',
                image: require('../../assets/imgs/fence.jpg'),
                comments: [{
                    nickname: 'John Ray Sheldon',
                    comment: 'Stunnig!'
                },
                {
                    nickname: 'Manoel Silva',
                    comment: 'Foto Legal!'
                }, {
                    nickname: 'Breno Barroso',
                    comment: 'Uau!'
                },
                {
                    nickname: 'Miriã',
                    comment: 'Linda!!'
                }
                ]
            },
            {
                id: Math.random(),
                nickname: 'Joice',
                email: 'joice.@gmail.com',
                image: require('../../assets/imgs/bw.jpg'),
                comments: [{
                    nickname: 'John Ray Sheldon',
                    comment: 'Stunnig!'
                },
                {
                    nickname: 'Manoel Silva',
                    comment: 'Foto Legal!'
                }, {
                    nickname: 'Breno Barroso',
                    comment: 'Uau!'
                },
                {
                    nickname: 'Miriã',
                    comment: 'Linda!!'
                }
                ]
            }, {
                id: Math.random(),
                nickname: 'Pedro',
                email: 'ppdro.@gmail.com',
                image: require('../../assets/imgs/boat.jpg'),
                comments: [{
                    nickname: 'Uelton',
                    comment: 'Gostei muito!'
                },
                {
                    nickname: 'Manoel Silva',
                    comment: 'Foto Legal!'
                }, {
                    nickname: 'Caio',
                    comment: 'Legal!'
                },
                {
                    nickname: 'Slivania',
                    comment: 'Gostei!!'
                }
                ]
            },
            {
                id: Math.random(),
                nickname: 'Jota',
                email: 'jj.@gmail.com',
                image: require('../../assets/imgs/gate.jpg'),
                comments: [
                ]
            }
        ]
    }
    render() {
        return (
            <View style={styles.container}>
                <Header />
                <FlatList
                    data={this.state.posts}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) => <Post key={item.id} {...item} />}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
})

export default Feed;