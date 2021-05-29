import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
  --primary:#0099ff;
  --success: #73bd73;
  --error:#c53030;
  --accent:#788EEC;
  --background-modal:#f0f2f5;
  --black-20: "#333333"; //black 20%
  --black-35: "#595959";
  --black-40: "#666666";
  --black-80: "#ccc"; 
  --grey-dark: #42403e;
  --grey-hard:#666360;
  --grey:#f3f2f2;
  --light-blue:#007aff;
  --sm:768px;
  --white:#F4EDE8;
}

*,*::after,*::before {
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html{
    font-size:62.5%;
    min-height:100%;    
}



body{
   background:#f2f5f7;
    -webkit-font-smoothing: antialiased;
}

body, input, button{
  font-family: 'Inter',serif;
  font-size:1.6rem;
}

h1,h2,h3,h4,h5,h6, strong{
  font-weight:500;
}


button {
  cursor:pointer;
}  



`;
