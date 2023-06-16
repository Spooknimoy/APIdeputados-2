import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Container } from 'react-bootstrap';


const Pagina = (props) => {

    return (
        <>
         
            <div className='bg-success text-white py-3 text-center mb-3'>

                  <style jsx>{`
                h1 {
                    font-family: Georgia;
                }
            `}</style>
                <h1>{props.titulo}</h1>
            </div>
            
            <Container className='mb-5'>
                {props.children}
            </Container>

        </>
    )
}

export default Pagina