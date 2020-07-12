import {
    baseColor,
    whiteColor,
    } from '../base';
    
export default (theme) => ({
    root:{
        padding:"9vh 3%",
        height: "auto",
        textAlign:"center",
    },
        
    profilePicture:{
        borderRadius:"50%",
        border:`2px solid ${baseColor[0]}`,
        height: "90px",
        background: whiteColor,
        },
    details:{
        textAlign:"left",
    },
    socialMedias:{
            padding:"10px 20%",
            color: '#000',
            textDecoration: "none",
            display: "flex",
            justifyContent: "space-evenly",
        },
    link:{
         marginTop:" 1.3rem",
         color: baseColor[1],
         textDecoration: "none",
         
         "&:hover":{
            color: baseColor[0],
         },
             },
    socialMediaIcon:{
        width: "50px",
        height: "30px",
        },
    });
    