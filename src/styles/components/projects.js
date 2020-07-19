import {
    baseColor,
    lightBlueColor,
    whiteColor,
  } from '../base';
  
  export default (theme) => ({  
    root:{
        padding:"5vh 10%",
        [theme.breakpoints.down("sm")]: {
          padding:"5vh 25%",
        },
        [theme.breakpoints.down("xs")]: {
          padding:"5vh 10%",
        },
      },
      
    projects:{   
        marginTop:"5vh",
        display:"grid",
        gridGap:"5%",
        gridTemplateColumns:"repeat(3,1fr)",
        
        [theme.breakpoints.down("sm")]: {
            display:"grid",
            gridGap:"5vh",
            gridTemplateColumns:"1fr",
          },
      },
    title:{
        textAlign: "center",
        paddingBottom:"10px",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "24px",
        lineHeight: "21px",
    },
  });
  
  