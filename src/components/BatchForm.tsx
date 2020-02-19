import React, {useState} from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export interface IBatchFormProps {
    batch:[
        {title:string,
        imdbId:string}
    ],
    classes:any
}

const BatchForm = (props: any) => {
    const {batch} = props;
    const {classes} = props;
    console.log("Tell me my props", props);

  return (
      <>
        <h1 className={classes.headerLabel}>Batch Processor</h1>
        <Paper className={classes.root}>
            <Table aria-label="simple table" className={classes.dataTable}>
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Movie Title</TableCell>
                        <TableCell align="left">IMDB ID</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {batch.map((listing: any) => (
                        <TableRow key={listing.title}>
                            <TableCell align="left">{listing.title}</TableCell>
                            <TableCell align="left">{listing.imdbId}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper> 
    </>
  );
}

export default BatchForm;