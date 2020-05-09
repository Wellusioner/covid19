import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux'
import Container from '@material-ui/core/Container';
import { Card, Country, Chart } from './components';
import Actions from 'redux/actions';

const App = ({ global }) =>{

    const [isGlobal, setGlobal] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(Actions.fetchGlobal.request());
    }, [dispatch]);


    return (
        <div className={'main-page'}>
            <Container maxWidth="lg">
                <div className={'main-title'}><img src={require('./assets/images/covid.png')} alt=""/></div>
                <Card data={global} />
                <Country getGlobal={value => setGlobal(value)} />
                <Chart {...{isGlobal, global}} />
            </Container>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        global: state.data.global,
    }
};

export default connect(mapStateToProps)(App);