import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import Container from '@material-ui/core/Container';
import { Card, Country, Chart } from './components';
import { globalRequest } from 'redux/actions/global'

const App = ({ fetchGlobal, global }) =>{

    useEffect(() => {
        fetchGlobal();
    }, [fetchGlobal]);


    return (
        <div className={'main-page'}>
            <Container maxWidth="lg">
                <div className={'main-title'}><img src={require('./assets/images/covid.png')} alt=""/></div>
                <Card data={global} />
                <Country />
                <Chart />
            </Container>
        </div>
    );

};

const mapStateToProps = state => {
    return {
        global: state.data.global,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchGlobal: () => {
            dispatch(globalRequest())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);