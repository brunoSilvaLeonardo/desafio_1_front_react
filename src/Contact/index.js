

import { apiConfig } from "../api/apiConfig.js";
import Button from "../components/Button";
import FieldText from "../components/FieldText";
import SpecialityList from "../components/SpecialtyList";
import ContactStyled from "./styles";
import { useState } from 'react';

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [area, setArea] = useState([]);


  const salvar = (event) => {
    event.preventDefault();

    const contact = {
      name: name,
      email: email,
      message: message,
      interest: area
    }
    
    apiConfig.createContact(contact);

  }

    
  function ChooseAreaInterest(event){
    setArea(event);

  }

  return (
  

      <ContactStyled>
        <SpecialityList callbackButton={ChooseAreaInterest} />
        <FieldText placeholder="Nome" value={name} callbackTyping={valor => setName(valor)} />
        <FieldText placeholder="E-mail" value={email} callbackTyping={valor => setEmail(valor)} />
        <FieldText placeholder="Mensagem" value={message} callbackTyping={valor => setMessage(valor)} />

        <Button icon="./img/msg-send.svg" selected={false} clickButton={salvar}> Send Message</Button>
      </ContactStyled>


  )
}


export default Contact;