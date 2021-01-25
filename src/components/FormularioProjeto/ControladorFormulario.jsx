import React, { Fragment } from 'react'
import FormularioProjeto from './FormularioProjeto'
import api from '../../services/api'

function ControladorProjeto() {

    return(
        <Fragment>
            <FormularioProjeto Enviar={handleEnviar}/>
        </Fragment>
    )
}

async function handleEnviar(dados){
    await api.post('/Projeto', {...dados})
}

export default ControladorProjeto