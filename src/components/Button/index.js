import SubmitButton from "./styles";

const Button = ({ icon, children, selected, clickButton }) => {

  const onClick = (event) => {
    clickButton(event);

  }

  return (<SubmitButton selected={selected} onClick={onClick}>
    {icon && (<img src={icon} alt="plane" />)}
    {children}
  </SubmitButton>);
}

export default Button;