import styled from 'styled-components';

export const ContainerCalc = styled.div`
max-width:400px;
width: 100%;
border:5px solid #c3c3c3;

`;


export const Button = styled.button`
width: 100px;
height: 50px;
background-color:  ${props => props.color ? "#b5c5d5" : "#e0e1e6 "};
border: 1px solid #b3b3b3;
outline: #e0e1e6;
color:#000;
font-size:25px;
@media (max-width: 800px) {
    width: 50%;
  }
`;
export const Input = styled.input`
max-width: 400px;
width: 100%;
height: 40px;
font-size: 25px;
border: 0;
`;