import React from 'react';
import { Button, Card, Col, Row, Table } from 'react-bootstrap';
import Link from 'next/link';
import Pagina3 from '@/Component/Pagina3';
import apiDeputados from '@/services/apiDeputados';


const DetalhesPartido = ({ partido, membros }) => {


  return (
    <Pagina3 titulo={partido.nome}>
      <Row>
        <Col md={3}>
          <Card className="mb-4">
            <Card.Img variant="top" src={partido.urlLogo} />
            <Card.Body>
              <Card.Title>{partido.nome}</Card.Title>
              <Card.Text>Criado : {partido.status.data}</Card.Text>
              <Card.Text>Partido: {partido.sigla}</Card.Text>
              <Card.Text>UF: {partido.status.lider.uf}</Card.Text>
              <Card.Text>Membros: {partido.status.totalMembros}</Card.Text>
              <Card.Text>Situação: {partido.status.situacao}</Card.Text>

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
              <p>Líder do Partido: {partido.status.lider.nome}</p>
            </Card.Text>
            <Card.Img variant='top' style={{ width: '110px', height: '150px', marginLeft: '15px', marginTop: '1px'  }} src={partido.status.lider.urlFoto} />
            <Card.Text></Card.Text>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </Pagina3>
  );
};

export default DetalhesPartido;

export async function getServerSideProps(context) {
  const { id } = context.params;

  const response = await apiDeputados.get(`/partidos/${id}`);
  const partido = response.data.dados;

  const lidresponse = await apiDeputados.get(`/partidos/${id}/membros`);
  const membros = lidresponse.data.dados;

  return {
    props: { partido, membros },
  }


}
