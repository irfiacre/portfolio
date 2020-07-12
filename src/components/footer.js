import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

import footerStyle from '../styles/components/footerStyle';

import profileImg from '../assets/photo.png';

const Footer =(props)=>{
    const { classes } = props;
    
return(
        <div className={classes.root}>
            <div className={classes.footerPicture}>
                <img src={profileImg} alt='my profilePic'  className={classes.profilePicture}/>
            </div>
            <div className={classes.footerDetails}>
                <Typography variant="h4" className={classes.title}>
                    Interested in hiring me for your project?
                </Typography>
                <Typography paragraph className={classes.details} >
                    Looking for an experienced full-stack developer to build your web app or ship your software product? 
                    To start an initial chat, just drop me an email at 
                     {' '}
                        <a href = "mailto: firaduk@yahoo.com" className={classes.email}>firaduk@yahoo.com</a> 
                     {' '}  
                    or use the form on the contact page.
                </Typography>
                
                <div className={classes.footerAction}>
                    <Link to='/contact' className={classes.links}>
                        <Typography paragraph className={classes.footerBtn} >
                            Let's Talk
                        </Typography>
                    </Link>
                </div>
                
            </div>
        </div>
)};

export default withStyles(footerStyle)(Footer);
