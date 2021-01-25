import React, {Fragment, useEffect, useState} from 'react'
import api from '../../services/api';
import {Card, Typography, CardContent, CardActions, Button, Grid} from '@material-ui/core/'
import { makeStyles } from '@material-ui/core';
import Simulacao from './Simulacao';

const useStyles = makeStyles({
    Card: {
        width: '33%',
        backgroundColor: '#424242',
        margin: "0 2rem 2rem 0"
    },
    CardContent: {
        color: '#fff'
    },
    CardItems: {
        margin: '0.7rem 0',
        color: '#fff'
    },
    ListStyle: {
        listStyle: 'none'
    },
    Buttons: {
        display: 'flex',
        justifyContent: 'space-around',
        marginBottom: '1.5rem'
    }
})

function Projeto({Apagar}){

    const [projeto, setProjeto] = useState([])
    const [count, setCount] = useState(0)

    useEffect(() => {
        getData();
    }, [count])

    const getData = async () => {
        api.get('/Projeto')
            .then(res => {
                const projeto = res.data
                setProjeto(projeto)
            })
    }

    const classes = useStyles()

    return(
        <Grid
            container
            justify='space-evenly'
        >
            {projeto.map( (projeto, index) => (
                <Card className={classes.Card} justify-space-around key={index}>
                    <Fragment>
                        <CardContent className={classes.CardContent}>
                            <Typography component="li" className={classes.ListStyle}>
                                <Typography
                                    variant='h6' 
                                    component="p"
                                    className={classes.CardItems}>
                                    Nome do projeto: {projeto.nome}
                                </Typography>
                                <Typography 
                                    variant='body2'
                                    component="p"
                                    color='textSecondary'
                                    className={classes.CardItems}>
                                    Valor: {projeto.valor}
                                </Typography>
                                <Typography 
                                    variant='body2'
                                    component="p"
                                    color='textSecondary'
                                    className={classes.CardItems}>
                                    Risco: {projeto.risco}
                                </Typography>
                                <Typography 
                                    variant='body2'
                                    component="p"
                                    color='textSecondary'
                                    className={classes.CardItems}>
                                    Participantes: {projeto.participantes}
                                </Typography>
                            </Typography>
                        </CardContent>
                    <CardActions>
                        <Grid
                            container
                            justify='space-around'
                            className={classes.Buttons}
                        >   
                            <Simulacao Investimento={handleInvest}/>
                            <Button 
                                size='small' 
                                color='primary'
                                variant='contained'
                            >
                                Alterar
                            </Button>
                            <Button
                                size='small'
                                color='secondary'
                                variant='contained'
                                onClick={ () => {
                                    Apagar({projeto})
                                    setCount(count + 1)
                                }}>
                                Excluir
                            </Button>
                        </Grid>
                    </CardActions>
                </Fragment>
            </Card>
        ))}</Grid>
    )
}

function handleInvest(invest){
    console.log(invest)
}

export default Projeto