  import {
    baseColor,
    lightBlueColor,
    whiteColor,
  } from '../../base';
  
  export default (theme) => ({
    root: {
        background:lightBlueColor,
        height: "450px",
      },
    media: {
        height: 240,
        overlay:"100",
      },
    links:{
        textDecoration:"none",
        },
    buttons:{
        display:"flex",
        justifyContent:"space-around",
    },   
    viewBtn:{
        width: "95px",
        height: "29px",
        background: baseColor[0],
        borderRadius: "10px",
        color:whiteColor,
        
        "&:hover":{
            color:baseColor[0],
            border:`1px solid ${baseColor[0]}`,
            background:whiteColor,
          }
        },
        
    codeBtn:{
        width: "95px",
        height: "29px",
        background: whiteColor,
        borderRadius: "10px",
        color: baseColor[0],
        border:`1px solid ${baseColor[0]}`,
        "&:hover":{
            background: baseColor[1],
            border:`1px solid ${baseColor[1]}`,
            color:whiteColor,
          }
        },
  });
  
  