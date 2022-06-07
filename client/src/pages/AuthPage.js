
import React, { useState, useEffect,useCallback } from "react";
import { connect } from "react-redux";
import { Auth } from "../components/Auth";
import { loginRequest } from "../redux/actions/auth";
import { useHistory } from "react-router-dom";
import {getZipsAndCities} from "../redux/actions/zipcities";

const AuthPage=({getZipsAndCities,requesting,successful,loginRequest,errors})=>{
  const history = useHistory();
  const [modalOpen, setModalOpen] = useState(true);
  const requestAllZipsAndCities = useCallback(()=>{
    getZipsAndCities();
  },[])
  useState(()=>{
    requestAllZipsAndCities()
  },[requestAllZipsAndCities])
  
    const [formErrors, setFormErrors] = useState([]);
    // useEffect(()=>{
    //   if(domain){
    //     setForm({
    //       domain:domain,
    //       tag:"",
    //       location_language:"",
    //     })
    //   }
    // },[domain])
     useEffect(() => {
      if (errors) {
        
        errors.forEach((error) => {
    
           setFormErrors((i) => ({ ...i, [error.param]: error.msg }));
         });
       }
     }, [errors]);
    const [form, setForm] = useState({
        email: "",
        password:"",
      });
    const handleClose = () => {
     setForm({
       email:"",
       password:"",
     })
    };  
      const changeHandler = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
      };
      const submitHandler = async (event) => {
        event.preventDefault();
        loginRequest(form);
        //handleClose(false);
        if(formErrors.length ===  0) {
          history.push("/profile")
        }
        
        setFormErrors({});
      };


    return(
    <Auth
    modalOpen={modalOpen}
    handleClose={handleClose}
    changeHandler={changeHandler}
    submitHandler={submitHandler}
    form={form}
    formErrors={formErrors}
    />
    )
    

}
const mapStateToProps = (state) => {
    return {
      requesting:state.auth.requesting,
      successful:state.auth.successful,
      errors:state.auth.errors,
    }
}
export default connect(mapStateToProps,{loginRequest,getZipsAndCities})(AuthPage)
