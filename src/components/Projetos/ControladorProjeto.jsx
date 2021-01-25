import React, { Fragment } from 'react'
import Projeto from './Projetos'
import api from '../../services/api'
import { makeStyles, Typography, Button, createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme()

const useStyles = makeStyles({
    Title: {
        color: '#fff',
        marginBottom: '2rem'
    },
    CriarProjetos: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(10)
    }
})

function ControladorProjeto({Cadastrar}){

    const classes = useStyles()

    return(
        <Fragment>
            <Typography
                variant='h4'
                component='h2'
                align='center'
                className={classes.Title}   
            >
                Lorem Ipsum .Inc
            </Typography>
            <Button
                variant='contained'
                color='primary'
                className={classes.CriarProjetos}
                onClick={Cadastrar}
            >
                Criar Projeto
            </Button>
            <div className={classes.Gradient}>.</div>
            <Projeto Apagar={handleExcluir}/>
        </Fragment>
    )
}

async function handleExcluir(valor) {
    const id = valor.projeto._id
    await api.delete(`/Projeto/${id}`)
}

export default ControladorProjeto