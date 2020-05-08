import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Grid from "@material-ui/core/Grid";
import { connect } from 'react-redux'
import { countriesRequest } from "redux/actions/countries";

const Country = ({ fetchCountries, countries }) => {


    useEffect(() => {
        fetchCountries();
    }, [fetchCountries]);


    return (
        <Grid container justify={'center'} spacing={1}>
            <Grid item md={9}>
                <div style={{ width: '100%' }}>
                    <Autocomplete
                        options={countries}
                        getOptionLabel={option => option.title}
                        id="debug"
                        debug
                        renderInput={(params) => <TextField {...params} label="Davlatni tanlang" margin="normal"/>}
                    />
                </div>
            </Grid>
        </Grid>
    );
};

const  mapStateToProps = state => {
    return {
        countries: state.countries.countries
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchCountries: () => {
            dispatch(countriesRequest())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Country);