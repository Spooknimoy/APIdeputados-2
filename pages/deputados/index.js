import Pagina from '@/Component/Pagina'
import apiDeputados from '@/services/apiDeputados'
import { Autocomplete, Button, TextField } from '@mui/material'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import SendIcon from '@mui/icons-material/Send';



const index = () => {
  const subli = {
    textDecoration: 'none',
  }


  const barra = {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '20rem'
  }

  const [deputados, setDeputados] = useState([])

  useEffect(() => {

    apiDeputados.get('/deputados').then(resultado => {
      setDeputados(resultado.data.dados)
    })
  }, [])


  return (
    <>
      <Pagina />
      <Container>

        <Nav variant="tabs" defaultActiveKey="/home" className='mt-4'>
          <Nav.Item>
            <Nav.Link href="/home">API RESTful</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Arquivos</Nav.Link>
          </Nav.Item>

        </Nav>
      </Container>

      <Container>
        <p className='mt-3'>
          <strong>Versão: 0.4.80 - 05/10/2023 04:52 PM </strong>- confira o que mudou na{' '}
          <Link href='https://dadosabertos.camara.leg.br/news/noticias.html' style={subli}>
            página de Notícias
          </Link>
        </p>

        <p>
          Bem vindo à nova versão do serviço <strong>Dados Abertos</strong> da Câmara dos Deputados!
        </p>
        <p>
          Esta versão pode entregar dados puros em formatos JSON e XML, e tenta se aderir ao máximo à
          arquitetura REST
        </p>
        <p>
          Nesta página você pode conhecer e experimentar as URLs de acesso aos dados, os parâmetros de
          query string que podem ser aplicados para filtrar e selecionar resultados, e as estruturas de
          dados que são retornadas.
        </p>
        <p>Além do método HTTP GET, você também pode usar o método HEAD com qualquer dos serviços.</p>
        <p>
          Por padrão, todos os serviços de listagens retornam 15 itens, e o limite por requisição é de
          100 itens.
        </p>
        <p>
          <strong>ATENÇÃO: </strong>Esta versão é ainda incompleta, sujeita a mudanças e não substitui a{' '}
          <Link href='https://www2.camara.leg.br/transparencia/dados-abertos/dados-abertos-legislativo' style={subli} >
            versão original do <strong>Dados Abertos</strong>
          </Link>
          . Caso você encontre problemas ou queira dar sugestões, por favor entre em{' '}
          <Link style={subli} href='https://dadosabertos.camara.leg.br/contact/contact.html'>contato.</Link>
        </p>

        <Autocomplete
  style={barra}
  id="Deputados"
  freeSolo
  options={deputados.map((option) => option.nome)}
  renderInput={(params) => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <TextField {...params} label="Deputados" sx={{ marginRight: '10px' }} />
      <Button disabled={false} variant="elevated" endIcon={<SendIcon />} sx={{ marginLeft: '-10px' }}  size='large'>
        Enviar
      </Button>
    </div>
  )}
  sx={{ width: 500 }}
/>
      </Container>







    </>
  )
}

export default index