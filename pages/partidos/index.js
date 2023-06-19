import Pagina2 from '@/Component/Pagina2';
import apiDeputados from '@/services/apiDeputados';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const Index = () => {
  const [partidos, setPartidos] = useState([]);

  useEffect(() => {
    const fetchPartidos = async () => {
      const response1 = await apiDeputados.get('/partidos/?pagina=1');
      const response2 = await apiDeputados.get('/partidos/?pagina=2');

      const partidos1 = response1.data.dados;
      const partidos2 = response2.data.dados;

      const combinedPartidos = [...partidos1, ...partidos2, ];

      setPartidos(combinedPartidos);
    };

    fetchPartidos();
  }, []);

  return (
    <Pagina2 titulo="Partidos">
      <Row md={1}>
        {partidos.map((item) => (
          <Col key={item.id}>
            <Card className="mb-4">
              <Link href={`/partidos/${item.id}`}>
                <Card.Img
                  variant="top"
                  src="https://media.gettyimages.com/id/641295104/pt/foto/dueling-boxing-gloves.jpg?s=612x612&w=0&k=20&c=81YUhxfYQNlzzqzvJMuFf1hrLGRTWhaY74bqXUzNkZ0="                   
                />
                <Card.Body>
                  <Card.Title>{item.nome}</Card.Title>
                  <Card.Text>Partido: {item.sigla}</Card.Text>
                  <Card.Text>UF Partido: {item.siglaUf}</Card.Text>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
      <Link href="/deputados/">
        <Button>Voltar</Button>
      </Link>
    </Pagina2>
  );
};

export default Index;
