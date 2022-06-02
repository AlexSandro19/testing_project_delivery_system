import { connect } from "react-redux";
import { PackageForm } from "../components/PackageForm";
import {useState} from "react";
import {registerPackage} from "../redux/actions/package"
import { useHistory } from "react-router-dom";
const AddPackage=({registerPackage})=>{
  const history = useHistory();
  const [form, setForm] = useState({
    weight: "",
    height:"",
    width:"",
    depth:"",
    fragile:"",
    electronics:"",
    oddsized:"",
    receiverId:"",

  });
  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const sendRegistrationForm= (e)=>{
    e.preventDefault();

    registerPackage(form);
    history.push("/");
  }
    return(
      <div style={{marginLeft:"15%"}}>

  
        <PackageForm form={form} sendRegistrationForm={sendRegistrationForm} changeHandler={changeHandler}>

        </PackageForm>
      </div>
    )


}
const mapStateToProps = (state) =>({
    
  });
export default connect(mapStateToProps,{registerPackage})(AddPackage)