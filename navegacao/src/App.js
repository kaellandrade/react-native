import React, { Fragment } from 'react';
import TelaA from './views/TelaA';
import TelaB from './views/TelaB';
import TelaC from './views/TelaC';


const App = props => {
    return (
        <Fragment>
            <TelaA/>
            <TelaB/>
            <TelaC/>
        </Fragment>
    );
}

export default App;