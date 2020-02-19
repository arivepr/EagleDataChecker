import React, {useState} from 'react';
import {withStyles} from '@material-ui/core';
import styles from './mainPage.styles';
import Batch from './Batch';

// export interface IMainPagProps {
// }

const MainPage = (props: any) => {
   const {classes} = props;
    
  return (
    <div>
        <h1 className={classes.headerLabel}>Eagle Prime</h1>
        <Batch />
    </div>
  );
}


export default withStyles(styles)(MainPage);
