  
  export default (theme) => ({
    root:{
        padding:"10px 3%",
        height: "350px",
    },
    title:{
      textAlign:"center",
      marginTop:"20px",
      fontWeight: "bold",
      
      [theme.breakpoints.down("sm")]: {
        marginTop:"40px",
      },
    }
      
  });
  