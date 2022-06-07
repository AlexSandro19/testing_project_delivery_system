import { Button, Grid, Link } from "@mui/material";
import {useState,useEffect} from "react";
import { TextField,Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material";
import { NavLink,useHistory } from "react-router-dom";
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
export const UpdateProfile=({changeHandler,sendProfileUpdateForm,form,formErrors,user,errors,updateUser})=>{
    const classes= useStyles();
    const history = useHistory();
    
   
    return(
        <Grid container>
               <Grid item xs={12}><Typography style={{width:"100%",textAlign:"center"}} variant="h2">UPDATE</Typography></Grid>
               <Grid item xs={12} style={{padding:"1%"}}><TextField  type="email" value={form.email} onChange={changeHandler} style={{width:"100%"}} required label="Email" id="email" name="email" error={!!formErrors["email"]}helperText={formErrors["email"] ? formErrors["email"] : ""}></TextField></Grid>
               <Grid item xs={6} style={{padding:"1%"}}><TextField  type="text" value={form.firstName} onChange={changeHandler} style={{width:"100%"}} required  label="First Name" id="firstName" name="firstName" error={!!formErrors["firstName"]}helperText={formErrors["firstName"] ? formErrors["firstName"] : ""}></TextField></Grid>
               <Grid item xs={6} style={{padding:"1%"}}><TextField type="text" value={form.secondName} onChange={changeHandler} style={{width:"100%"}} required  label="Second Name" id="secondName" name="secondName" error={!!formErrors["secondName"]}helperText={formErrors["secondName"] ? formErrors["secondName"] : ""}></TextField></Grid>
               <Grid item xs={6} style={{padding:"1%"}}><TextField  type="password" value={form.password} onChange={changeHandler} style={{width:"100%"}}  required label="Password" id="password" name="password"error={!!formErrors["password"]}helperText={formErrors["password"] ? formErrors["password"] : ""} ></TextField></Grid>
               <Grid item xs={6} style={{padding:"1%"}}><TextField  type="password" value={form.passwordConfirm} onChange={changeHandler} style={{width:"100%"}}  required label="Confirm password" id="passwordConfirm" name="passwordConfirm" error={!!formErrors["passwordConfirm"]}helperText={formErrors["passwordConfirm"] ? formErrors["passwordConfirm"] : ""} ></TextField></Grid>
               <Grid item xs={6} style={{padding:"1%"}}><TextField  type="text" value={form.duns} onChange={changeHandler} style={{width:"100%"}}  required label="Company Business ID" id="duns" name="duns" error={!!formErrors["duns"]}helperText={formErrors["duns"] ? formErrors["duns"] : ""} ></TextField></Grid>
               <Grid item xs={6} style={{padding:"1%"}}><TextField  type="text" value={form.companyName} onChange={changeHandler} style={{width:"100%"}}  required label="Company name" id="companyName" name="companyName" error={!!formErrors["companyName"]}helperText={formErrors["companyName"] ? formErrors["companyName"] : ""} ></TextField></Grid>
               <Grid item xs={6} style={{padding:"1%"}}><TextField  type="text" value={form.cityId} onChange={changeHandler} style={{width:"100%"}}  required label="City" id="cityId" name="cityId" error={!!formErrors["cityId"]}helperText={formErrors["cityId"] ? formErrors["cityId"] : ""} ></TextField></Grid>
               <Grid item xs={6} style={{padding:"1%"}}><TextField  type="text" value={form.zipcode} onChange={changeHandler} style={{width:"100%"}}  required label="Zip code" id="zipcode" name="zipcode" error={!!formErrors["zipcode"]}helperText={formErrors["zipcode"] ? formErrors["zipcode"] : ""} ></TextField></Grid>

               <Grid item xs={12} style={{padding:"1%"}}><TextField  type="tel" value={form.phone} onChange={changeHandler} style={{width:"100%"}} required label="Phone number" id="phone" name="phone" error={!!formErrors["phone"]}helperText={formErrors["phone"] ? formErrors["phone"] : ""} ></TextField></Grid>               
               <Grid item xs={12} style={{padding:"1%"}}><TextField  type="text" required onChange={changeHandler} multiline value={form.address} style={{width:"100%"}}  label="Address" id="address" name="address"  error={!!formErrors["address"]}helperText={formErrors["address"] ? formErrors["address"] : ""}></TextField></Grid>
               <Grid item xs={12} style={{padding:"1%"}}>
               <Button 
               variant="contained" 
               color="error"
               onClick={()=>{history.push("/profile")}}
               style={{margin:"1%",width:"40%",height:"70%"}}
                >Cancel</Button>
                <Button
               style={{margin:"1%",width:"40%",height:"70%"}}
               variant="contained"
               color="primary" 
               type="submit"
               onClick={sendProfileUpdateForm}
               >
                   Update
               </Button>
        </Grid>
        </Grid>
        )
}