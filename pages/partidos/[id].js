import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import Link from 'next/link';
import Pagina2 from '@/Component/Pagina2';
import apiDeputados from '@/services/apiDeputados';

const DetalhesPartido = ({ partido, lideres}) => {
 

  return (
    <Pagina2 titulo={partido.nome}>
      <Row>
        <Col md={3}>
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
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Pagina2>
  );
};

export default DetalhesPartido;

export async function getServerSideProps(context) {
  const { id } = context.params;

    const response = await apiDeputados.get(`/partidos/${id}`);
    const partido = response.data.dados; 

    const lidresponse = await apiDeputados.get(`/partidos/${id}/lideres`);
    const lideres = lidresponse.data.dados; 

    return {
      props: { partido, lideres },
    }
    

}
