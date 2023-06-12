import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import Link from 'next/link';
import Pagina2 from '@/Component/Pagina2';
import apiDeputados from '@/services/apiDeputados';

const DetalhesPartido = ({ partido }) => {
  const partido {
    nome,
    sigla,
    urlLogo,
    status: {
      lider: {
        nome: nomeLider,
        siglaPartido: siglaPartidoLider,
        uf: ufLider,
        urlFoto: urlFotoLider,
      },
    },
  }

  return (
    <Pagina2 titulo={nome}>
      <Row>
        <Col md={3}>
          <Link href={`/partidos/${sigla}`}>
            <Button variant="danger">Voltar</Button>
          </Link>
          <Card className="mb-4">
            <Card.Img variant="top" src={urlLogo} />
            <Card.Body>
              <Card.Title>{nome}</Card.Title>
              <Card.Text>Partido: {sigla}</Card.Text>
              <Card.Text>
                Líder do Partido: {nomeLider} ({siglaPartidoLider} - {ufLider})
              </Card.Text>
              <Card.Img src={urlFotoLider} />
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

  try {
    const response = await apiDeputados.get(`/partidos/${id}`);
    const partido = response.data; // Ajuste aqui de acordo com a estrutura dos dados retornados

    return {
      props: { partido },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
}
