import React, {useState} from 'react';
import Movie from './Movie';
import BatchForm from './BatchForm';
import Report from './Report';
import styles from './batch.styles';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const dummyBatch = [
    {title: "Batman Begins",
    imdbId: "tt0372784"}
];

const Batch = (props:any) => {
    const [isProcessing, setIsProcessing] = useState(false);
    const {batchList} = props;
    const {classes} = props;

    const handleSubmitBatch = () => {
        return true;
    }

    const manageDisplay = (batch:any, isProcessing:any) => {
        return (isProcessing ?  <Report batch={dummyBatch}/> : <BatchForm classes={classes} batch={batch}/>);
    }


    const manageSubmitButton = (isProcessing:any) => {
        console.log("Getting my button !!!!!");
        if(!isProcessing){
            return (
                <Grid item>
                    <Button variant="outlined"
                        className={classes.submitButton}
                        onClick={() => setIsProcessing(handleSubmitBatch)}>Process Batch</Button>
                </Grid>
            )
        }else return;
    }

    return(
        <div>
            <Grid container justify="center" alignContent="center" alignItems="center" spacing={3} className={classes.root}>
                <Grid item lg={12}>
                {manageDisplay(dummyBatch, isProcessing)}
                </Grid>
                <br/>
                {manageSubmitButton(isProcessing)}
            </Grid>                 
        </div>
    );
}

export default withStyles(styles)(Batch);