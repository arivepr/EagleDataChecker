import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core';
import styles from './card.styles';

const Movie = (props:any) => {
    const [movieTitle, setMovieTitle] = useState<String>('Default title');
    const {classes} = props;
    const {batch} = props;
    const {dbFile} = props;
    const {processLog} = props;

    console.log("Movie props", props);

    const getPayloadCard = () => {
        return(
            <div>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Amazon Payload
                     </Typography>
                        <Typography variant="h5" component="h2">
                            {dbFile[0].title}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            N/A
                        </Typography>
                        <Typography variant="body2" component="p">
                            Director: {dbFile[0].views[0].directors}
                            <br />
                            Writers: {dbFile[0].views[0].writers}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        );
    }

    const getMismatchCard = () => {
        return (
            <div>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                           Comparison Chart
                     </Typography>
                        <Typography variant="h5" component="h2">
                            Mismatches:
                        </Typography>
                        <Typography variant="body2" component="p">
                            {processLog.negative[1].join(": ")}
                            <br />
                            {processLog.negative[2].join(": ")}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return(
       <div>
           <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        IMDB Data
                     </Typography>
                    <Typography variant="h5" component="h2">
                        {batch[0].Title}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {batch[0].imdbID}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Director: {batch[0].Director}
                    <br />
                        Writers: {batch[0].Writer}
                    </Typography>
                </CardContent>
           </Card>
           {/* {getPayloadCard()}
           {getMismatchCard()} */}
       </div>
    );
}

export default withStyles(styles)(Movie);