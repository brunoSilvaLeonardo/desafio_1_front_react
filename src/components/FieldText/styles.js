import styled from "styled-components";


const ContainerStylized = styled.div`

    border-bottom: solid 3px;
    margin-top: 10px;
    
    
`;


const TextFieldsStylized = styled.input`

  /* display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  border-color: #000000;

  margin-left: 48px;
  margin-right: 48px;
  

  color: var(--Black, #000000);
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal; */
  
  background-color: transparent;
  border: none;
  width: 600px;
  font-size: 24px;
 
  &:focus {
    outline: none;
  }
 
  &::placeholder {
    color: #000;
  }

`

export {
  ContainerStylized,
  TextFieldsStylized
} ;