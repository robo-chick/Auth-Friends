import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    cardContainer: {
        backgroundColor: theme.palette.common.lightP,
        width: "30em"
    }
}));


const FriendsCard = props => {
    const classes = useStyles();
    const theme = useTheme();

    const { id, name, age, email } = props.friend;

    return (
        <Grid container 
        direction="row" 
        justify="center"
        style={{maxWidth: "30em", marginBottom: "3em", marginLeft: "10em"}}>
            <Card variant="outlined" className={classes.cardContainer}>
                <CardContent>
                    <Typography variant="h4">Name: {name}</Typography>
                    <Typography variant="body1">id: {id}</Typography>
                    <Typography variant="body1">Age: {age}</Typography>
                    <Typography variant="subtitle2">Email: {email}</Typography>
                </CardContent>
            </Card>
        </Grid>

    );
};

export default FriendsCard;