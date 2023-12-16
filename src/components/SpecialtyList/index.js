import Button from "../Button";

import SpecialityListStylized from "./styles";

const SpecialityList = ({callbackButton}) => {



  return (
  

  <SpecialityListStylized>

    <h1>I`m interested in..</h1>

    <div style={{display:"flex",flexDirection:"row", flexWrap: "wrap"}}>
    <Button icon={null} clickButton={event => callbackButton(event.target.innerText)}>Front-end</Button>
    <Button icon={null} clickButton={event => callbackButton(event.target.innerText)}>Back-end</Button>
    <Button icon={null} clickButton={event => callbackButton(event.target.innerText)}>Mobile</Button>
    <Button icon={null} clickButton={event => callbackButton(event.target.innerText)}>AI</Button>
    <Button icon={null} clickButton={event => callbackButton(event.target.innerText)}>Other</Button>
    </div>

  </SpecialityListStylized>
  );
}

export default SpecialityList;