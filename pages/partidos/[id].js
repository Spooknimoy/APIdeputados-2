import React from 'react';
import { Button, Card, Col, Row, Table } from 'react-bootstrap';
import Link from 'next/link';
import Pagina2 from '@/Component/Pagina2';
import apiDeputados from '@/services/apiDeputados';

<<<<<<< HEAD
const DetalhesPartido = ({ partido, membros }) => {

=======
const DetalhesPartido = ({ partido, lideres}) => {
 
>>>>>>> 4740d9ff33b0337eaab8d7c7453380d366d77c5d

  return (
    <Pagina2 titulo={partido.nome}>
      <Row>
        <Col md={3}>
<<<<<<< HEAD
          <Link href={`/partidos`}>
            <Button variant="danger">Voltar</Button>
          </Link>
          <Card className="mb-4">
            <Card.Img variant="top" src={partido.urlLogo} />
            <Card.Body>
              <Card.Title>{partido.nome}</Card.Title>
              <Card.Text>Criado : {partido.status.data}</Card.Text>
              <Card.Text>Partido: {partido.sigla}</Card.Text>
              <Card.Text>UF: {partido.status.lider.uf}</Card.Text>
              <Card.Text>Membros: {partido.status.totalMembros}</Card.Text>
              <Card.Text>Situação: {partido.status.situacao}</Card.Text>
=======
          <Link href={`/deputados`}>
            <Button variant="danger">Voltar</Button>
          </Link>
          <Card className="mb-4">
            <Card.Img variant="top" src={partido.urlFacebook} />
            <Card.Body>
              <Card.Title>{partido.nome}</Card.Title>
              <Card.Text>Partido: {partido.sigla}</Card.Text>
              <Card.Text>
                Líder do Partido: {lideres.nomeLider} 
              </Card.Text>
              <Card.Img src={lideres.urlFotoLider} />
>>>>>>> 4740d9ff33b0337eaab8d7c7453380d366d77c5d
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
    </Pagina2>
  );
};

export default DetalhesPartido;

export async function getServerSideProps(context) {
  const { id } = context.params;

<<<<<<< HEAD
  const response = await apiDeputados.get(`/partidos/${id}`);
  const partido = response.data.dados;

  const lidresponse = await apiDeputados.get(`/partidos/${id}/membros`);
  const membros = lidresponse.data.dados;

  return {
    props: { partido, membros },
  }


}
=======
    const response = await apiDeputados.get(`/partidos/${id}`);
    const partido = response.data.dados; 

    const lidresponse = await apiDeputados.get(`/partidos/${id}/lideres`);
    const lideres = lidresponse.data.dados; 

    return {
      props: { partido, lideres },
    }
    

}
>>>>>>> 4740d9ff33b0337eaab8d7c7453380d366d77c5d
