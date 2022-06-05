import { connect } from "react-redux";
import { PackageForm } from "../components/PackageForm";
import {useState,useEffect} from "react";
import {registerPackage} from "../redux/actions/package"
import { useHistory } from "react-router-dom";
const AddPackage=({errors,registerPackage})=>{
  const history = useHistory();
  const [form, setForm] = useState({
    weight: "",
    height:"",
    width:"",
    depth:"",
    fragile:false,
    electronics:false,
    oddsized:false,
    receiverId:"",

  });
  const [formErrors,setFormErrors] = useState({}); 
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
  const sendPackageForm= (e)=>{
    e.preventDefault();
    registerPackage(form);
    history.push("/addDelivery");
  }
    return(
      <div style={{marginLeft:"15%"}}>

  
        <PackageForm setForm={setForm} formErrors={formErrors} form={form} sendPackageForm={sendPackageForm} changeHandler={changeHandler}>

        </PackageForm>
      </div>
    )


}
const mapStateToProps = (state) =>({
  errors:state.auth.errors,
  });
export default connect(mapStateToProps,{registerPackage})(AddPackage)