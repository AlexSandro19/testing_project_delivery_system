import { connect } from "react-redux";
import {useState,useCallback} from "react";
import { useHistory } from "react-router-dom";
import {Profile} from "../components/Profile";
import {getZipsAndCities} from "../redux/actions/zipcities";
const ProfilePage=({user,getZipsAndCities})=>{
    const history = useHistory();
   
    const requestAllZipsAndCities = useCallback(()=>{
      getZipsAndCities();
    },[])
    useState(()=>{
      requestAllZipsAndCities()
    },[requestAllZipsAndCities])
    return(
      <div style={{marginLeft:"15%"}}>
        <Profile user={user}></Profile>
      </div>
    )


}
const mapStateToProps = (state) =>({
  user:state.user,
  errors:state.message.errors,

  });
export default connect(mapStateToProps,{getZipsAndCities})(ProfilePage)


