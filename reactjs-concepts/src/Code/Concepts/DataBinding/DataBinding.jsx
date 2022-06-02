
//import required files
import React from 'react';
import Grid from '@mui/material/Grid'

import { OneWayDataBinding } from "./OneWayDataBinding";
import { TwoWayDataBinding } from "./TwoWayDataBinding";


export function DataBindingContainer(props) {
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" style={{padding: '0% 3% 0% 3%'}}>
            <Grid container item xs={12}  direction="row" alignItems="center"  style={{paddingBottom: '2%'}}>
                <h1>Data Binding</h1>
            </Grid>
            <Grid 
                container item xs={12} sm={4} 
                className="Items"  
                direction="row" justifyContent="center" alignItems="center" 
                style={{borderRadius: '7px 7px 7px 7px', background: '#e0e2e5', color: '#595b5f'}}
            >
                <OneWayDataBinding />
            </Grid>
            <Grid container item xs={4}></Grid>
            <Grid 
                container item xs={12} sm={4} 
                className="Items"  direction="row" justifyContent="center" alignItems="center" 
                style={{borderRadius: '7px 7px 7px 7px', background: '#e0e2e5', color: '#595b5f'}}
            >
                <TwoWayDataBinding />
            </Grid>
        </Grid>
    )
}