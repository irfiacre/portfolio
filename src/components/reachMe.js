import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Icon, InlineIcon } from '@iconify/react';
import githubFilled from '@iconify/icons-ant-design/github-filled';
import linkedinFilled from '@iconify/icons-ant-design/linkedin-filled';
import twitterCircleFilled from '@iconify/icons-ant-design/twitter-circle-filled';
import emailSolid from '@iconify/icons-clarity/email-solid';

//image & style
import profileImg from '../assets/photo.png';
import reachMeStyle from '../styles/components/reachMeStyle';
// const theme = useTheme();
const useStyles = makeStyles( reachMeStyle );

export default (props)=> {
  const classes = useStyles();
  
  return (
  <div className={classes.cardRoot}>
        <Card className={classes.root}>
        <CardContent>
            <div className={classes.myPicture}>
                <img src={profileImg} alt='my profilePic'  className={classes.profilePicture}/>
            </div>
            
              <Typography paragraph className={classes.details} >
                  If you are interested in hiring me for your project please use the form following to get in touch.
              </Typography>
              
              <Typography variant="subtitle2" className={classes.title}>
                    You can also find me on the following channels
              </Typography>
              <div className={classes.socialMedias}>
                    <a href = "mailto: firaduk@yahoo.com" className={classes.link}>
                        <Icon icon={emailSolid} className={classes.socialMediaIcon}/>
                    </a>
                    <a href='https://www.linkedin.com/in/irfiacre/' className={classes.link} target = "_blank">
                        <Icon icon={linkedinFilled} className={classes.socialMediaIcon}/>
                    </a>
                    <a href='https://github.com/irfiacre' className={classes.link} target = "_blank">
                        <Icon icon={githubFilled} className={classes.socialMediaIcon}/>
                    </a>
                    <a href='https://twitter.com/irfiacre' className={classes.link} target = "_blank">
                        <Icon icon={twitterCircleFilled} className={classes.socialMediaIcon}/>
                    </a>
                    
              </div>
        </CardContent>
      </Card>
    
   </div>
  );
}
