import React, { cloneElement } from 'react';
import { SafeAreaView } from 'react-native';

const Familia = props => {
    return (
        <SafeAreaView>
            {React.Children.map(props.children, child => (
                cloneElement(child, { ...props, ...child.props })
            ))}
        </SafeAreaView>
    );
}

export default Familia;