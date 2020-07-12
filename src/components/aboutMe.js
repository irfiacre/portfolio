import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

import aboutMeStyle from '../styles/components/about';

import profileImg from '../assets/photo.png';

const AboutMe =(props)=>{
    const { classes } = props;
    
return(
        <div className={classes.introduction}>
            <div className={classes.myPicture}>
                <img src={profileImg} alt='my profilePic'  className={classes.profilePicture}/>
            </div>
            <div className={classes.mySummary}>
                <Typography variant="subtitle1" className={classes.title}> 
                    Hello My name is 
                </Typography>
                
                <Typography variant="h3" className={classes.name}>
                    IRADUKUNDA Allelua Fiacre
                </Typography>
                <Typography paragraph className={classes.details} >
                    I'm a full-stack developer specialized in frontend and backend development for complex scalable web apps.I like challenges and solving real-world 
                    problems by writing clean, well-tested code to ensure the sustainability of built applications.
                </Typography>
                
                <div className={classes.viewMore}>
                    <Link to='/contact' className={classes.links}>
                        <Typography paragraph className={classes.hireMe} >
                            Hire Me
                        </Typography>
                    </Link>
                </div>
                
            </div>
        </div>
)};

export default withStyles(aboutMeStyle)(AboutMe);
