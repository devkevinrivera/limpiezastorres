import React from 'react';
import { List } from 'semantic-ui-react';

const ListadoServicios = () => {
  return (
    <List vertical>
      <List.Item>
        <List.Content>
          <List.Header>Servicio de limpieza de comunidades</List.Header>
          <List.Description>
            Mantenemos las áreas comunes de las comunidades residenciales limpias y ordenadas.
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <List.Header>Limpieza de oficinas</List.Header>
          <List.Description>
            Ofrecemos servicios de limpieza profesionales para mantener tus espacios de trabajo impecables.
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <List.Header>Limpieza de locales comerciales</List.Header>
          <List.Description>
            Mantenemos los locales comerciales limpios y atractivos para tus clientes.
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <List.Header>Limpieza de garajes</List.Header>
          <List.Description>
            Brindamos servicios de limpieza especializados para mantener los garajes limpios y seguros.
          </List.Description>
        </List.Content>
      </List.Item>
    </List>
  );
};

export default ListadoServicios;
