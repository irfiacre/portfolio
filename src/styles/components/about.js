import {
    baseColor,
    lightBlueColor,
    whiteColor,
  } from '../base';
  
  export default (theme) => ({  
introduction:{
      padding:"5vh 5%",
      background: baseColor[0],
      color:whiteColor,
      display:"grid",
      gridTemplateColumns:"repeat(2,1fr)",
      
      [theme.breakpoints.down("sm")]: {
        display:"grid",
        gridTemplateColumns:"1fr",
      },
    },
    
myPicture:{
        width: "50%",
        
        [theme.breakpoints.down("sm")]: {
            textAlign:"center",
            width: "100%",
          },
          
    },
    
profilePicture:{
    borderRadius:"50%",
    border:"2px solid #fff",
    height: "200px",
    background:whiteColor,
    marginLeft:"40%",
    
    [theme.breakpoints.down("md")]: {
      marginLeft:"20%",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft:"0",
    },
    },
    [theme.breakpoints.down("sm")]: {
      title:{
        textAlign:"center"
      },
      name:{
        fontSize:"22px",
        fontWeight:"500",
        textAlign:"center"
      }
    },
    
mySummary:{
    marginLeft:"-35%",
    marginTop:"3vh",
    
    [theme.breakpoints.down("md")]: {
      marginLeft:"-20%",
    },
    
    [theme.breakpoints.down("sm")]: {
        margin:"0",
      },
    },
    
  hireMe:{
        padding:"10px 20px",
        color:whiteColor,
        background:baseColor[1],
        borderRadius:"10px",
        width:"60px",
        
        "&:hover":{
          color:baseColor[1],
          background:whiteColor,
        },
        [theme.breakpoints.down("sm")]: {
          margin:"0px 43%",
        },
        [theme.breakpoints.down("xs")]: {
          width:"auto",
          textAlign:"center",
          margin:0,
        },
    },
    
links:{
    textDecoration:"none",
    }
  });
  
  