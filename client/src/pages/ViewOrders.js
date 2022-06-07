import { connect } from "react-redux";
import {useState,useEffect,useCallback} from "react";
import { useHistory } from "react-router-dom";
import {ViewOrders} from "../components/ViewOrders";
import {Loader} from "../components/Loader";
import {requestDeliveries} from "../redux/actions/delivery";
const ViewOrdersPage=({user,requestDeliveries,deliveries,successful})=>{
  const history = useHistory();
  const requestAllDeliveries = useCallback(()=>{
    requestDeliveries();
  },[])
  useEffect(()=>{
    requestAllDeliveries()
  },[requestAllDeliveries])
  console.log(deliveries);
  if(successful){
    
    return(
      <div style={{marginLeft:"15%"}}>
          <ViewOrders user={user} deliveries={deliveries}> </ViewOrders>
      </div>
    )
  }else{
    return(
      <Loader></Loader>
    )
  }


}
const mapStateToProps = (state) =>({
  user:state.user,
  deliveries:state.delivery.deliveries,
  successful:state.delivery.successful
  });
export default connect(mapStateToProps,{requestDeliveries})(ViewOrdersPage)


