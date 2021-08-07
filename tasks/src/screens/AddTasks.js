import React, { Component } from 'react';
import { Modal, View, StyleSheet, TouchableWithoutFeedback, Text } from 'react-native';

class AddTask extends Component {
    render() {
        return (
            <Modal transparent={true} visible={this.props.isVisible} onRequestClose={this.props.onCancel}
                animationType='fade'>
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.background}>
                    </View>
                </TouchableWithoutFeedback>

            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.8)'
    }
});

export default AddTask;