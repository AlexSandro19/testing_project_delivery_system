import { Button, Grid, Link } from "@mui/material";
import { TextField,Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material";
import { NavLink } from "react-router-dom";
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
export const Profile=({user})=>{
    const classes= useStyles();

    return(
        <Grid container >
            <Grid item xs={6}>
                <Typography>Email: {user.email}</Typography>
                <Typography>First name: {user.firstName}</Typography>
                <Typography>Second name: {user.secondName}</Typography>
                <Typography>Company: {user.companyName}</Typography>
                <Typography>Phone number: {user.phone}</Typography>
                <Typography>Address: {user.address}</Typography>
                <Typography>Duns: {user.duns}</Typography>
                <Typography>City: {user.cityId}</Typography>
                <Typography>Zipcode: {user.zipcode}</Typography>
            </Grid>
            <Grid item xs={6}>
                <Grid >
                    <Grid item xs={12} container style={{margin:"5%"}}>
                    <Button variant="contained" component={NavLink} to="/updateProfile">Update Profile</Button>
                    </Grid>
                    <Grid item xs={12} container style={{margin:"5%"}}>
                    <Button variant="contained" component={NavLink} to="/addPackage">Create a Delivery</Button>
                    </Grid>
                    <Grid item xs={12} container style={{margin:"5%"}}>
                    <Button variant="contained" component={NavLink}  to="/viewOrders">View Orders</Button>
                    </Grid>
                    
                    
                </Grid>
                
            </Grid>
        </Grid>
    )
}