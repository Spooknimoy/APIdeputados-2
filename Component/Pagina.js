import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Cabecalho from './Cabecalho'
import Rodape from './Rodape'
import { Container } from 'react-bootstrap';
import logo from '../pages/img/mulher22.png';

const Pagina = () => {

    const estiloBackground = {
        background: 'rgba(14, 40, 237, 0.96)',
        height: '40vh',
        width: '100%'
    }


    const estilotitulo = {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: '3rem', // alterado de 2rem para 3rem
        fontWeight: 'bold',
        paddingRight: '15vh',
        marginTop: '2rem' // adicionado margem para cima
    }

    const estilotexto = {
        color: 'rgba(255, 255, 255, 0.8)',
        paddingRight: '15vh',
        fontSize: '1rem'
    }

    const mulher22 = {
        width: '50vh',
        height: '48.3vh',
        loading: "lazy",
        margintop: '23px'
    }

    const texto = {
        marginBottom: '8vh'
    }

    return (
        <>
            <Cabecalho />
            <div style={estiloBackground}>
                <Container className="d-flex flex-row-reverse align-items-center">
                    <img style={mulher22} src='https://previews-tu.wetransfer.net/file/wetransfer/p1ot/3453d05ab857e5a9da31798f5298849320230419200415/hl-9020748185?width=512&height=512&source=storm&origin=transfer&url=https%3A%2F%2Fstorm-us-east-1.wetransfer.net%2Ffiles%2FeyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHNLd2dzSU0wWUFnQT0iLCJleHAiOm51bGwsInB1ciI6ImludGVybmFsX2ZpbGVfZG93bmxvYWQifX0--6cb7fc54f88dfc6dd472200aa38265a76e6ea76142ebffe3fa420f7ccccc9185%3Ftoken%3DeyJhbGciOiJIUzI1NiJ9.eyJzdG9ybS5zZmUiOiJleUpmY21GcGJITWlPbnNpYldWemMyRm5aU0k2SWtKQmFITkxkMmR6U1Uwd1dVRm5RVDBpTENKbGVIQWlPbTUxYkd3c0luQjFjaUk2SW1sdWRHVnlibUZzWDJacGJHVmZaRzkzYm14dllXUWlmWDAtLTZjYjdmYzU0Zjg4ZGZjNmRkNDcyMjAwYWEzODI2NWE3NmU2ZWE3NjE0MmViZmZlM2ZhNDIwZjdjY2NjYzkxODUiLCJleHAiOjE2ODE5NjIwMzYsImlhdCI6MTY4MTk1ODQzNiwia2lkIjoiRnIzciJ9.jz-nERDv1x_CfxzTfAL_Nbs-svhjJ7Smb0sWGFHf7eQ&s=f4909b393cfa3599c3a5a3ae44438ff240e12fc9&Expires=1681962036&Signature=GoDC8zpHPdgL6jkvtAPCD2CL51o-7aRS2k5xnEclyX0W3gzErigbv3bfsfjdZmMlXEvXr59PgWNzBaSJwukmlpgB050rqPNlsXQKdrF2P9zLZ6V45hXv0LoTX7Uyx8CgPk9UATdTDy999RoiIqNCDqmBXP6Q9I90J9JFH~pCMXltUpUERU6xF8VzNmbk2wTPn-px9Fu-92gzIRdEwGY9GH~iTX7-3K4wRC9EQAi03hImBzRyHNO2OT8-EAenRiDEoSWwnjW3r-JZAsqo3KvMRZPPdfgTnjXo62kVYDnkifteDLLUuCbtWnuzrL6VVGEjl6YhF0mGELF9Jhp9JEpd2Q__&Key-Pair-Id=APKAIRLQFERKGUWFG7GQ' alt="Descrição da imagem" />
                    <div className="" style={texto}>
                        <h1 style={estilotitulo}>Dados abertos</h1>
                        <p style={estilotexto}>Se você precisa de dados selecionados, um pouco de cada vez, conheça e experimente aqui mesmo a nova API RESTful, suas URLs para acesso aos dados, seus parâmetros de busca e as estruturas de dados retornadas.</p>

                           <p style={estilotexto}> Se você prefere fazer download de conjuntos completos (e grandes) de dados de uma só vez, para selecionar e processar no seu computador, visite a seção de Arquivos e escolha o formato mais apropriado para você.


                        </p>

                        <p style={estilotexto}><strong>Bom trabalho e divirta-se!</strong></p>
                    </div>
                </Container>
            </div>
            <Rodape />
        </>
    )
}

export default Pagina;