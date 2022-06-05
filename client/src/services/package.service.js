import axios from "axios";

const storageName = "userData";
const createPackageUrl = "/packages/addPackage";
export const createPackageApi =(userId,form)=>{
    return axios.post(createPackageUrl,{userId,form}).then((response)=>response.data).catch((error)=>{
      throw error.response.data;
    })
}
const deletePackageUrl = "/packages/deletePackage";
export const deletePackageApi =(idpackages)=>{
    return axios.post(deletePackageUrl,{idpackages}).then((response)=>response.data).catch((error)=>{
      throw error.response.data;
    })
}