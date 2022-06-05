import {useState,useEffect} from "react";
import { useHistory } from "react-router-dom";
import {UpdateProfile} from "../components/UpdateProfile";
import { connect } from "react-redux";
import {updateUser} from "../redux/actions/user";
const UpdateProfilePage=({user,updateUser,errors}) =>{
  const history = useHistory();
  const [formErrors,setFormErrors] = useState({}); 
  useEffect(() => {
    if (errors) {
    errors.forEach((error) => {
       console.log(error);
        setFormErrors((i) => ({ ...i, [error.param]: error.msg }));
      });
    }
  }, [errors]);
  const [form, setForm] = useState({
    email: user.email,
    firstName:user.firstName,
    secondName:user.secondName,
    companyName:user.companyName,
    typeOfUser:user.typeOfUser,
    password:"",
    passwordConfirm:"",
    cityId:user.cityId,
    zipcode:user.zipcode,
    duns:user.duns,
    phone:user.phone,
    address:user.address,  
  });
  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const sendProfileUpdateForm= (e)=>{
    e.preventDefault();
    console.log(form);
    updateUser(user.token,user.exp,form.email,form.firstName,form.secondName,form.typeOfUser,form.password,form.passwordConfirm,form.cityId,form.zipcode,form.duns,form.phone,form.address,form.companyName);
    history.push("/profile");
  }
    return(
      <div style={{marginLeft:"15%"}}>
          <UpdateProfile changeHandler={changeHandler} sendProfileUpdateForm={sendProfileUpdateForm} formErrors={formErrors} form={form} user={user} updateUser={updateUser} errors={errors}> </UpdateProfile>
      </div>
    )


}
const mapStateToProps = (state) =>({
  user:state.user,
  errors:state.errors,
  });
export default connect(mapStateToProps,{updateUser})(UpdateProfilePage)


