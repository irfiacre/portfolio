import {
    baseColor,
    whiteColor,
  } from '../base';
  
  export default (theme) => ({
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
      
    expandOpen: {
        transform: 'rotate(180deg)',
      },
    
    header:{
        background: baseColor[1],
        display: "grid",
        gridTemplateColumns: "repeat(2,1fr)",
      },
   socialMedias:{
    marginLeft:" 16%",
    color: whiteColor,
    textDecoration: "none",
    display: "flex",
    float: "left",
   },
   links:{
        marginTop:" 1.3rem",
        color: whiteColor,
        textDecoration: "none",
        display: "flex",
        justifyContent: "space-around",
        paddingRight: "5%",
        
        [theme.breakpoints.down("sm")]: {
            display:"none",
            paddingRight: "0",
        },
      },
     link:{
        marginTop:" 1.3rem",
        color: whiteColor,
        textDecoration: "none",
        display: "flex",
        justifyContent: "space-around",
     },
     
  navLinkCollapse:{
    color: whiteColor,
    textDecoration: "none",
    fontSize: "1.8rem",
    margin: "10px 0",
  },
  navLink:{
        color: whiteColor,
        textDecoration: "none",
        fontSize: "1.8rem",
        width:"50%",
        padding: "10px 25px",
    },
    
  isActive:{
      borderBottom: `3px solid ${whiteColor}`,
      fontSize: "10px",
      [theme.breakpoints.down("sm")]: {
        borderBottom:"none",
        },
    },
    
  mobileMenu:{
      display:"none",
      
      [theme.breakpoints.down("sm")]: {
        display:"block",
        float: "right",
        padding: "10px 0px",
        paddingRight: "16%",
        },
    },
  menuIcon:{
        color: whiteColor,
    },
   socialMediaIcon:{
    color: whiteColor,
    width: "50px",
    height: "30px",
   },
   
  });
  
  