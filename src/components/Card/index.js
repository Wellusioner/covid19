import React from 'react';
import get from 'lodash/get'
import moment from 'moment'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import CountUp from 'react-countup'


export default function CardComponent({data: { confirmed, recovered, deaths, lastUpdate }}) {

    const getTime = () => {

        if(!lastUpdate){
            return '';
        }
        const date = moment(lastUpdate).format('DD.MM.YY, HH:MM');

        return `${date} holatiga ko'ra`;

    };


    return (
        <Grid container justify={'center'} spacing={2}>
            <Grid item md={3}>
                <Card variant="outlined">
                    <CardContent>
                        <Typography variant={'h3'} gutterBottom>
                            <CountUp
                                className={'font-bold text-blue'}
                                end={get(confirmed,'value', 0)}
                                separator=" "
                                duration={4}
                            />
                        </Typography>
                        <Typography variant="h6" component="h2">
                            Aniqlanganlar soni
                        </Typography>
                        <Typography color="textSecondary">
                            {getTime()}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item md={3}>
                <Card variant="outlined">
                    <CardContent>
                        <Typography variant={'h3'} gutterBottom>
                            <CountUp
                                className={'font-bold text-green'}
                                end={get(recovered,'value', 0)}
                                separator=" "
                                duration={4}
                            />
                        </Typography>
                        <Typography variant="h6"  component="h2">
                            Tuzalganlar soni
                        </Typography>
                        <Typography color="textSecondary">
                            {getTime()}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item md={3}>
                <Card variant="outlined">
                    <CardContent>
                        <Typography variant={'h3'} color="secondary" gutterBottom>
                            <CountUp
                                className={'font-bold'}
                                end={get(deaths,'value', 0)}
                                separator=" "
                                duration={4}
                            />
                        </Typography>
                        <Typography variant="h6" component="h2">
                            O'limlar soni
                        </Typography>
                        <Typography color="textSecondary">
                            {getTime()}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>

    );
}