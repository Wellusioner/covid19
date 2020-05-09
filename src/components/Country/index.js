import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Grid from "@material-ui/core/Grid";
import { connect, useDispatch } from 'react-redux'
import Actions from "redux/actions";

const Country = ({ countries, getGlobal }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(Actions.fetchCountries.request());
    },[dispatch]);

    const handleChange = value => {
        dispatch(Actions.fetchOneCountry.request(value));
        getGlobal(value ? value : null);
    };

    return (
        <Grid container justify={'center'} spacing={1}>
            <Grid item md={9}>
                <div style={{ width: '100%' }}>
                    <Autocomplete
                        options={countries}
                        getOptionLabel={option => option.name}
                        onChange={(_,value) => handleChange(value)}
                        id="debug"
                        debug
                        renderInput={(params) => <TextField {...params} label="Davlatni tanlang" margin="normal"/>}
                    />
                </div>
            </Grid>
        </Grid>
    );
};

const mapStateToProps = state => {
    return {
        countries: state.countries.countries
    }
};


export default connect(mapStateToProps)(Country);