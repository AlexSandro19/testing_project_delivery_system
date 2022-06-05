import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { TextField,Grid, Typography,Button,Select,MenuItem,InputLabel } from "@mui/material";
import { NavLink,useHistory } from "react-router-dom";
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

export const PackageForm=({form,setForm,formErrors,sendPackageForm,changeHandler})=>{
const classes=useStyles();
const history = useHistory();

return(
    <div>
       
    <Box component="form"
    autoComplete="off"
    width="1000px"
    >
        
        <div>
        <Grid container spacing={4}>

        <Grid item xs={12}><Typography style={{width:"100%",textAlign:"center"}} variant="h2">Add Package</Typography></Grid>
        <Grid item xs={12}><TextField type="number" value={form.weight} onChange={changeHandler} style={{width:"100%"}} required label="Weight" id="weight" name="weight" ></TextField></Grid>
        <Grid item xs={12}><TextField type="number" value={form.height} onChange={changeHandler} style={{width:"100%"}}  required label="Height" id="height" name="height" ></TextField></Grid>
        <Grid item xs={6}><TextField type="number" value={form.width} onChange={changeHandler} style={{width:"100%"}}  required label="Width" id="width" name="width"></TextField></Grid>
        <Grid item xs={6}><TextField type="number" value={form.depth} onChange={changeHandler} style={{width:"100%"}}  label="Depth" id="depth" name="depth"></TextField></Grid>
        <Grid item xs={6}>
        <InputLabel id="fragile">Fragile</InputLabel>
        <Select
                    sx={{ marginBottom: '15px' }}
                    fullWidth
                    required
                    name="fragile"
                    labelId="fragile"
                    id="fragile"
                    error={!!formErrors["fragile"]}
                    helperText={formErrors["fragile"] ? formErrors["fragile"] : ""}
                    value={form.fragile}
                    // defaultValue={currentItem.hasWarranty}
                    label="Fragile"
                    onChange={(e) => setForm({ ...form, fragile: e.target.value })}
                >
                    <MenuItem value={true}>Yes</MenuItem>
                    <MenuItem value={false}>No</MenuItem>
                </Select>
        </Grid>
        <Grid item xs={6}>
        <InputLabel id="electronics">Electronics</InputLabel>
        <Select
                    sx={{ marginBottom: '15px' }}
                    fullWidth
                    required
                    name="electronics"
                    labelId="electronics"
                    id="electronics"
                    error={!!formErrors["electronics"]}
                    helperText={formErrors["electronics"] ? formErrors["electronics"] : ""}
                    value={form.electronics}
                    // defaultValue={currentItem.hasWarranty}
                    label="Electronics"
                    onChange={(e) => setForm({ ...form, electronics: e.target.value })}
                >
                    <MenuItem value={true}>Yes</MenuItem>
                    <MenuItem value={false}>No</MenuItem>
                </Select></Grid>
        <Grid item xs={6}>
        <InputLabel id="oddsized">Oddsize</InputLabel>
        <Select
                    sx={{ marginBottom: '15px' }}
                    fullWidth
                    required
                    name="oddsized"
                    labelId="oddsized"
                    id="oddsized"
                    error={!!formErrors["oddsized"]}
                    helperText={formErrors["oddsized"] ? formErrors["oddsized"] : ""}
                    value={form.oddsized}
                    // defaultValue={currentItem.hasWarranty}
                    label="Oddsize"
                    onChange={(e) => setForm({ ...form, oddsized: e.target.value })}
                >
                    <MenuItem value={true}>Yes</MenuItem>
                    <MenuItem value={false}>No</MenuItem>
                </Select>
                </Grid>
        <Grid item xs={12}>
        <Button
        style={{margin:"1%",width:"40%",height:"70%"}}
        variant="contained"
        color="error"
        onClick={()=>{history.push("/profile")}}
        >
            Cancel
        </Button>
        <Button
        style={{margin:"1%",width:"40%",height:"70%"}}
        variant="contained"
        onClick={sendPackageForm}
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