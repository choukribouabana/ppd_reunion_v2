import React from "react";
import DatePickers from "./DatePickers";
import RoomPicker from "./RoomPicker";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

function FilterBar (){
    var today = new Date();
    return(
        <div style={{float:"right",overflow:"hidden", width:"75%", paddingBottom:"50px"}}>
            <Grid container spacing={24}>
                <Grid item xs={4} sm={3} md>
                    <DatePickers />
                </Grid>
                <Grid item xs={4} sm={3} md>
                    <RoomPicker />
                </Grid>
                <Grid item xs={4} sm={3} md>
                    <Button variant="contained" color="primary" disableElevation>
                        Filtrer 
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default FilterBar;