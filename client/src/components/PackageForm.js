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

export const PackageForm=({form,sendRegistrationForm,changeHandler})=>{
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
        <Grid item xs={12}><TextField type="text" value={form.weight} onChange={changeHandler} style={{width:"100%"}} required label="Weight" id="weight" name="weight" ></TextField></Grid>
        <Grid item xs={12}><TextField type="text" value={form.height} onChange={changeHandler} style={{width:"100%"}}  required label="Height" id="height" name="height" ></TextField></Grid>
        <Grid item xs={6}><TextField type="text" value={form.width} onChange={changeHandler} style={{width:"100%"}}  required label="Width" id="width" name="width"></TextField></Grid>
        <Grid item xs={6}><TextField type="text" value={form.depth} onChange={changeHandler} style={{width:"100%"}}  label="Depth" id="depth" name="depth"></TextField></Grid>
        <Grid item xs={6}><TextField type="text" value={form.fragile} onChange={changeHandler} style={{width:"100%"}}  label="Fragile" id="fragile" name="fragile"></TextField></Grid>
        <Grid item xs={7}><TextField type="text" value={form.electronics} onChange={changeHandler} style={{width:"100%"}} required label="Electronics" id="electronics" name="electronics"></TextField></Grid>
        <Grid item xs={6}><TextField type="text" value={form.oddsized} onChange={changeHandler} style={{width:"100%"}}  label="Odd Sized" id="oddSized" name="oddSized"></TextField></Grid>
        <Grid item xs={6}><TextField type="text" value={form.receiverId} onChange={changeHandler} style={{width:"100%"}}  label="Receiver" id="reiceiverId" name="receiverId"></TextField></Grid>
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