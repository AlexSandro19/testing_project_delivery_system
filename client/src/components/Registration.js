import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { TextField,Grid, Typography,Button } from "@mui/material";
const useStyles=makeStyles(()=>({
    back:{
        margin:"2%",
        backgroundColor:"#D7CD79",
        flexGrow:2,
        width: '600px',
        height: '100%',
        paddingBottom:"7%",
    },
    card:{
       
        marginTop:"10%",
        marginLeft:"5%",
        width:"90%",
    },

}))

export const Registration=({form,sendRegistrationForm,changeHandler})=>{
const classes=useStyles();
return(
    <div>
       
    <Box component="form"
    autoComplete="off"
    width="1000px"
    onSubmit={sendRegistrationForm}
    >
        
        <div>
        <Grid container spacing={4}>

        <Grid item xs={12}><Typography style={{width:"100%",textAlign:"center"}} variant="h2">Register</Typography></Grid>
        <Grid item xs={12}><TextField type="email" value={form.email} onChange={changeHandler} style={{width:"100%"}} required label="Email" id="email" name="email" ></TextField></Grid>
        <Grid item xs={12}><TextField type="password" value={form.password} onChange={changeHandler} style={{width:"100%"}}  required label="Password" id="password" name="password" ></TextField></Grid>
        <Grid item xs={12}><TextField type="password" onChange={changeHandler} style={{width:"100%"}}  required label="Confirm password" id="passwordConfirm" name="passwordConfirm" ></TextField></Grid>
        <Grid item xs={6}><TextField type="text" value={form.firstName} onChange={changeHandler} style={{width:"100%"}}  required label="First Name" id="firstName" name="firstName"></TextField></Grid>
        <Grid item xs={6}><TextField type="text" value={form.lastName} onChange={changeHandler} style={{width:"100%"}}  label="Last Name" id="lastName" name="lastName"></TextField></Grid>
        <Grid item xs={6}><TextField type="text" value={form.companyName} onChange={changeHandler} style={{width:"100%"}}  label="Comapny Name" id="companyName" name="companyName"></TextField></Grid>
        <Grid item xs={7}><TextField type="tel" value={form.phone} onChange={changeHandler} style={{width:"100%"}} required label="Phone number" id="phone" name="phone"></TextField></Grid>
        <Grid item xs={6}><TextField type="text" value={form.country} onChange={changeHandler} style={{width:"100%"}}  label="Country" id="country" name="country"></TextField></Grid>
        <Grid item xs={6}><TextField type="text" value={form.zipCode} onChange={changeHandler} style={{width:"100%"}}  label="Zip Code" id="zipCode" name="zipCode"></TextField></Grid>
        <Grid item xs={6}><TextField type="text" value={form.city} onChange={changeHandler} style={{width:"100%"}}  label="City" id="city" name="city"></TextField></Grid>
        <Grid item xs={5}>
        <Button 
        variant="contained"
        color="primary" type="submit"
        >
            Register
        </Button></Grid>

        </Grid>
        </div>
    </Box>
    </div>
)

}