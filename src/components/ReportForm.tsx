import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

export interface IReportFormProps {
}

const ReportForm = (props: any) => {
    const {batch} = props;
    const {dbFile} = props;
    const {processLog} = props;

    console.log("These are the forms props: ", props);

  return (
    <>
        <Grid container alignItems="center">
            <Grid item lg={6}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Movie Title</TableCell>
                            <TableCell align="left">Positive Matches</TableCell>
                            <TableCell align="left">Mismatches</TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
            </Grid>
        </Grid>
    </>
  );
}

export default ReportForm;