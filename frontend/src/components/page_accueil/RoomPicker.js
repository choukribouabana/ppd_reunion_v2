import React, {Component} from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function RoomPicker(){
    const classes = useStyles();

    return(
        <TextField
          id="standard-number"
          label="Numéro de la salle"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
    )
}