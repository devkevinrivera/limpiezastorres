import React from 'react';
import { Container, Grid, Header, Segment, Form, Input, Image } from 'semantic-ui-react';
import ListadoServicios from './ListadoServicios';
import ContactCTA from './Cta';

const LandingFour = () => {
  return (
    <Segment className='padding-section' vertical>
      <Container id="servicios">
        <Grid stackable columns={2} stretched>
            <Grid.Column>
            <Image src="/officenow.png" alt="Imagen de la empresa de servicios de limpieza" fluid />
          </Grid.Column>
          <Grid.Column verticalAlign='middle'>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
              <div>
              <Header
                as="h1"
                className='fw-800'
                style={{
                    fontSize: '2rem', // Tamaño de 72px, unidad responsive
                    color: '#111827', // Color #111827
                }}
                >
                    Servicios
                </Header>
                <ListadoServicios />
                <ContactCTA />
              </div>
            </div>
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>
  );
};

export default LandingFour;
