import React, { useState } from 'react'
import ControladorProjeto from './Projetos/ControladorProjeto'
import ControladorFormulario from './FormularioProjeto/ControladorFormulario'

function ControladorPage(){

    const [etapaAtual, setEtapaAtual] = useState(0)

    const paginas = [
        <ControladorProjeto Cadastrar={prox}/>,
        <ControladorFormulario Retornar={anterior}/>
    ]

    function prox() {
        setEtapaAtual(etapaAtual + 1)
    }
    
    function anterior() {
        setEtapaAtual(etapaAtual - 1)
    }

    return <>{paginas[etapaAtual]}</>

}

export default ControladorPage