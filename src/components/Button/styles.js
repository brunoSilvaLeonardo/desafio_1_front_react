import styled from "styled-components";

const SubmitButton = styled.button`

font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;

  display: flex;
  flex-direction: row;
  padding: 24px 64px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border: 0px;
  border-radius: 16px;
  background: var(--Black, #000);
  font-size: 20px;
  width: 100%;
  max-width: 572px;
  height: 78px;
  margin: 50px;
  color: #fff;
  flex-wrap: wrap;

  background-color: ${(props) => (props.selected ? "blue" : "#000")};

  img {
    width: 24px;
    height: 14px;
  }
`


export default SubmitButton;