import React from 'react';

const Rodape = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log('E-mail cadastrado:', email);
  };

  return (
    <>
    
    </>
  );
};

export default Rodape