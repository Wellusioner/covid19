import React, { useEffect } from 'react'
import { Bar, Line } from 'react-chartjs-2';
import Grid from "@material-ui/core/Grid";
import { useDispatch, useSelector } from 'react-redux'
import Actions from 'redux/actions'
import get from 'lodash/get'


const Chart = ({ isGlobal, global, global: { confirmed, recovered, deaths } }) => {

    const daily = useSelector(state => state.daily.data);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(Actions.fetchDaily.request())
    }, [dispatch]);

    const LineChart =

        <Line
            data={{
                labels: daily.map(({ date }) => date),
                datasets: [{
                    data: daily.map(({ confirmed }) => confirmed),
                    label: 'Aniqlanganlar soni',
                    borderColor: '#3333ff',
                },{
                    data: daily.map(({ deaths }) => deaths),
                    label: "O'limlar soni",
                    borderColor: '#F50057',
                }]
            }}
        />;

    const BarChart = <Bar
        data={{
            labels: ['Aniqlanganlar soni', 'Tuzalganlar soni',"O'limlar soni"],
            datasets: [{
                label: 'Odamlar',
                backgroundColor: [
                    '#3333ff',
                    '#008000',
                    '#F50057',

                ],
                data: [get(confirmed,'value',''), get(recovered,'value',''), get(deaths,'value','') ]
            }]
        }}
        options={{
            legend: { display: false },
            title: {display: true, text: get(isGlobal,'name','')}
        }}
    />;


    console.log(global);
    return (
        <>
            <Grid container justify={'center'} spacing={1}>
                <Grid item md={9}>
                    <div className={'chart-box'}>
                        { !isGlobal ? LineChart : BarChart }
                    </div>
                </Grid>
            </Grid>

        </>
    );
};

export default Chart;