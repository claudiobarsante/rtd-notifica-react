import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*,*::after,*::before {
    margin:0;
    padding:0;
    box-sizing:content-box;
}

html{
    font-size:62.5%;
}

:root {
  --error:#c53030;
  --lightBlue:#007aff;
  --success: #73bd73;
  --purple:#788EEC;
  --white:#F4EDE8;
  --gray:#f3f2f2;
  --gray-hard:#666360;
  --background-modal:#f0f2f5;
}


body{
    -webkit-font-smoothing: antialiased;
}


  

    button {
        cursor:pointer;
    }


`;
