import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Contact from './Contact';
import styled from 'styled-components';
import InformativeContainer from './components/InformativeContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Principal = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    height: 834px;
    padding: 95px 107px 95px 108px;
  
  `

const PrincipalContainer = styled.div`
  display: flex;
  margin-top: 70px;
  gap: 58px;

  `
root.render(


  <React.StrictMode>


    <Principal>
      <InformativeContainer />
      <Contact />

    </Principal>



  </React.StrictMode>
);


reportWebVitals();
