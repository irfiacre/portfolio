import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import imageCardStyle from '../../styles/components/cards/imageCardStyle';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(imageCardStyle);

export default (props) =>{
  const classes = useStyles();

  return (

        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={props.content.image}
              title="project"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {props.content.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {props.content.summary}
              </Typography>
            </CardContent>
          </CardActionArea>
          
          <CardActions className={classes.buttons}>
              <a href={props.content.url} className={classes.links} target = "_blank">
                <Button size="small" className={classes.viewBtn}>
                    View
                </Button>
              </a>
              
              <a href={props.content.code} className={classes.links} target = "_blank">
                <Button size="small" className={classes.codeBtn}>
                  Code
                </Button>
              </a>
          </CardActions>
        </Card>
  );
}