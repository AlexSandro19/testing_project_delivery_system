import { AppBar, ButtonBase, } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { connect } from "react-redux";
import { Loader } from "./Loader";
import {unsetUser} from "../redux/actions/user"


const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
    appBar: {
      zIndex: theme.zIndex + 1,
    },
   
  }));
  

 const Navigation =({requesting,successful,errors,loginRequest,unsetUser})=>{

  const drawerWidth = 240;
    
    const classes = useStyles();
    const [modalOpen, setModalOpen] = useState(false);
    const logOut = ()=>{
      unsetUser(false);
        };
    const handleClickOpen = () => {
      setModalOpen(true);
    };
    const handleClose = () => {
      setModalOpen(false);
    };
    if(requesting){
      return(<Loader></Loader>)
    }
    if(successful){
      return(<>
        <AppBar position="sticky" style={{backgroundColor:"#C4C4C4"}}  className={classes.appBar}  sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            
            <Toolbar >
            <Typography variant="h5" className={classes.grow}>
            <ButtonBase
            component={NavLink}
            to="/profile"
            activeClassName="active"
            >
            <Typography variant="h5" className={classes.grow}>
            Post Nord
            </Typography>
            </ButtonBase>
            </Typography>
            <Button
            component={NavLink}
            className={classes.button}
            color="inherit"
            onClick={logOut}
            activeClassName="active"
            to="/"
            >
            Logout
            </Button>
            </Toolbar>
        </AppBar>
        </>
        )
    }
    return(
        <>
        <AppBar position="sticky" style={{backgroundColor:"#C4C4C4"}}  className={classes.appBar}  sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            
            
            <Toolbar>
      
            <Typography variant="h5" className={classes.grow}>
            <ButtonBase
            component={NavLink}
            to="/"
            activeClassName="active"
            >
            <Typography variant="h5" className={classes.grow}>
            Post Nord
            </Typography>
            </ButtonBase>
            </Typography>
            </Toolbar>
        </AppBar>

        
      
        </>
    )

}

const mapStateToProps = (state) => ({
    successful:state.auth.successful,
    requesting: state.auth.requesting,
    errors: state.auth.errors,
});

export default connect(mapStateToProps, {unsetUser })(
  Navigation
);