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

export const Payment=({form,sendRegistrationForm,changeHandler})=>{
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
        <Grid item xs={12}><TextField type="text" value={form.typeofpayment} onChange={changeHandler} style={{width:"100%"}} required label="Type of payment" id="typeofpayment" name="typeofpayment" ></TextField></Grid>
        <Grid item xs={12}><TextField type="text" value={form.amount} onChange={changeHandler} style={{width:"100%"}}  required label="Amount" id="amount" name="amount" ></TextField></Grid>
        <Grid item xs={6}><TextField type="text" value={form.payed} onChange={changeHandler} style={{width:"100%"}}  required label="Payed" id="payed" name="payed"></TextField></Grid>
        <Grid item xs={6}><TextField type="text" value={form.prepaid} onChange={changeHandler} style={{width:"100%"}}  label="Prepaid" id="prepaid" name="prepaid"></TextField></Grid>
        <Grid item xs={6}><TextField type="text" value={form.transactionid} onChange={changeHandler} style={{width:"100%"}}  label="Transaction id" id="transactionid" name="transactionid"></TextField></Grid>
        <Grid item xs={7}><TextField type="text" value={form.billingAddress} onChange={changeHandler} style={{width:"100%"}} required label="Billing Address" id="billingAddress" name="billingAddress"></TextField></Grid>
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

}