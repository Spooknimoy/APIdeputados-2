import React from 'react';
import { Button, Card, Col, Row, Table } from 'react-bootstrap';
import Link from 'next/link';
import Pagina2 from '@/Component/Pagina2';
import apiDeputados from '@/services/apiDeputados';
import ApexCharts from "react-apexcharts";





const Detalhes = ({ deputado, despesas, profissoes, orgao }) => {
    const valoresDespesas = despesas.map((item) => item.valorDocumento);
    const datasDespesas = despesas.map((item) => item.dataDocumento);

    const data = {
        labels: datasDespesas,
        datasets: [{
            data: valoresDespesas,
            backgroundColor: 'orange',
            borderColor: 'blue',
            hoverOffset: 10
        }]
    };
    const option = {};

    return (

        <Pagina2 titulo={deputado.ultimoStatus.nome}>

            <Row  className="img-fluid">
                <Col md={6}>
                    <Card className="mb-4" style={{ width: '20rem' }}>
                        <Card.Img variant="top" key={deputado.id} src={deputado.ultimoStatus.urlFoto} style={{ backgroundPosition: 'right' }} className="img-fluid" />
                        <Card.Body style={{ fontSize: '17px' }}>
                            <Card.Title>{deputado.ultimoStatus.nome}</Card.Title>
                            <Card.Text>Partido: {deputado.ultimoStatus.siglaPartido}</Card.Text>
                            <Card.Text>UF Partido: {deputado.ultimoStatus.siglaUf}</Card.Text>
                            <Card.Text>@: {deputado.ultimoStatus.email}</Card.Text>
                        </Card.Body>
                    </Card>
                    
                </Col>

                <Col md={6} >
                  <img style={{ width: '60rem', marginTop: '1rem' }} src='https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/brasao-da-republica/brasaooficialcolorido.png'></img>
                </Col>


            </Row>

            <Row>
                <Col md={9} className='pe-0  bg-dark'>
                    <h1 className='bg-dark text-white mb-0 me-0'>Despesas</h1>
                    <Table variant="dark" striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Data</th>
                                <th>Descrição</th>
                                <th>Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {despesas.map((item, lista) => (
                                <tr key={lista}>
                                    <td>{item.dataDocumento}</td>
                                    <td>{item.tipoDespesa}</td>
                                    <td
                                        style={{
                                            color:
                                                item.valorDocumento >= 6000
                                                    ? 'red'
                                                    : item.valorDocumento < 2000
                                                        ? 'green'
                                                        : 'orange',
                                        }}
                                    >
                                        {item.valorDocumento}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
                <Col md={3} className="bg-dark text-white text-center ms-0">
                    <h1 className='mt-5'>Profissões</h1>

                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        {profissoes.map((item, index) => (
                            <li key={index}>{item.titulo}</li>
                        ))}
                    </ul>

                    <h1 className='mt-5'>Orgão</h1>

                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        {orgao.map((item, index) => (
                            <Link key={index} href={'/orgao/' + item.idOrgao}>
                                <li>{item.siglaOrgao}</li>
                            </Link>
                        ))}
                    </ul>
                </Col>
            </Row>



            <h1 className='mt-5 text-center'>Veja o gráfico a seguir</h1>


           
              



        </Pagina2>
    )
}

export default Detalhes

export async function getServerSideProps(context) {

    const id = context.params.id

    const dep = await apiDeputados.get('/deputados/' + id)
    const deputado = dep.data.dados

    const desp = await apiDeputados.get('/deputados/' + id + '/despesas')
    const despesas = desp.data.dados

    const prof = await apiDeputados.get('/deputados/' + id + '/profissoes')
    const profissoes = prof.data.dados

    const org = await apiDeputados.get('/deputados/' + id + '/orgaos')
    const orgao = org.data.dados

    return {
        props: { despesas, deputado, profissoes, orgao },
    }

}
