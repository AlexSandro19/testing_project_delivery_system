import { Button, Link } from "@mui/material";
import { Dialog,DialogContent,DialogTitle,DialogContentText,DialogActions } from "@mui/material";
import { TextField } from "@mui/material";
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
export const Auth=({modalOpen,handleClose,form,submitHandler,changeHandler,formErrors})=>{
    const classes= useStyles();
    
    return(
         <form>
          <TextField
            style={{marginBottom:theme.spacing(2)}}
            required={true}
            onChange={changeHandler}
            autoFocus
            value={form.email}
            id="email"
            name="email"
            label="Email"
            type="email"
            fullWidth
            error={!!formErrors["email"]}
            helperText={formErrors["email"] ? formErrors["email"] : ""}
          />
          <TextField
            className={classes.dialog}
            onChange={changeHandler}
            value={form.password}
            id="password"
            name="password"
            label="Password"
            type="password"
            fullWidth
            error={!!formErrors["tag"]}
            helperText={formErrors["tag"] ? formErrors["tag"] : ""}
          />
          <Link
          component={NavLink}
          variant="body2"
          to="/register"
          onClick={handleClose}
          >
            Register
          </Link>
          <div className={classes.buttonGroup}>
          <Button onClick={handleClose} style={{margin:"2px"}} color="error" variant="contained" >Cancel</Button>
          <Button  onClick={submitHandler} style={{margin:"2px"}} type="submit" variant="contained">Login</Button>
          </div>
      </form>  
    )
}