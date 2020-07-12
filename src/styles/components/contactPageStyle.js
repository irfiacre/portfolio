import {
  lightBlueColor,
  } from '../base';
  
  export default (theme) => ({
    root:{
      background: lightBlueColor,
    },
    contactDetails:{
      padding:"10vh 5%",
      display:"grid",
      gridTemplateColumns:"repeat(2,1fr)",
      
      [theme.breakpoints.down("sm")]: {
        display:"grid",
        gridTemplateColumns:"1fr",
      },
    },
  });
  
  