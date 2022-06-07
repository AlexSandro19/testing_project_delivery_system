import axios from "axios";

const storageName = "userData";
const createPackageUrl = "/packages/addPackage";
const getAllPackagesUrl = "/packages/getPackages";
const deletePackageUrl = "/packages/deletePackage";
export const createPackageApi =(userId,form)=>{
    const {weight,height,width,depth,fragile,electronics,oddsized} = form;
    return axios.post(createPackageUrl,{userId,weight,height,width,depth,fragile,electronics,oddsized}).then((response)=>response.data).catch((error)=>{
      throw error.response.data;
    })
}

export const getAllPackagesApi = () =>{
  return axios.get(getAllPackagesUrl).then((response)=>response.data).catch((error)=>{
    throw error.response.data;
  })
}

export const deletePackageApi =(idpackages)=>{
    return axios.post(deletePackageUrl,{idpackages}).then((response)=>response.data).catch((error)=>{
      throw error.response.data;
    })
}