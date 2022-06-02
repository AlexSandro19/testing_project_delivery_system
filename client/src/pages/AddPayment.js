import { connect } from "react-redux";
import { Payment } from "../components/Payment";
import {useState} from "react";
import {registerPayment} from "../redux/actions/payment"
import { useHistory } from "react-router-dom";
const AddPayment=({registerPayment})=>{
  const history = useHistory();
  const [form, setForm] = useState({
    idpayment: "",
    typeofpayment:"",
    amount:"",
    payed:"",
    prepaid:"",
    transactionid:"",
    billingAddress:"",

  });
  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const sendRegistrationForm= (e)=>{
    e.preventDefault();

    registerPayment(form);
    history.push("/");
  }
    return(
      <div style={{marginLeft:"15%"}}>

  
        <Payment form={form} sendRegistrationForm={sendRegistrationForm} changeHandler={changeHandler}>

        </Payment>
      </div>
    )


}
const mapStateToProps = (state) =>({
    
  });
export default connect(mapStateToProps,{registerPayment})(AddPayment)