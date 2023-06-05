import React from 'react';
import { Container, Grid, Menu, Image, Icon } from 'semantic-ui-react';

const HeaderOwn = () => {
  return (
    <Container className='header-line '>
          <Grid columns={16}>
            <Grid.Row>
              <Grid.Column computer={16} textAlign='right'>
                <span className='contact-opt mg-2'>
                  <Icon color='green' name="phone"/> 633 14 04 22
                </span>
                <span className='contact-opt'>
                  <Icon color='yellow' name='mail' /> torres.serviciosdelimpieza@gmail.com
                </span>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column computer={6} textAlign='left' style={{ paddingLeft: '3rem'}}>
                <Image style={{ width: '125px'}} src="/logow.svg" />
              </Grid.Column>
              <Grid.Column style={{ paddingLeft: '2rem'}} computer={10} textAlign='right' verticalAlign='middle'>
                    <a className='item-menu' as="a">Inicio</a>
                    <a href='#servicios' className='item-menu' as="a">Servicios</a>
                    <a href='#nosotros' className='item-menu' as="a">Nosotros</a>
                    <a href='#2contacto' className='item-menu' as="a">Contacto</a>
              </Grid.Column>
            </Grid.Row>
          </Grid>
    </Container>
  );
};

export default HeaderOwn;
