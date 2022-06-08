import { TextField,Typography,Card,CardContent } from "@mui/material";
import Collapse from '@mui/material/Collapse';
import { Button, Grid, Link } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useState} from "react";
import {ExpandMore} from "./ExpandMore";
export const OrderCard = ({delivery})=>{
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
      setExpanded(!expanded);
      };
      console.log(delivery);
      console.log(delivery.deliveryInfo.start_date.toString());
    return(
        <div>
            <Card>
            <Typography>

            OrderId: {delivery.deliveryInfo.uid}-31252534
            </Typography>
            <Typography>
            Start date of order:    {new Date(delivery.deliveryInfo.end_date.toString()).toISOString()}
            </Typography>
            <Typography>
            End Date of the order:  {new Date(delivery.deliveryInfo.start_date.toString()).toISOString()} 
            </Typography>
            <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Grid container spacing={1}>
            <Grid item xs={12}>
            <Typography>
               Estimated date for arrival: {new Date(delivery.deliveryInfo.estimated_date.toString()).toISOString()} 
            </Typography>
            </Grid>
            <Grid item xs={6}>
            <Typography >Width:{delivery.packageInfo.width} cm</Typography>   
            </Grid>
      
            <Grid item xs={6}>

            <Typography >Height:{delivery.packageInfo.height} cm</Typography>
            </Grid>
            <Grid item xs={6}>
            <Typography >Weight:{delivery.packageInfo.weight} kg</Typography>
            </Grid>
            <Grid item xs={6}>
            <Typography >Depth: {delivery.packageInfo.depth} cm</Typography>
            </Grid>
            <Grid item xs={6}>
            <Typography >Fragile: {delivery.packageInfo.fragile ? (<> Yes </>):(<> No </>)}</Typography>
            </Grid>
            <Grid item xs={6}>
            <Typography >Electronics: {delivery.packageInfo.electronics ? (<> Yes </>):(<> No </>)}</Typography>
            </Grid>
            <Grid item xs={6}>
            <Typography >Oddsize: {delivery.deliveryInfo.oddsized ? (<> Yes </>):(<> No </>)}</Typography>
            </Grid>
            <Grid item xs={6}>
            <Typography >International: {delivery.deliveryInfo.international ? (<> Yes </>):(<> No </>)}</Typography>
            </Grid>
            <Grid item xs={6}>
            <Typography >Priority: {delivery.deliveryInfo.priority ? (<> Yes </>):(<> No </>)}</Typography>
            </Grid>
            <Grid item xs={12}>
            <Typography >Message: {delivery.deliveryInfo.message}</Typography>
            </Grid>
            </Grid>
          </CardContent>
        </Collapse>
            </Card>
        </div>
    )
}