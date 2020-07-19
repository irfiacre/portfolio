import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

// Components
import AboutMe from '../components/aboutMe';
import Footer from '../components/footer';
import MySkills from './components/skills';
import Projects from './components/projects';

import homePageStyle from '../styles/components/home';


const HomePage = (props)=>{
const { classes } = props;

return(
    <div className={classes.root}>
        <div className={classes.aboutMe}>
            <AboutMe />
        </div>
        
        <div className={classes.skills}>
            <MySkills />
        </div>
        
        <div className={classes.projects}>
            <Projects />
        </div>
        
        <div className={classes.footer}>
            <Footer />
        </div>
    </div>
)};

export default withStyles(homePageStyle)(HomePage);
