import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// style
import cardStyle from '../../styles/components/cards/simpleCardStyle';
// const theme = useTheme();
const useStyles = makeStyles( cardStyle );

export default (props)=> {
  const classes = useStyles();
  
  return (
  <div className={classes.cardRoot}>
        <Card className={classes.root}>
        <CardContent>
              <Typography className={classes.title} gutterBottom>
                  {props.content.title}
              </Typography>
             
             { 
               props.content.skills?props.content.skills.map((skill,index)=>(
                      <List 
                        component="nav" 
                        aria-label="main mailbox folders"  
                        key={index}
                      >
                        <ListItem>
                          <ListItemText primary={skill.name} />
                        </ListItem>
                    </List>
               )):null
            }
              
        </CardContent>
      </Card>
    
   </div>
  );
}

// export default withStyles(cardStyle())(CardComponent);
