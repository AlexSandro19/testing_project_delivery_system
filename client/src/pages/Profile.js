import { connect } from "react-redux";
import {useState} from "react";
import { useHistory } from "react-router-dom";
import {Profile} from "../components/Profile";
const ProfilePage=({user})=>{
  const history = useHistory();

    return(
      <div style={{marginLeft:"15%"}}>
        <Profile user={user}></Profile>
      </div>
    )


}
const mapStateToProps = (state) =>({
  user:state.user
  });
export default connect(mapStateToProps,{})(ProfilePage)


