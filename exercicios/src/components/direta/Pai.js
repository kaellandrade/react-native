import React, {Fragment} from 'react';
import {View} from 'react-native';
import Filho from './Filho';

const Pai = props => {
    return (
        <Fragment>
            <Filho nome='Micael' sobrenome={props.sobrenome}/>
        </Fragment>
    );
}

export default Pai;