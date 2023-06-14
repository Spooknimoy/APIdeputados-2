import React from 'react'
import { Button, Card, Col, Row, Table } from 'react-bootstrap'
import Link from 'next/link'
import Pagina2 from '@/Component/Pagina2'
import apiDeputados from '@/services/apiDeputados'
import { Chart as chartjs, LineElement, CategoryScale, LinearScale, PointElement, ArcElement, RadialLinearScale, BarElement } from 'chart.js/auto'
import { Line } from 'react-chartjs-2'



chartjs.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    ArcElement,
    RadialLinearScale,
    BarElement
);


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

            <Row>
                <Col md={3}>
                    <Link href='/deputados/deputs'>
                        <Button variant='danger'>Voltar</Button>
                    </Link>
                    <Card className='mb-4'>
                        <Card.Img variant="top" key={deputado.id} src={deputado.ultimoStatus.urlFoto} />
                        <Card.Body>
                            <Card.Title>{deputado.ultimoStatus.nome}</Card.Title>
                            <Card.Text>Partido: {deputado.ultimoStatus.siglaPartido}</Card.Text>
                            <Card.Text>UF Partido: {deputado.ultimoStatus.siglaUf}</Card.Text>
                            <Card.Text>@: {deputado.ultimoStatus.email}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={7}>
                    <h1>Despesas</h1>
                    <Table striped bordered hover size="sm">
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
                                            color: item.valorDocumento >= 6000 ? 'red' : item.valorDocumento < 2000 ? 'green' : 'orange'
                                        }}
                                    >
                                        {item.valorDocumento}
                                    </td>
                                </tr>
                            ))}
                        </tbody>



                    </Table>
                </Col>
                <Col md={1} >
                    <h1>Profissões</h1>
                    <ul>
                        {profissoes.map(item => (
                            <li>{item.titulo}</li>
                        ))}
                    </ul>


                    <h1>Orgão</h1>
                    <ul>
                        {orgao.map(item => (
                            <Link href={'/orgao/' + item.idOrgao}>
                                <li>{item.siglaOrgao}</li>
                            </Link>

                        ))}
                    </ul>

                </Col>
                <Col style={{ width: '500px', height: '500px', marginLeft: '20px' }}>
                    <Line data={data} options={option}></Line>

                </Col>

            </Row>

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