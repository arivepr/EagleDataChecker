import React, {useState, useEffect} from 'react';
import Movie from './Movie';
import ReportForm from './ReportForm';
import axios from 'axios';
import MovieDB from '../data/db';
// import withRouter from 'react-router-dom';
import {compareData} from '../data/moviePayload';
import {withStyles, Button, CardContent, Card} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import styles from './report.styles';
import CheckBox from '@material-ui/core/Checkbox'
import { red } from '@material-ui/core/colors';
import ReportLog from './ReportLog';


const Report = (props:any) => {
    const initValue = [
        {}
    ];

    const initLog ={
        positive:[{}],
        negative:[{}]
    }

    const API_TITLE_ENPOINT = "http://www.omdbapi.com/?apikey=e60c4b4a&&t=";
    const API_ID_ENDPOINT = "http://www.omdbapi.com/?apikey=e60c4b4a&&i=";
    const [apiData, setApiData] = useState(initValue); // Defines the data pulled from IMDB through the batch given
    const [payloadData, setPayloadData] = useState(); // Defines the data given through Amazon Payload
    const [processLog, setProcessLog] = useState(initLog);
    const [isInspecting, setIsInspecting] = useState(false);
    const [isSelected, setSelected] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [key, setKey] = useState(0);
    const {classes} = props;
    const {batch} = props;

    useEffect(() => {

        const fetchDataByTitle = async () => {
            const { data: movie } = await axios.get(`${API_TITLE_ENPOINT}+${batch[0].title}`)

            if (apiData === initValue) {
                apiData.shift();
                console.log("Shifting");
            }

            setApiData([...apiData, movie]);
            const res = compareData(movie, MovieDB);
            setProcessLog(compareData(movie, MovieDB));

            console.log("Our current overall state", apiData);
            console.log("Our current state in map", movie);
            console.log("total props", props);
            console.log("Title is ", batch[0].title );
            console.log("Testing results", res.positive.length);
        }
        
        fetchDataByTitle();
        setPayloadData(MovieDB);
    }, [])

    const handleReportLog = () =>{
        if(!isSubmitting){
            setIsSubmitting(true);
        }
        else
            setIsSubmitting(false);
    }  


    const handleErrorMessage = () => {
        if(isSubmitting && !isSelected){
            return(
                <Card style={{marginBottom:"20px", backgroundColor:'red', opacity:'0.7'}}>
                    <CardContent>
                        Cannot create empty report.
                    </CardContent>
                </Card>
            );
        }
    }


    const processDataComparison = (batch:any, payload:any) => {
        const results = compareData(payload, batch);
        console.log("These are the results from comparison: ", results);

        return results;
    }

    const handleItemSelect = (item:any) => {
        console.log("This is the selected", item);
        if(!isSelected)
            setSelected(true);
        else
            setSelected(false);
    }

    const manageMovieDisplay = () => {
        if(isInspecting){
            return(
                <>
                    <h3 style={{ textAlign: "left", marginTop:"20px" }}>Comparison Table</h3>
                    <Movie batch={apiData} dbFile={MovieDB} processLog={processLog} />
                    <Grid container spacing={10} justify="flex-start">
                        <Grid item xs={5} >
                            <Table >
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left"> {} </TableCell>
                                        <TableCell align="left">imdbID</TableCell>
                                        <TableCell align="left">Writers</TableCell>
                                        <TableCell align="left">Directors</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell align="left">Amazon Payload</TableCell>
                                        <TableCell align="left">N/a</TableCell>
                                        <TableCell align="left">{payloadData[0].views[0].writers}</TableCell>
                                        <TableCell align="left">{payloadData[0].views[0].directors}</TableCell>
                                    </TableRow>
                                    {/* <TableRow>
                                        <TableCell align="left">Batch Data</TableCell>
                                    </TableRow> */}
                                </TableBody>
                            </Table>
                        </Grid>
                        <Grid item xs={5}>
                            <Table >
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left"> {} </TableCell>
                                        <TableCell align="left" className={classes.mismatchCell}>imdbID</TableCell>
                                        <TableCell align="left" className={classes.mismatchCell}>Writers</TableCell>
                                        <TableCell align="left" className={classes.positiveCell}>Directors</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {apiData.map((listing:any, i:number) =>(
                                        <TableRow>
                                            <TableCell align="left">Batch Data</TableCell>
                                            <TableCell align="left">{listing.imdbID}</TableCell>
                                            <TableCell align="left">{listing.Writer}</TableCell>
                                            <TableCell align="left">{listing.Director}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Grid>
                    </Grid>
                </>
            );
        } else return;
    }

    const manageDisplay = () => {
        let counter = 1;
        if(isSubmitting && isSelected){
            return <ReportLog/>;
        }else {

            return(
                <>
                    <Grid container alignItems="center" justify="center" >
                        <Paper className={classes.paperRoot}>
                            <h3 style={{ textAlign: "center" }}>Batch Table</h3>
                            <Grid item lg={11}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="left">{ }</TableCell>
                                            <TableCell align="left">Movie Title</TableCell>
                                            <TableCell align="left">Positive Matches</TableCell>
                                            <TableCell align="left">Mismatches</TableCell>
                                            <TableCell align="right"></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {apiData.map((listing: any, i:number) => (
                                            <TableRow key={i}>
                                                <TableCell key={i}>
                                                    <CheckBox 
                                                        checked={isSelected}
                                                        onChange={()=>handleItemSelect(i)}
                                                        color="primary"
                                                        inputProps={{
                                                            'aria-label': 'primary checkbox',
                                                        }}
                                                    />
                                                </TableCell>
                                                <TableCell align="left" key={i}>{listing.Title}</TableCell>
                                                <TableCell align="left" key={i}>{processLog.positive.length - 1}</TableCell>
                                                <TableCell align="left" key={i}>{processLog.negative.length - 1}</TableCell>
                                                <TableCell align="right">
                                                    <Button variant="outlined" onClick={() => {isInspecting ? setIsInspecting(false) : setIsInspecting(true)}}>
                                                        {isInspecting ? "Hide" : "Inspect"}
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                            
                                        ))}
                                    </TableBody>
                                </Table>
                            </Grid>
                            <Grid container justify="flex-start" alignItems="center">
                                <Grid item lg={12}>
                                    {manageMovieDisplay()}
                                </Grid>
                            </Grid>
                            <Grid item lg={4}>
                                <Button variant="contained" size="large" color="secondary" className={classes.reportBtn}
                                    onClick={()=> handleReportLog()}>
                                    Report Log
                                </Button>
                            </Grid>
                            <Grid item lg={6}>
                                {handleErrorMessage()}            
                            </Grid>
                        </Paper>
                        
                    </Grid>
                </>
            );
        }
        
        const rootDisplay = () => {
            if(isSelected && isSubmitting){
                return(
                    <ReportLog></ReportLog>
                )
            }else{
                return (manageMovieDisplay());
            }
        }

    }

    
    return(
        <div>
            <h1 className={classes.headerLabel}>ReportID: 279940376</h1>
            
            {manageDisplay()}
        </div>
    );
}

export default withStyles(styles)(Report);