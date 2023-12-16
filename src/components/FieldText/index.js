import { ContainerStylized, TextFieldsStylized } from "./styles";

const FieldText = ({ placeholder, value, callbackTyping }) => {
  

  const whenTyping = (evento) => {
    callbackTyping(evento.target.value);

  }

  return (<ContainerStylized>

    <TextFieldsStylized placeholder={placeholder} value={value} onChange={whenTyping} />

  </ContainerStylized>)
}

export default FieldText;