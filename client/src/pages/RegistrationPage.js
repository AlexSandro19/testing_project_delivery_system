import { connect } from "react-redux";
import { Registration } from "../components/Registration";
import {useState,useEffect} from "react";
import {registerUser} from "../redux/actions/user"
import { useHistory } from "react-router-dom";
const RegistrationPage=({zipsCities,registerUser,errors,})=>{
  const history = useHistory();
  const locationOfUser = zipsCities
  const [form, setForm] = useState({
    firstName:'',
    secondName:'',
    companyName:'',
    email:'',
    password:'',
    confirmPassword:'',
    address:'',
    phone:'',
    duns:'',
    locationOfUser:{locationOfUser:{idcity:"",zipcode:"",name:"",idzipcode:""},},
  });
  
  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log(form)
  };
  const [formErrors, setFormErrors] = useState([]);
   useEffect(() => {
    if (errors) {
      
      errors.forEach((error) => {
  
         setFormErrors((i) => ({ ...i, [error.param]: error.msg }));
       });
     }
   }, [errors]);
  const sendRegistrationForm= (e)=>{
    e.preventDefault();
    
    registerUser(form);
    if(errors.length ===  0){
    history.push("/");
    }
  }
    return(
      <div style={{marginLeft:"15%"}}>

  
        <Registration zipsCities={zipsCities} setForm={setForm} formErrors={formErrors} form={form} sendRegistrationForm={sendRegistrationForm} changeHandler={changeHandler}>

        </Registration>
      </div>
    )


}
const mapStateToProps = (state) =>({
  errors:state.message.errors,
  zipsCities:state.zipcities.zips_cities,
  user:state.user
});
export default connect(mapStateToProps,{registerUser})(RegistrationPage)