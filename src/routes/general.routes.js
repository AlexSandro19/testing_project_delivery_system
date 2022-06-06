const { Router } = require("express");
const router = Router();
const { check, validationResult } = require("express-validator");
const { executeTransaction,execute } = require("../database/mysql.connector")
const { Driver } = require("../model/driver.model");
const { Vehicle } = require("../model/vehicle.model")
router.get("/getAllZipsAndCities",async(req,res)=>{
    try{
        const response=  await execute("SELECT zip_city.zipcode_idzipcode,zip_city.city_idcity,zipcode.zipcode,city.name from (zip_city JOIN zipcode ON zipcode.idzipcode = zip_city.zipcode_idzipcode) JOIN city ON city.idcity = zip_city.city_idcity");
        if(response.length>0){
            res.status(200).send(response)
        }else{
            throw { message: "Database error" }
        }
    }catch(error){
        console.log(error);
        return res.status(500).json({
            message: "Invalid data",
            errors: [
                { value: error, msg: error.message },
            ],
        });
    }
})

module.exports = router;