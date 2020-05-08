import React from 'react'
import { Bar } from 'react-chartjs-2';
import Grid from "@material-ui/core/Grid";

const data = {
    labels: ['Cases', 'Recovered', 'Deaths'],
        datasets: [{
        label: 'Covid',
        data: [12, 19, 3],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1
    }]
};

const Chart = () => {

    return (
        <>
            <Grid container justify={'center'} spacing={1}>
                <Grid item md={9}>
                    <div className={'chart-box'}>
                        <Bar
                            data={data}
                        />
                    </div>
                </Grid>
            </Grid>

        </>
    );
};

export default Chart;