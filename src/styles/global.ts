import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
  --color-primary:#0099ff;
  --color-success: #73bd73;
  --color-error:#c53030;
  --color-accent:#788EEC;
  --color-accent-light:#bcc7f5;
  --color-background-modal:#f0f2f5;
  --color-black-20: "#333333"; //black 20%
  --color-black-35: "#595959";
  --color-black-40: "#666666";
  --color-black-80: "#ccc"; 
  --color-grey-dark: #42403e;
  --color-grey-hard:#666360;
  --color-grey:#f3f2f2;
  --color-light-blue:#007aff;
  --sm:768px;
  --color-white:#F4EDE8;
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
