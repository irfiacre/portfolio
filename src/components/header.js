import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import {NavLink} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { Icon, InlineIcon } from '@iconify/react';
import githubFilled from '@iconify/icons-ant-design/github-filled';
import linkedinFilled from '@iconify/icons-ant-design/linkedin-filled';
import twitterCircleFilled from '@iconify/icons-ant-design/twitter-circle-filled';

import headerStyle from '../styles/components/header';

const Header =(props)=>{

const { classes } = props;

const [expanded, setExpanded] = React.useState(false);

const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
return (
    <div className={classes.header}>
        <div className={classes.socialMedias}>
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
        
        <div className={classes.content}>
        <div className={classes.links}>
            <NavLink to="/" exact activeClassName={classes.isActive} className={classes.navLink}>
                <Typography variant="subtitle1"> About </Typography>
            </NavLink>
            <NavLink to="/contact" activeClassName={classes.isActive} className={classes.navLink}>
                <Typography variant="subtitle1"> Contact </Typography>
            </NavLink>
        </div>
        
        <div className={classes.mobileMenu}>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          {expanded?(<CloseIcon className={classes.menuIcon} />):(<MenuIcon className={classes.menuIcon} />)}
        </IconButton>
        
          <Collapse 
              in={expanded} 
              timeout="auto" 
              unmountOnExit
          >
            <NavLink to="/" exact className={classes.navLinkCollapse}>
                <Typography variant="subtitle1"> About </Typography>
            </NavLink>
            <NavLink to="/contact" className={classes.navLinkCollapse}>
                <Typography variant="subtitle1"> Contact </Typography>
            </NavLink>
          </Collapse>
        </div>
        </div>
    </div>
)}; 

export default withStyles(headerStyle)(Header);
