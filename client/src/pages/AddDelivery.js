import { connect } from "react-redux";
import { Delivery } from "../components/Delivery";
import {useState} from "react";
import {registerDelivery} from "../redux/actions/delivery";
import {deletePackage} from "../redux/actions/package";
import {Loader} from "../components/Loader";
import { useHistory } from "react-router-dom";
const AddDelivery=({registerDelivery,deletePackage,idpackages,successful})=>{
  const history = useHistory();
  const [form, setForm] = useState({
    packageId: idpackages,
    priority:false,
    paymentId:"",
    international:false,
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
  const sendAddDeliveryForm= (e)=>{
    e.preventDefault();
    registerDelivery(form);
    history.push("/");
  }
    if(successful){
      return(
        <div style={{marginLeft:"15%"}}>
  
    
          <Delivery idpackages={idpackages}  form={form} deletePackage={deletePackage} sendAddDeliveryForm={sendAddDeliveryForm} changeHandler={changeHandler}>
  
          </Delivery>
        </div>
      )
    }else{
      return(
        <Loader></Loader>
      )
    }
   
}
const mapStateToProps = (state) =>({
   // options:state.NameOfReducer.options
   idpackages:state.packages.package.idpackages,
   successful:state.packages.successful
  });
export default connect(mapStateToProps,{registerDelivery,deletePackage})(AddDelivery)