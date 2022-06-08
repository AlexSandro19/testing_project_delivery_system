import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import {useState,useCallback,} from "react";
import { TextField,Grid, Typography,Button,Select,MenuItem,InputLabel} from "@mui/material";
import  {Dropdown} from "react-bootstrap";
import { NavLink,useHistory } from "react-router-dom";
import { DeletePackageDialog } from "./DeletePackageDialog";

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
  

export const Delivery=({display,setDisplay,convertedAmount,converted,setConverted,currency,amount,zipsCities,idpackages,form,setForm,formErrors,sendAddDeliveryForm,changeHandler,deletePackage})=>{
const classes=useStyles();
const history = useHistory();
const [modalOpen, setModalOpen] = useState(false);
const handleClose = () => {
  setModalOpen(false);
}

const goBack = () => {
  // delete package here;
  deletePackage(idpackages)
  history.push("/addPackage");
}
return(
    <div>
    <Box component="form"
    autoComplete="off"
    width="1000px"
    >
        
        <div>
        <Grid container spacing={4}>
        <Grid item xs={12}><Typography style={{width:"100%",textAlign:"center"}} variant="h2">Create Delivery</Typography></Grid>
        <Grid item xs={12}>
        <InputLabel id="priority">Priority</InputLabel>
        <Select
                    sx={{ marginBottom: '15px' }}
                    fullWidth
                    required
                    name="priority"
                    labelId="priority"
                    id="priority"
                    error={!!formErrors["priority"]}
                    helperText={formErrors["priority"] ? formErrors["priority"] : ""}
                    value={form.priority}
                    // defaultValue={currentItem.hasWarranty}
                    label="priority"
                    onChange={(e) => setForm({ ...form, priority: e.target.value })}
                >
                  
                    <MenuItem value={1}>Yes</MenuItem>
                    <MenuItem value={0}>No</MenuItem>
                </Select></Grid>
        <Grid item xs={12}>
        <InputLabel id="international">International</InputLabel>
        <Select
                    sx={{ marginBottom: '15px' }}
                    fullWidth
                    required
                    name="international"
                    labelId="international"
                    id="international"
                    error={!!formErrors["international"]}
                    helperText={formErrors["international"] ? formErrors["international"] : ""}
                    value={form.international}
                    // defaultValue={currentItem.hasWarranty}
                    label="international"
                    onChange={(e) => {
                        if(e.target.value === 1){
                          setForm({...form,amount:amount+35,international: e.target.value})
                        }else{
                          setForm({...form,amount:amount,international: e.target.value})
                        }
                      }}
                >
                    <MenuItem value={1}>Yes</MenuItem>
                    <MenuItem value={0}>No</MenuItem>
                </Select></Grid>
        <Grid item xs={6}><InputLabel id="startZipcode">Zipcode</InputLabel><TextField  type="text" disabled={true} value={form.startLocation.locationOfUser.zipcode} onChange={changeHandler} style={{width:"100%"}}  ></TextField></Grid>
        <Grid item xs={6}><InputLabel id="startCity">City</InputLabel><TextField  type="text" disabled={true} value={form.startLocation.locationOfUser.name} onChange={changeHandler} style={{width:"100%"}}  ></TextField></Grid>
        <Grid item xs={12} style={{width:"100%"}}><InputLabel id="startAddress">Address</InputLabel><TextField style={{width:"100%"}}  type="text" disabled={true} value={form.startLocation.address} ></TextField></Grid>
        <Grid item xs={12} style={{width:"100%"}}><InputLabel id="startAddress">Address</InputLabel><TextField style={{width:"100%"}} onChange={(e)=>setForm({...form,endLocation:{locationOfReceiver:form.endLocation.locationOfReceiver,address:e.target.value}})}   type="text"  value={form.endLocation.address}  label="Address" id="address" name="address" ></TextField></Grid>
        <Grid item xs={12} style={{width:"100%"}}><InputLabel id="startAddress">Amount</InputLabel><TextField style={{width:"100%"}} type="number" disabled={true} value={amount+form.international*35} ></TextField></Grid>
        {/* <Grid item xs={6}>
        <InputLabel id="startCity">Currency Converter</InputLabel>
          <Select
                    sx={{ marginBottom: '15px' }}
                    fullWidth
                    required
                    name="endLocation"
                    labelId="endLocation"
                    id="endLocation"
                    error={!!formErrors["endLocation"]}
                    helperText={formErrors["endLocation"] ? formErrors["endLocation"] : ""}
                    value={converted}
                    onChange={(e)=>{
                      setConverted(e.target.value)
                    }}
                    label="endLocation"
                >
                {Object.entries(currency).map((item)=>{
                  return(<MenuItem  value={item[0]}>{item[1]}</MenuItem>)
                  })}
                </Select></Grid> */}
        <Grid item xs={6}>
          <Typography>Converted Amount in Dollars: {convertedAmount+(35*amount/convertedAmount)*form.international} </Typography>
        </Grid>
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
                    value={display}
                    // defaultValue={currentItem.hasWarranty}
                    label="endLocation"
                    onChange={(e) => {
                      setDisplay(e.target.value);
                      console.log(display);
                      setForm({ ...form, endLocation:{locationOfReceiver:e.target.value,address:form.endLocation.address}})
                    }}
                >
                {zipsCities.map((item)=>{return(<MenuItem value={{idzipcode:item.zipcode_idzipcode,idcity:item.city_idcity,name:item.name,zipcode:item.zipcode}}>{item.zipcode} {item.name}</MenuItem>)})}

                </Select></Grid>        
        <Grid item xs={12}><TextField type="text" value={form.message} onChange={changeHandler} style={{width:"100%"}}  label="Message" id="message" name="message"></TextField></Grid>
        <Grid item xs={12}>
        <Button
        style={{margin:"1%",width:"40%",height:"70%"}}        
        variant="contained"
        color="error"
        onClick={()=>{
          setModalOpen(true)
          }}
        >
            Cancel
        </Button>
        <Button
        style={{margin:"1%",width:"40%",height:"70%"}}
        variant="contained"
        onClick={sendAddDeliveryForm}
        color="primary" type="submit"
        >
            Add
        </Button></Grid>

        </Grid>
        </div>
    </Box>
    <DeletePackageDialog handleClose={handleClose} modalOpen={modalOpen} deleteFunction={goBack} />
    </div>
)

}//<TextField type="text" value={form.stratLocation} onChange={changeHandler} style={{width:"100%"}}  label="Strat Location" id="stratLocation" name="stratLocation"></TextField>

