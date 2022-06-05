import { connect } from "react-redux";
import {useState} from "react";
import { useHistory } from "react-router-dom";
import {ViewOrders} from "../components/ViewOrders";
const ViewOrdersPage=({user})=>{
  const history = useHistory();

    return(
      <div style={{marginLeft:"15%"}}>
          <ViewOrders user={user}> </ViewOrders>
      </div>
    )


}
const mapStateToProps = (state) =>({
  user:state.user
  });
export default connect(mapStateToProps,{})(ViewOrdersPage)


