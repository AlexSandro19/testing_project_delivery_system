import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { TextField,Grid, Typography,Button,InputLabel,Select,MenuItem } from "@mui/material";
import { useHistory } from "react-router-dom";

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

export const Registration=({setForm,zipsCities,form,formErrors,sendRegistrationForm,changeHandler})=>{
const classes=useStyles();
const history = useHistory();

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
        <Grid item xs={12}><TextField type="password" onChange={changeHandler} style={{width:"100%"}}  required label="Confirm password" id="confirmPassword" name="confirmPassword" ></TextField></Grid>
        <Grid item xs={6}><TextField type="text" value={form.firstName} onChange={changeHandler} style={{width:"100%"}}  required label="First Name" id="firstName" name="firstName"></TextField></Grid>
        <Grid item xs={6}><TextField type="text" value={form.secondName} onChange={changeHandler} style={{width:"100%"}}  label="Second Name" id="secondName" name="secondName"></TextField></Grid>
        <Grid item xs={6}><TextField type="text" value={form.companyName} onChange={changeHandler} style={{width:"100%"}}  label="Comapny Name" id="companyName" name="companyName"></TextField></Grid>
        <Grid item xs={6}><TextField type="tel" value={form.phone} onChange={changeHandler} style={{width:"100%"}} required label="Phone number" id="phone" name="phone"></TextField></Grid>
        <Grid item xs={6}><TextField type="text" value={form.address} onChange={changeHandler} style={{width:"100%"}} required label="Address" id="address" name="address"></TextField></Grid>

        <Grid item xs={6}><TextField type="text" value={form.DUNS} onChange={changeHandler} style={{width:"100%"}} required label="Company Identification" id="duns" name="duns"></TextField></Grid>
        <Grid item xs={12}>
        <InputLabel id="startCity">Delivery City and Zipcode</InputLabel>
          <Select
                    sx={{ marginBottom: '15px' }}
                    fullWidth
                    required
                    name=""
                    labelId="endLocation"
                    id="endLocation"
                    error={!!formErrors["endLocation"]}
                    helperText={formErrors["endLocation"] ? formErrors["endLocation"] : ""}
                    value={form.locationOfUser.name}
                    // defaultValue={currentItem.hasWarranty}
                    label="endLocation"
                    onChange={(e) => setForm({ ...form, locationOfUser:{locationOfUser:e.target.value} })}
                >
                {zipsCities.map((item)=>{return(<MenuItem value={{idzipcode:item.zipcode_idzipcode,idcity:item.city_idcity,name:item.name,zipcode:item.zipcode}}>{item.zipcode} {item.name}</MenuItem>)})}

                </Select></Grid>        
        <Grid item xs={5}>
        <Button 
               variant="contained" 
               color="error"
               onClick={()=>{history.push("/profile")}}
               style={{margin:"1%",width:"40%",height:"70%"}}
                >Cancel
                </Button>
                <Button
               style={{margin:"1%",width:"40%",height:"70%"}}
               variant="contained"
               color="primary" 
               type="submit"
               onClick={sendRegistrationForm}
               >
                Register
               </Button></Grid>

        </Grid>
        </div>
    </Box>
    </div>
)

}