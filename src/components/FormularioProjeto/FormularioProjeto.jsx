import React, {useState} from 'react'
import {TextField, Container, Grid, makeStyles} from '@material-ui/core/'
import ButtonEnviar from './Button'

const useStyles = makeStyles({
    Width: {
        width: '40%',
        marginBottom: '1.5rem'
    }
})

const valores = [
    {
        value: '0',
        label: '0 - Baixo',
    },
    {
        value: '1',
        label: '1 - Médio',
    },
    {
        value: '2',
        label: '2 - Alto',
    }
]

function FormularioProjeto({Enviar}){

    const [nome, setNome] = useState('')
    const [inicio, setInicio] = useState('')
    const [final, setFinal] = useState('')
    const [valor, setValor] = useState('')
    const [risco, setRisco] = useState(0)
    const [participantes, setParticipantes] = useState('')

    const classes = useStyles()

    return(
        <Container
            maxWidth='sm'
        >
            <form onSubmit={(event) => {
                event.preventDefault()
                Enviar({nome, inicio, final, valor, risco, participantes})
            }}>
                <TextField
                    label='Nome' 
                    fullWidth 
                    margin='dense'
                    required
                    ref={nome}
                    onChange={ event => {
                        setNome(event.target.value)
                    }}
                />
                <Grid
                    container
                    justify='space-between'
                >
                    <TextField 
                        type='date' 
                        label='Início' 
                        InputLabelProps={{shrink: true}} 
                        margin='normal'
                        required
                        className={classes.Width}
                        onChange={ event =>{
                            setInicio(event.target.value)
                        }}
                    />
                    <TextField 
                        type='date' 
                        label='Final' 
                        InputLabelProps={{shrink: true}} 
                        margin='normal'
                        required
                        className={classes.Width}
                        onChange={ event => {
                            setFinal(event.target.value)
                        }}
                    />
                </Grid>
                <Grid
                    container
                    justify='space-between'
                >
                    <TextField 
                        label='Valor'
                        margin='dense'
                        type='number'
                        required
                        className={classes.Width}
                        onChange={ event => {
                            setValor(event.target.value)
                        }}
                    />
                    <TextField
                        select
                        label="Risco"
                        value={risco}
                        required
                        className={classes.Width}
                        onChange={ event => {
                            setRisco(event.target.value)
                        }}
                        SelectProps={{
                            native: true,
                        }}
                        >
                        {valores.map((option) => (
                            <option key={option.value} value={option.value}>
                            {option.label}
                            </option>
                        ))}
                    </TextField>
                </Grid>
                <TextField
                    label='Participantes'
                    fullWidth
                    margin='dense'
                    required
                    onChange={ event => {
                        setParticipantes(event.target.value)
                    }}
                />
                <ButtonEnviar
                    className={classes.ButtonEnviar}
                />
            </form>
        </Container>
    )
}

export default FormularioProjeto