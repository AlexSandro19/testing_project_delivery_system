import { connect } from "react-redux";
import { Registration } from "../components/Registration";
import {useState} from "react";
import {registerUser} from "../redux/actions/user"
import { useHistory } from "react-router-dom";
const RegistrationPage=({registerUser,errors})=>{
  const history = useHistory();
  const [form, setForm] = useState({
    email: "",
    password:"",
    firstName:"",
    lastName:"",
    companyName:"",
    phone:"",
    country:"",
    zipCode:"",
    city:"",

  });
  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const sendRegistrationForm= (e)=>{
    e.preventDefault();
    
    registerUser(form);
    if(errors.length ===  0){
    history.push("/");
    }
  }
    return(
      <div style={{marginLeft:"15%"}}>

  
        <Registration form={form} sendRegistrationForm={sendRegistrationForm} changeHandler={changeHandler}>

        </Registration>
      </div>
    )


}
const mapStateToProps = (state) =>({
  errors:state.message.errors,
});
export default connect(mapStateToProps,{registerUser})(RegistrationPage)