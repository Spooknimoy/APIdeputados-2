import Pagina2 from '@/Component/Pagina2'
import apiDeputados from '@/services/apiDeputados'
import Link from 'next/link'
import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'



const index = ({ deputados }) => {

  return (
    <Pagina2 titulo='Deputados'>
      <Link href={'/deputados/'}>
        <Button>Home</Button>
      </Link>
      <Row md={6}>
        {deputados.map(item => (
          <Col>
            <Card className='mb-4'>
              <Link href={'/deputados/' + item.id}>
                <Card.Img variant="top" key={item.id} src={item.urlFoto || '/component/imagens/404.png'} />
                <Card.Body>
                  <Card.Title>{item.nome}</Card.Title>
                  <Card.Text>Partido: {item.siglaPartido}</Card.Text>
                  <Card.Text>UF Partido: {item.siglaUf}</Card.Text>
                </Card.Body>
              </Link>
            </Card>

          </Col>
        ))}
      </Row>
    </Pagina2>

  )
}

export default index

export async function getServerSideProps(context) {

  const imagens = await apiDeputados.get('/deputados')
  const deputados = imagens.data.dados

  return {
    props: { deputados },
  }
}