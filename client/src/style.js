import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 4em;
  background: beige;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: -webkit-fill-available;
`;

export const MainBox = styled.div`
  border: solid 1px gray;
  padding: 4vw;
  display: grid;
  grid-template-rows: 5% 85% 10%;
  grid-template-columns: 25% 75%;
  min-height: -webkit-fill-available;
  max-height: 750px;
  background-color: darkcyan;
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ChatBox = styled.div`
  border: solid 1px black;
  grid-area: 2/ 2;    
  overflow: auto;
  padding: 3vw;
  display: flex;
  flex-direction: column;
  min-height: -webkit-fill-available;
  background-color: papayawhip;
  box-shadow: 4px 0 20px 1px black
`;

export const NavBar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 1;
  width: 100%;
  background-color: navy;
  padding: 5px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: aqua;
  padding: 5px;
  margin: 50px;
  border: solid 1px;
  border-radius: 5px;
  box-shadow: 10px 10px 5px black;
  width: min-content;
`;

export const FormStyle = styled.form`
  display: flex;
  flex-direction: row;
  grid-area: 3 / 2;
  border: solid 1px black;
  border-radius: 0 0 20px 0;
  box-shadow: 4px 10px 20px 1px black
  z-index: 2;
  @media only screen and (max-width: 768px) {
    border-radius: 0 0 20px 20px;
  }
`;

export const Input = styled.input`
 padding: 5px;
 border: solid 1px black;
 border-radius: 3px;
 margin: 6px;
`;

export const Label = styled.label`
  margin: 6px;
  font-size: 14px;
`;

export const Warning = styled.p`
  color: red;
`;

export const Button = styled.button`
  margin: 6px 6px 15px 6px;
  padding: 5px;
  border: solid 1px black;
  border-radius: 3px;
  font-size: 14px;
  background-color: gold;
  font-size: large;
  width: -webkit-fill-available;
`;

export const FormInput = styled.input`
 padding: 5px;
 width: 90%;
 border: solid 1px black;
 border-radius: 6px;
 margin: 6px;
`;

export const ChatButton = styled.button`
 padding: 5px;
 border: solid 1px black;
 border-radius: 6px;
 margin: 6px;
`;

export const UsersContainer = styled.div`
  grid-area: 2 / 1 / span 3;    
  overflow: auto;
  background: snow;
  display: flex;
  flex-direction: column;
  min-height: -webkit-fill-available;
  border: solid 1px black;
  border-radius: 0 0 0 20px;
  box-shadow: -5px 4px 20px 1px black;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const UserC = styled.div`
padding: 10px;
background-color: goldenrod;
width: -webkit-fill-available;
align-self: center;
text-align: center;
`;

export const UsersHeaderDiv = styled.div`
grid-area: 1 / 1;
background-color: gold;
border: solid 1px black;
border-radius: 20px 0 0 0;
display: flex;
justify-content: center;
align-items: center;
z-index: 2;
@media only screen and (max-width: 768px) {
  display: none;
}
`;

export const WelcomeHeaderDiv = styled.div`
grid-area: 1 / 2;
background-color: gold;
border: solid 1px black;
border-radius: 0 20px 0 0;
display: flex;
justify-content: center;
align-items: center;
z-index: 2;
@media only screen and (max-width: 768px) {
  border-radius: 20px 20px 0 0;
}
`;

