import { Button, Grid, Link } from "@mui/material";
import { TextField,Typography,Card,CardContent } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material";
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useState} from "react";
import {ExpandMore} from "./ExpandMore";
import {OrderCard} from "./OrderCard"
const theme = createTheme()
const useStyles = makeStyles(() => ({
    paper: {
      color:"#989898",
      margin: theme.spacing(15,0,0,50),
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      color:"#989898",
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    textField:{
      
      color:"#989899"
    },
    dialog:{
      marginBottom:"10px"
    },
    input:{
      color:"#989898",
    },
    submit: {
      margin: theme.spacing(3, 1, 2),
    },
    buttonGroup:{
      padding:"1px",
      
    }
  }));
  

export const ViewOrders=({user,deliveries})=>{
    const classes= useStyles();
    const [expanded, setExpanded] = useState(false);
    console.log(deliveries);
    const handleExpandClick = () => {
      setExpanded(!expanded);
      };
    return(

        <Grid container spacing={2}> 
         {deliveries.map((delivery)=>{
           return(
            <Grid item xs={12}>
              <OrderCard delivery={delivery}></OrderCard>
           </Grid>
           )
          
         })}
        
        </Grid>
        )
}