import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import { Icon, InlineIcon } from '@iconify/react';
import codeOutlined from '@iconify/icons-ant-design/code-outlined';
import bxCodeAlt from '@iconify/icons-bx/bx-code-alt';
import laptopCode from '@iconify/icons-fa-solid/laptop-code';

import SimpleCard from '../../components/cards/simpleCard';
import skillsComponentStyle from '../../styles/components/skills';
import { Link } from 'react-router-dom';

const frontendSkills ={
    title:'Frontend',
    skills:[
            { name:'Webpack'},
            { name:'Vanilla Js'},
            { name:'React Js'},
            { name:'HTML/CSS/SASS/LESS'},
    ]
};

const backendSkills={
    title:'Backend',
    skills:[
             { name:'NodeJs/ExpressJs'},
             { name:'PostgresSQL/MySQL'},
             {name:''},
             {name:''},
             {name:''}
    ]
};

const otherSkills = {
    title:'Others',
    skills:[
             { name:'DevOps'},
             { name:'Unit Testing'},
             { name:'UX/Wireframing'},
             { name:''},
    ]
};

const SkillsComponent =(props)=>{

    const { classes } = props;

return(
    <div className={classes.root}>
            <div className={classes.skillsTitle}>
                <Typography  className={classes.title} variant="h3" gutterBottom>
                        Skills Overview
                </Typography>  
                <Typography  className={classes.details} paragraph >
                    Below is a quick overview of my main technical skill sets and tools I use. 
                    Want to find out more about my skills? 
                </Typography> 
                
                <a 
                    href='https://drive.google.com/file/d/1Uj1AUupHEQhoaWt14NHTyASgt4R67rlX/view?usp=sharing' 
                    className={classes.links}
                    target = "_blank"
                >
                    <Typography  className={classes.details} paragraph >Check out my Resume.</Typography>
                </a>
            </div>
            
            <div className={classes.skills}>
                <div className={classes.frontEnd}>
                    <div className={classes.iconContainer}>
                        <Icon icon={bxCodeAlt} className={classes.icon} />
                    </div>
                    <SimpleCard   content={frontendSkills}/>
                </div>
                
                <div className={classes.backEnd}>
                    <div className={classes.iconContainer}>
                        <Icon icon={codeOutlined} className={classes.icon}/>
                    </div>
                    <SimpleCard   content={backendSkills} />
                </div>
                
                <div className={classes.otherSkills}>
                    <div className={classes.iconContainer}>
                        <Icon icon={laptopCode} className={classes.icon} />
                    </div>
                    <SimpleCard   content={otherSkills}/>
                </div>
            </div>
    </div>
)};

export default withStyles(skillsComponentStyle)(SkillsComponent);