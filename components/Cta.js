import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const ContactCTA = () => {
  return (
    <Button onClick={() => {
      window.location.href = "https://wa.me/34633140422"
    }} className='cta-button' size="large">
      <Icon name="whatsapp" />
      Contactar
    </Button>
  );
};

export default ContactCTA;
