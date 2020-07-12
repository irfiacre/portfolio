import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import projectStyle from '../../styles/components/projects';
import ImageCard from '../../components/cards/imageCard';

// Images
import papel from '../../assets/papel.jpg';
import justEat from '../../assets/justEat.jpg';
import expensify from '../../assets/expensify.jpg';


const project1 =  {
        name:'Papel',
        image:papel,
        summary:'Papel is a light-weight core banking application that powers banking operations.',
        url:'https://irfiacre.github.io/Papel/',
        code:'https://github.com/irfiacre/Papel',
    };
const project2 ={
        name:'Just Eat',
        image:justEat,
        summary:'This is a platform where you may order food from the comfort of your home!',
        url:'https://irfiacre.github.io/Just-Eat/',
        code:'https://github.com/irfiacre/Just-Eat',
    };
const project3 = {
        name:'Expensify',
        image:expensify,
        summary:'This is a react web app that helps the user to keep track of their daily expenses',
        url:'https://expensivefyrwanda.herokuapp.com/',
        code:'https://github.com/irfiacre/Expensify',
    };

const useStyles = makeStyles(projectStyle);

export default ()=>{
    const classes = useStyles();
    
    
return(
        <div className={classes.root}>
            <Typography  className={classes.title} variant="h3" gutterBottom>
                Featured Projects
            </Typography> 
            <div className={classes.projects}>
                <div className={classes.project}>
                    <ImageCard  content={project1}/>
                </div>
                <div className={classes.project}>
                    <ImageCard  content={project2}/>
                </div>
                <div className={classes.project}>
                    <ImageCard  content={project3}/>
                </div>
            </div>
        </div>
)};
