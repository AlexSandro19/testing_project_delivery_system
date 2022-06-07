import { Dialog,DialogTitle,DialogActions,DialogContent, DialogContentText, Button} from "@mui/material"
import { useState } from "react";
export  const DeletePackageDialog = ({text,handleClose,modalOpen,deleteFunction})=>{
 
    return(
            <Dialog
            open={modalOpen}
            onClose={handleClose}   
            aria-labelledby="form-dialog-title"
            >
            <DialogTitle id="form-dialog-title">Delete package {text}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Going back will delete the package you created. 
                    Are you sure you want to delete this package {text}?
                </DialogContentText>

            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="secondary">CANCEL</Button>
                <Button  variant="contained"
            color="primary"
            type="submit"
            onClick={deleteFunction}
            >DELETE</Button>
            </DialogActions>
            </Dialog>
    )

}