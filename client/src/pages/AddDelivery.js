import { connect } from "react-redux";
import { Delivery } from "../components/Delivery";
import {useState,useEffect,useCallback} from "react";
import {registerDelivery} from "../redux/actions/delivery";
import {deletePackage} from "../redux/actions/package";
import {convertCurrency} from "../redux/actions/currency";
import {Loader} from "../components/Loader";
import { useHistory } from "react-router-dom";
const AddDelivery=({newAmount,convertCurrency,currency,createdPackage,zipsCities,user,errors,registerDelivery,deletePackage,idpackages,successful})=>{
  const history = useHistory();
  const locationOfUser = zipsCities.find((item)=>item.zipcode_idzipcode === user.zipcode && item.city_idcity === user.cityId)

  const amount = createdPackage.amount;
  const [formErrors,setFormErrors] = useState([]);
  const [form, setForm] = useState({});

  const [convertedAmount,setConvertedAmount] = useState(0);
  // const convert =useCallback(()=>{
  //   console.log(amount);
  //   //convertCurrency(createdPackage.amount,'usd')
  // },[amount])
  
  const loadState = useCallback(() =>{
    console.log(newAmount);
  
    setConvertedAmount(newAmount);
  
    setForm({
      amount:amount,
      priority:0,
      international:0,
      startLocation:{locationOfUser:locationOfUser,address:user.address},
      endLocation:{locationOfReceiver:{idzipcode:"",idcity:"",name:"",zipcode:""},address:""},
      message:""
    })
  },[amount,newAmount])
  const [display,setDisplay] = useState();
  useEffect(() => {
    loadState();
    // convert();
  },[])
  useEffect(() => {
    if (errors) {
    errors.forEach((error) => {
       console.log(error);
        setFormErrors((i) => ({ ...i, [error.param]: error.msg }));
      });
    }
 
  }, [errors]);
  
  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const sendAddDeliveryForm= (e)=>{
    e.preventDefault();
    const {amount,priority,international,startLocation,endLocation,message} = form;
    registerDelivery({idpackages,amount,priority,international,startLocation,endLocation,message});
    if(formErrors.length ===  0){
      history.push("/profile");
    }
  }
    if(successful && form.endLocation){
      return(
        <div style={{marginLeft:"15%"}}>
  
    
          <Delivery
          newAmount={newAmount}
          display={display}
          setDisplay={setDisplay}
          convertedAmount={convertedAmount}
          currency={currency} 
          amount={amount} 
          form={form} 
          zipsCities={zipsCities} 
          setForm={setForm} 
          idpackages={idpackages}
          formErrors={formErrors}  
          deletePackage={deletePackage} 
          sendAddDeliveryForm={sendAddDeliveryForm} 
          changeHandler={changeHandler}>
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
   createdPackage:state.packages.packages,
   zipsCities:state.zipcities.zips_cities,
   user:state.user,
   amount:state.packages.packages.amount,
   idpackages:state.packages.packages.idpackages,
   successful:state.packages.successful,
   currency:state.currency.currency,
   errors:state.message.errors,
   newAmount:state.currency.newAmount
  });
export default connect(mapStateToProps,{registerDelivery,deletePackage,convertCurrency})(AddDelivery)