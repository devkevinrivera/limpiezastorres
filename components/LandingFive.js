import React from 'react';
import { Container, Grid, Header, Segment, Form, Input, Image } from 'semantic-ui-react';

const LandingFive = () => {
  return (
    <Segment className='padding-section' vertical>
      <Container id="nosotros">
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
                    Torres Servicios de Limpieza
                </Header>
                <p className='title-description'>
                    Nuestra experiencia y nuestra sólida capacidad tecnológica nos ha posicionado como líderes en el sector de las empresas de limpieza.
                    En Torres Servicios de Limpieza, nos mantenemos a la vanguardia de las técnicas de limpieza y adoptamos constantemente nuevas tecnologías para garantizar que nuestros clientes obtengan la máxima calidad en cada servicio. Nos esforzamos por superar sus expectativas y brindarles un entorno limpio y saludable. <br/>
                    Estamos comprometidos con la innovación y la mejora continua para ofrecerles la mayor calidad posible en cada proyecto. Confíe en Torres Servicios de Limpieza para mantener sus espacios impecables y cumplir con sus requisitos de limpieza de manera eficiente y profesional.
                </p>
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <Image src="/busines.png" alt="Imagen de la empresa de servicios de limpieza" fluid />
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>
  );
};

export default LandingFive;
