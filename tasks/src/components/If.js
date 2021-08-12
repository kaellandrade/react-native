import React from 'react';

const If = props => {
    if (props.state) {
        return (
            props.children
        );
    } else {
        return null;
    }
}

export default If;