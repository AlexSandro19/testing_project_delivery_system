import { connect } from "react-redux";
import { Delivery } from "../components/Delivery";
import {useState} from "react";
import {registerDelivery} from "../redux/actions/delivery"
import { useHistory } from "react-router-dom";
const AddDelivery=({registerDelivery})=>{
  const history = useHistory();
  const [form, setForm] = useState({
    packageId: "",
    priority:"",
    paymentId:"",
    international:"",
    stratLocation:"",
    endLocation:"",
    message:"",
    estimatedDate:"",
    startDate:"",
    endDate:"",
    uid:"",

  });
  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const sendRegistrationForm= (e)=>{
    e.preventDefault();

    registerDelivery(form);
    history.push("/");
  }
    return(
      <div style={{marginLeft:"15%"}}>

  
        <Delivery form={form} sendRegistrationForm={sendRegistrationForm} changeHandler={changeHandler}>

        </Delivery>
      </div>
    )


}
const mapStateToProps = (state) =>({
   // options:state.NameOfReducer.options
  });
export default connect(mapStateToProps,{registerDelivery})(AddDelivery)