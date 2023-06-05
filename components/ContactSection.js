import React, { useState } from 'react';
import { Container, Segment, Header, Form, Button, Icon, Grid, Input } from 'semantic-ui-react';

const ContactSection = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes implementar la lógica para enviar el número de teléfono y manejar la solicitud de llamada
    console.log('Número de teléfono enviado:', phoneNumber);
    setPhoneNumber(''); // Restablece el estado del número de teléfono después de enviarlo
  };

  const handleInputChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  return (
      <Container id="contacto" className='container-contact'>
        <Grid columns={16}>
            <Grid.Row>
                <Grid.Column computer={16} textAlign='center'>
                    <Icon name="phone" size='huge' color='green'/>
                    <Header style={{ fontSize: '48px', textAlign: 'center'}} as="h4"  className='white'>
                        Obtén una cotización gratuita hoy.
                    </Header>
                    <div>
                        <p className='font-number'>633 14 04 22</p>
                    </div> 
                </Grid.Column>
            </Grid.Row>
        </Grid>
      </Container>
  );
};

export default ContactSection;