import { Button } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container } from 'react-bootstrap';

const Pagina = (props) => {
  return (
    <>
      <div className='bg-success text-white py-3 text-center mb-3'>
        <div style={{ display: 'flex', marginTop: '2px' }}>
          <Button style={{marginLeft: '3rem', padding: '0px 30px',  }}  size="small" color='success' variant="contained">Voltar</Button>

          <style jsx>{`
            h1 {
              font-family: Georgia;
            }
          `}</style>
          <h1 style={{ marginLeft: '35%'}}>{props.titulo}</h1>
        </div>
      </div>

      <Container className='mb-5'>
        {props.children}
      </Container>
    </>
  )
}

export default Pagina;
