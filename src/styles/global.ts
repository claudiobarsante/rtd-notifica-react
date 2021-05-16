import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*,*::after,*::before {
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html{
    font-size:62.5%;
    min-height:100%;
}

:root {
  --error:#c53030;
  --lightBlue:#007aff;
  --success: #73bd73;
  --purple:#788EEC;
  --white:#F4EDE8;
  --grey:#f3f2f2;
  --grey-hard:#666360;
  --grey-dark: #42403e;
  --background-modal:#f0f2f5;
  --primary:#0099ff;
  --sm:768px;
  --black-20: "#333333"; //black 20%
  --black-35: "#595959";
  --black-40: "#666666";
  --black-80: "#ccc";
 
}


body{
   background:#f2f5f7;
    -webkit-font-smoothing: antialiased;
}

body, input, button{
  font-family: 'Poppins', serif;
  font-size:1.6rem;

}

h1,h2,h3,h4,h5,h6, strong{
  font-weight:500;
}


button {
  cursor:pointer;
}  



`;
