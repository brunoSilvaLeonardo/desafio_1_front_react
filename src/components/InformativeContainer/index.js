import Banner from "../Banner";
import InformativeContainerStyled from "./styles";

const InformativeContainer = () => {

  return (<InformativeContainerStyled>

    <Banner />
   
      <p>
        Let’s discuss on something <span>COOL</span> together
      </p>
   
    <section>
      <ul>
        <li >
          <div>
            <img src="./img/EnvelopeFill.svg" alt="" />
          </div>
          <h2>challange@compass.com.br</h2>
        </li>
        <li>
          <div>
            <img src="./img/TelephoneFill.svg" alt="" />
          </div>
          <h2>+12 3456 3789</h2>
        </li>
        <li>
          <div>
            <img src="./img/Vector.svg" alt="" />
          </div>
          <h2>123 Street 456 House</h2>
        </li>
      </ul>
    </section>




  </InformativeContainerStyled>);
}

export default InformativeContainer;

