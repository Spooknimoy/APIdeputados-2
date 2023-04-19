import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Cabecalho from './Cabecalho'
import Rodape from './Rodape'
import { Container } from 'react-bootstrap';

const Pagina = () => {

    const estiloBackground = {
        background: 'rgba(14, 40, 237, 0.96)',
        height: '40vh',
        width: '100%'
    }

    const estiloTexto = {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: '2rem',
        fontWeight: 'bold',
        
        paddingTop: '9vh'
    }

    return (
        <>
            <Cabecalho />
            <div style={estiloBackground}>
                <div>
                    <h1 style={estiloTexto}>Dados abertos</h1>
                    <p>COlá! Se você estiver procurando por dados selecionados em pequenas quantidades, eu recomendaria experimentar a nova
                        API RESTful disponível aqui. Esta API fornece URLs para acessar os dados, parâmetros de busca e estruturas de dados
                        retornadas.

                        Por outro lado, se você deseja baixar conjuntos completos e extensos de dados de uma única vez para serem selecionados e processados em
                        seu computador, sugiro que acesse a seção de Arquivos. Lá, você poderá escolher o formato mais adequado para sua necessidade.

                        Divirta-se com os dados! Se você tiver alguma dúvida ou precisar de ajuda adicional, não hesite em me perguntar.</p>
                </div>
            </div>

            <Rodape />
        </>
    )
}
export default Pagina