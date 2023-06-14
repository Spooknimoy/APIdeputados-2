import React from 'react';
import { Button, Card, Col, Row, Table } from 'react-bootstrap';
import Link from 'next/link';
import Pagina2 from '@/Component/Pagina2';
import apiDeputados from '@/services/apiDeputados';

const DetalhesOrgao = ({ orgao, membros, eventos, votacao }) => {


  return (
    <Pagina2 titulo={orgao.sigla}>
      <Row>
        <Col md={3}>
          <Link href={`/deputados/deputs`}>
            <Button variant="danger">Voltar</Button>
          </Link>
          <Card className="mb-4">
            <Card.Img variant="top" />
            <Card.Body>
              <Card.Title>{orgao.nome}</Card.Title>
              <Card.Text>Data : {orgao.dataInstalacao}</Card.Text>
              <Card.Text>Sigla: {orgao.sigla}</Card.Text>
              <Card.Text>tipo de orgao: {orgao.tipoOrgao}</Card.Text>
              <Card.Text>Apelido: {orgao.apelido}</Card.Text>
              <Card.Text>Nome da Publicação: {orgao.nomePublica}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={7}>
          <h1>Membros</h1>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Sigla do Partido</th>
                <th>Nome</th>
                <th>UF</th>
              </tr>
            </thead>
            <tbody>
              {membros.map((item, index) => (
                <tr key={index}>
                  <td>{item.siglaPartido}</td>
                  <td>{item.nome}</td>
                  <td>{item.siglaUf}</td>
                </tr>
              ))}
            </tbody>


          </Table>
        </Col>
        <Col >
          <Card className="mb-" style={{marginTop: '35px'}}>
            <Card.Text>
              <h1>Locais</h1>
            {eventos.map((item) => (
              <p>locais: {item.localCamara.nome}</p>
            ))}
            </Card.Text>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </Pagina2>
  );
};

export default DetalhesOrgao;

export async function getServerSideProps(context) {

    const id = context.params.id
  
    const org = await apiDeputados.get('/orgaos/' + id)
    const orgao = org.data.dados

    const or = await apiDeputados.get('/orgaos/' + id + '/membros' )
    const membros = or.data.dados

    const o = await apiDeputados.get('/orgaos/' + id + '/eventos' )
    const eventos = o.data.dados

    const vo = await apiDeputados.get('/orgaos/' + id + '/votacoes' )
    const votacao = vo.data.dados
    
    
    return {
      props: { orgao, membros, eventos, votacao },
    }
  }