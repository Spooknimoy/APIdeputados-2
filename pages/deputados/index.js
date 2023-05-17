import Pagina from '@/Component/Pagina'
import Link from 'next/link'
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

import logo from '../../imagens/m.png'

const index = () => {
  return (
    <>
      <Pagina />


      <Navbar className='mt-4' bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">API RESTful</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#pricing">ARQUIVOS</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
       <Container>

      <p className='mt-1'><strong>Versão: 0.4.80 - 05/10/2023 04:52 PM </strong>- confira o que mudou na <Link href='https://dadosabertos.camara.leg.br/news/noticias.html'>página de Notícias</Link></p>

      <p>Bem vindo à nova versão do serviço <strong> Dados Abertos</strong> da Câmara dos Deputados!</p>
      <p>Esta versão pode entregar dados puros em formatos JSON e XML, e tenta se aderir ao máximo à arquitetura REST</p>
      <p>Nesta página você pode conhecer e experimentar as URLs de acesso aos dados, os parâmetros de query string que podem ser aplicados para filtrar e selecionar resultados, e as estruturas de dados que são retornadas.</p>
      <p>Além do método HTTP GET, você também pode usar o método HEAD com qualquer dos serviços.</p>
      <p>Por padrão, todos os serviços de listagens retornam 15 itens, e o limite por requisição é de 100 itens.</p>
      <p><strong>ATENÇÃO: </strong>Esta versão é ainda incompleta, sujeita a mudanças e não substitui a <Link href='https://www2.camara.leg.br/transparencia/dados-abertos/dados-abertos-legislativo'>versão original do <strong> Dados Abertos</strong></Link>. Caso você encontre problemas ou queira dar sugestões, por favor entre em <Link href='https://dadosabertos.camara.leg.br/contact/contact.html'>contato.</Link></p>

       </Container>

       

       



    </>
  )
}

export default index