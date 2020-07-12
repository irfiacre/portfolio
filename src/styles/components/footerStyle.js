import {
    baseColor,
    whiteColor,
  } from '../base';
  
  export default (theme) => ({
    root: {
        padding:"5vh 5%",
        background: baseColor[0],
        color: whiteColor,
        height: "334px",
        textAlign:"center",
        
        [theme.breakpoints.down("sm")]: {
            height: "400px",
          },
      },
    
    profilePicture:{
        borderRadius:"50%",
        border:"2px solid #fff",
        height: "90px",
        background:whiteColor,
    },
    
    footerDetails:{
        marginTop:"3vh",
       
    },
    [theme.breakpoints.down("sm")]: {
        title:{
            fontSize:"22px",
            fontWeight:"500"
        },
        details:{
            textAlign:"left",
            fontSize:"16px",
        },
    },
    footerAction:{
        textAlign:"center",
        padding:"0px 43%",
        
        [theme.breakpoints.down("xs")]: {
            padding:"0px",
          },
    },
    email:{
        color:"#000",
        textDecoration:"none",
    },
    links:{
        textDecoration:"none",
        
        },
    footerBtn:{
        paddingTop:"10px",
        paddingBottom:"10px",
        color:baseColor[0],
        background:whiteColor,
        borderRadius:"10px",
        width:"120px",
        "&:hover":{
          color:whiteColor,
          background:baseColor[0],
          border:`1px solid ${whiteColor}`,
        },
        [theme.breakpoints.down("xs")]: {
            width:"auto",
          },
    },
    
  
  });
  
  