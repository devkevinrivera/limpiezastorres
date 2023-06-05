import React from 'react';
import { Container, Grid, Header, Segment, Form, Input, Image } from 'semantic-ui-react';

const TwoColumnSection = () => {
  return (
    <Segment className='padding-section' vertical>
      <Container className='banner-section'>
        <Grid stackable columns={2} stretched>
          <Grid.Column>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
              <div>
              <Header
                as="h1"
                className='fw-800'
                style={{
                    fontSize: '3.5vw', // Tamaño de 72px, unidad responsive
                    color: '#111827', // Color #111827
                }}
                >
                    Servicios de limpieza confiables y profesionales
                </Header>
                <p className='title-description'>
                    Ofrecemos una amplia gama de servicios de limpieza, incluyendo la limpieza de comunidades, oficinas y locales comerciales, garajes y mucho más. 
                </p>
              </div>
              <div>
                <blockquote className='flex'>
                    <Image className='quote-image' src="/quote.png" />
                    <p  className='title-quote'>"El servicio de limpieza que ofrece esta empresa es simplemente excepcional. ¡Los recomendaría sin dudarlo!"</p>
                </blockquote>
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <Image src="/landing-main.png" alt="Imagen de la empresa de servicios de limpieza" fluid />
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>
  );
};

export default TwoColumnSection;
