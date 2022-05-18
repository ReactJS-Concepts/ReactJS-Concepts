import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Checkbox, FormControlLabel, TextField } from '@mui/material';

export function TwoWayDataBinding (props){
    const [data, setData]= useState([['A',true],['B',true],['C',true],['D',true],['E',true],['F',true]]);
    const [newItem, setNewItem]= useState("")
   
    function change_checkbox_data(index){
        const temp= [...data]
        temp.map((item, i) => {
            if (index === i){
                temp[i][1]= temp[i][1] ? false : true;
            }
        })
        setData(temp);
    }

    function AddNewItem(event){
        const val= event.target.value
        if (event.charCode === 13)
        {
            var temp= data
            temp.push([newItem,true])
            setData(temp)
            setNewItem("");
        }
        else if (val){
            setNewItem(val);
        }else{
            setNewItem("")
        }
        
    }

    return(
        <Grid container >
            <Grid container item xs={12} 
                direction="row" justifyContent="center" alignItems="center" 
                style={{background: "#314b80", borderRadius: '7px 7px 0px 0px', color: '#e8effb'}}
            >
                <p style={{fontSize: '17px'}}>Two-Way Data Binding</p>
            </Grid>
            <Grid container item xs={12}>
                <div style={{ width: '100%'}}>
                    <table style={{ width: '100%'}}>
                        <tbody>
                            {data ? data.map((item,index) => {
                                if (item[1]) 
                                return(
                                        <tr id={index} key={index}>
                                            <td style={{ width: '100%', padding: '3%', background: 'white'}}>
                                                Item {item[0]}
                                            </td>
                                        </tr>
                                    ) 
                                else
                                    return null
                            }) : null}
                        </tbody>
                    </table>
                </div>

                <div sttyle={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    {data ? data.map((item,index) => (
                        <FormControlLabel 
                            control={<Checkbox checked={item[1]} onChange={ () => {change_checkbox_data(index)}} />}
                            label={item[0]} key={index}
                        />
                    )): null}
                </div>
            </Grid>
            <Grid container item xs={12} style={{padding: '3%'}}>
                <TextField id="input_checkbox" style={{width: '100%'}} label="Add New Item" variant="outlined" value={newItem}  
                            onKeyPress={(event) => AddNewItem(event) } helperText={newItem.length > 0 ? "Press Enter to Add" : ""} 
                            onChange={(event) => {setNewItem(event.target.value)}}
                />
            </Grid>
        </Grid>
    )
};