import React from 'react';
import { Container, Grid, Header, Segment, Form, Input, Image } from 'semantic-ui-react';
import ContactCTA from './Cta';

const LandingTwo = () => {
  return (
    <Segment className='padding-section' vertical>
      <Container>
        <Grid stackable columns={2} stretched>
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
                    Servicios de Limpieza de Excelencia: Nuestra Garantía de Calidad
                </Header>
                <p className='title-description'>
                    En TORRES servicios de limpieza, nos esforzamos por superar las expectativas de nuestros clientes, proporcionando resultados impecables y un servicio personalizado. Estamos comprometidos en brindar la mejor relación calidad-precio, 
                    cumpliendo con los plazos acordados y garantizando la plena satisfacción de nuestros clientes en cada proyecto.
                </p>
                <ContactCTA />
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <Image src="/limpiezacasas.png" alt="Imagen de la empresa de servicios de limpieza" fluid />
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>
  );
};

export default LandingTwo;
