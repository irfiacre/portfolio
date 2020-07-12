import {
    baseColor,
    lightBlueColor,
    whiteColor,
  } from '../base';
  
  export default (theme) => ({
    root:{
        padding:"5vh 10%",
        background: lightBlueColor,
        
        [theme.breakpoints.down("sm")]: {
            padding:"5vh 25%",
        },
        [theme.breakpoints.down("xs")]: {
            padding:"5vh 10%",
          },
    },
    
    skillsTitle:{
        textAlign: "center",
    },
    
    title:{
        paddingBottom:"10px",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "24px",
        lineHeight: "21px",
    },
    
    details:{
        fontStyle: "normal",
        fontSize: "16px",
        lineHeight: "19px",
        
        [theme.breakpoints.down("sm")]: {
           textAlign:"left",
          },
    },
    
    links:{
        textDecoration:"none",
        color: baseColor[1],
    },
    
    skills:{
        marginTop:"12vh",
        display:"grid",
        gridGap:"5%",
        gridTemplateColumns:"repeat(3,1fr)",
        
        [theme.breakpoints.down("sm")]: {
            display:"grid",
            gridGap:"5vh",
            gridTemplateColumns:"1fr",
          },
    },
    icon:{
        position:"absolute",
        padding:"20px 20px",
        width: "40px",
        height: "40px",
        background: baseColor[0],
        color: whiteColor,
        borderRadius:"50%",
        textAlign:"center",
        marginTop:"-50px",
        marginLeft:"8.5%",
        
        [theme.breakpoints.down("sm")]: {
            marginTop:"-20px",
            marginLeft:"28%",
          },
    },
  });
  
  