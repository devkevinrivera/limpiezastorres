import React from 'react';
import { Container, Segment, Header, Icon, Grid } from 'semantic-ui-react';

const ReviewSection = () => {
  return (
    <Segment vertical >
      <Container fluid className='padding-reviews'>
        <Grid centered>
          <Grid.Column width={10}>
            <Header as="h2" textAlign="center">
              Nuestros clientes opinan sobre nuestros servicios de limpieza
            </Header>
            <Segment>
              <Grid centered>
                <Grid.Row>
                  <Grid.Column width={3}>
                    <Icon name="quote left" size="big" color="teal" />
                  </Grid.Column>
                  <Grid.Column width={10}>
                    <p>
                      Estoy muy satisfecho con el servicio de limpieza que recibí. El personal fue puntual, profesional y
                      dejó mi hogar impecable. ¡Definitivamente los recomendaré a mis amigos y familiares!
                    </p>
                    <p>- Juan Pérez</p>
                  </Grid.Column>
                  <Grid.Column width={3}>
                    <Icon name="quote right" size="big" color="teal" />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>
  );
};

export default ReviewSection;
