import React, {useState} from 'react'
import {TextField, Container, Grid, makeStyles} from '@material-ui/core/'
import ButtonEnviar from './Button'

const useStyles = makeStyles({
    Label: {
        color: '#fff'
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
        label: '2 - Médio',
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
                    className={classes.Label}
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
                        onChange={ event =>{
                            setInicio(event.target.value)
                        }}
                    />
                    <TextField 
                        type='date' 
                        label='Final' 
                        InputLabelProps={{shrink: true}} 
                        margin='normal'
                        onChange={ event => {
                            setFinal(event.target.value)
                        }}
                    />
                </Grid>
                <Grid>
                    <TextField 
                        label='Valor'
                        margin='dense'
                        type='number'
                        onChange={ event => {
                            setValor(event.target.value)
                        }}
                    />
                    <TextField
                        select
                        label="Risco"
                        value={risco}
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
                    onChange={ event => {
                        setParticipantes(event.target.value)
                    }}
                />
                <ButtonEnviar/>
            </form>
        </Container>
    )
}

export default FormularioProjeto