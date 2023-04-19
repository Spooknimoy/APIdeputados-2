import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Cabecalho from './Cabecalho'
import Rodape from './Rodape'
import { Container } from 'react-bootstrap';

const Pagina = (props) => {

    const estiloBackground = {
        background: 'linear-gradient(to bottom, #FFFFFF, #ECECEC)',
        height: '100vh'
    }

    const estiloTexto = {
        color: '#333',
        fontSize: '2rem',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: '20vh'
    }

    return (
        <>
            <Cabecalho />
            <Container style={estiloBackground}>
                <div style={estiloTexto}>
                    <h1>{props.titulo}</h1>
                    <p>Este é um exemplo de texto dentro de um background.</p>
                </div>
            </Container>
            <Rodape />
        </>
    )
}

export default Pagina