import { connect } from "react-redux";
import {useState,useEffect,useCallback} from "react";
import { useHistory } from "react-router-dom";
import {ViewOrders} from "../components/ViewOrders";
import {requestDeliveries} from "../redux/actions/delivery";
const ViewOrdersPage=({user,requestDeliveries})=>{
  const history = useHistory();
  const requestAllDeliveries = useCallback(()=>{
    requestDeliveries();
  },[])
  useEffect(()=>{
    requestAllDeliveries()
  },[requestAllDeliveries])
    return(
      <div style={{marginLeft:"15%"}}>
          <ViewOrders user={user}> </ViewOrders>
      </div>
    )


}
const mapStateToProps = (state) =>({
  user:state.user
  });
export default connect(mapStateToProps,{requestDeliveries})(ViewOrdersPage)


