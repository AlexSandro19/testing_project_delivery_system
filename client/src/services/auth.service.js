import axios from "axios";

const storageName = "userData";
const loginUrl = "/users/login";
const registerUrl = "/users/register"
export const loginApi = (email, password) => {
  return axios
    .post(loginUrl, { email, password })
    .then((response) => response.data)
    .catch((error) => {
      throw error.response.data;
    });
};
export const registerApi = (typeOfUser,firstName,secondName,companyName,email,password,confirmPassword,phone,duns,address,city,zipcode) =>{
  return axios.post(registerUrl,{typeOfUser,firstName,secondName,companyName,email,password,confirmPassword,phone,duns,address,city,zipcode}).then((response)=>response.data).catch((error)=>{
    throw error.response.data;
  })
}
export const getLocalAuthToken = () =>
  JSON.parse(localStorage.getItem(storageName));

export const setAuthToken = (token) => {
  localStorage.setItem(storageName, JSON.stringify(token));
};

export const removeAuthToken = () => {
  localStorage.removeItem(storageName);
};
