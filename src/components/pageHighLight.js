import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

import aboutMeStyle from '../styles/components/about';

const AboutMe =(props)=>{
    const { classes } = props;
    
return(
        <div className={classes.introduction}>
                <Typography variant="h3" className={classes.name}>
                    Contact
                </Typography>
        </div>
)};

export default withStyles(aboutMeStyle)(AboutMe);
