import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { TextField,Grid, Typography,Button} from "@mui/material";
import  {Dropdown} from "react-bootstrap"
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
const options = [
    'one', 'two', 'three'
  ];
  const defaultOption = options[0];
  

export const Delivery=({form,sendRegistrationForm,changeHandler})=>{
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
        <Grid item xs={12}><TextField type="text" value={form.packageId} onChange={changeHandler} style={{width:"100%"}} required label="Package Id" id="packageId" name="packageId" ></TextField></Grid>
        <Grid item xs={12}><TextField type="text" value={form.priority} onChange={changeHandler} style={{width:"100%"}}  required label="Priority" id="priority" name="priority" ></TextField></Grid>
        <Grid item xs={6}><TextField type="text" value={form.paymentId} onChange={changeHandler} style={{width:"100%"}}  required label="PaymentId" id="paymentId" name="paymentId"></TextField></Grid>
        <Grid item xs={6}><TextField type="text" value={form.international} onChange={changeHandler} style={{width:"100%"}}  label="International" id="international" name="international"></TextField></Grid>
        <Grid item xs={6}><Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Dropdown Button
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item onClick={"fas"}>Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown></Grid>
        <Grid item xs={6}><TextField type="text" value={form.startLocation} onChange={changeHandler} style={{width:"100%"}}  label="startLocation" id="startLocation" name="startLocation"></TextField></Grid>
        <Grid item xs={7}><TextField type="text" value={form.endLocation} onChange={changeHandler} style={{width:"100%"}} required label="End Location" id="endLocation" name="endLocation"></TextField></Grid>
        <Grid item xs={6}><TextField type="text" value={form.message} onChange={changeHandler} style={{width:"100%"}}  label="Message" id="message" name="message"></TextField></Grid>
        <Grid item xs={6}><TextField type="text" value={form.estimatedDate} onChange={changeHandler} style={{width:"100%"}}  label="Estimated Date" id="estimatedDate" name="estimatedDate"></TextField></Grid>
        <Grid item xs={6}><TextField type="text" value={form.startDate} onChange={changeHandler} style={{width:"100%"}}  label="Start Date" id="startDate" name="startDate"></TextField></Grid>
        <Grid item xs={6}><TextField type="text" value={form.endDate} onChange={changeHandler} style={{width:"100%"}}  label="End Date" id="endDate" name="endDate"></TextField></Grid>
        <Grid item xs={6}><TextField type="text" value={form.uid} onChange={changeHandler} style={{width:"100%"}}  label="uid" id="uid" name="uid"></TextField></Grid>
        <Grid item xs={5}>
        <Button 
        variant="contained"
        color="primary" type="submit"
        >
            Add
        </Button></Grid>

        </Grid>
        </div>
    </Box>
    </div>
)

}//<TextField type="text" value={form.stratLocation} onChange={changeHandler} style={{width:"100%"}}  label="Strat Location" id="stratLocation" name="stratLocation"></TextField>

