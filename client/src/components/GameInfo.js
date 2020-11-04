import React, { Fragment } from 'react';
import _ from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import { blue } from '@material-ui/core/colors';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import basketball from '../media/basketball.jpg';
import soccer from '../media/soccer.jpeg';


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 500,
      textAlign: 'center',
      margin: 'auto'
    },
    media: {
      height: 0,
      paddingTop: '56.25%'
    },
    avatar: {
      backgroundColor: blue[900],
    },
    comment: {
        width: 400
    }
  }));



function GameInfo({data , comments, onChange, onClick}) {

    const classes = useStyles();
    // let formatDate = '';

    const [id, teamA, teamB, scoreA, scoreB, date, category] = _.values(data)
    const formatDate = new Date().toDateString(date);

    return (
        <div>
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        {category === 'Basketball' ? <SportsBasketballIcon /> : <SportsSoccerIcon />}
                    </Avatar>
                    }
                    title={`Played on: ${formatDate}`}
                />
                <CardHeader 
                    title={`${teamA} | ${teamB}`}
                    subheader='Score'
                />
                <CardHeader 
                    title={`${scoreA}     |     ${scoreB}`}
                />
                 <CardMedia
                    className={classes.media}
                    image={category === 'Football' ? soccer : basketball}
                    title="Paella dish"
                />
                <CardHeader 
                    subheader='Comments'
                />
                <CardContent>
                    <List component="nav" className={classes.root} aria-label="mailbox folders">
                        {comments.length > 0 && comments.map((comment, idx) => 
                        <Fragment  key={idx}>
                            <ListItem>
                                <ListItemText primary={comment} />
                            </ListItem>
                            <Divider />
                        </Fragment> 
                        )}
                    </List>
                </CardContent>
                <TextField
                    className={classes.comment} 
                    id="outlined-basic" 
                    label="Add Comment" 
                    variant="outlined" 
                    onChange={({target: {value}}) => onChange(value)} 
                />
                <br /><br />
                <Button variant="contained" color="primary" onClick={() => onClick(id)}>
                    Add
                </Button>
                <br/><br/>
            </Card>
        </div>
    )
}

export default GameInfo;