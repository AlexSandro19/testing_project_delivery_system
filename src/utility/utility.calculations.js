/**
 * 
 * @param {Number} height 
 * @param {Number} width 
 * @param {Number} depth 
 * @returns 

 */
const calculateVolume = (height, width, depth) => { // values is in cm (10,10,1) = 100cm3 = 
    if (checkIfPosNumber(height) && checkIfPosNumber(width) && checkIfPosNumber(depth)){
        const result = height * depth * width; 
        if (result > 10000000){
            return null;
        }else if (result > 1 && result <= 10000000){
            return result;
        }else if (result > 0 && result <= 1){
            return 1;
        }
    }else{
        return null
    }
}
/**
 * 
 * @param {Number} volume 
 * @returns 

 */
const volumePricer = (volume) => {
    if(volume < 800){
        return 0;
    }
    else if(volume <= 12500){
        return 0.5;
    }
    else if(volume > 12500){
        return 1;
    }
}
/**
 * 
 * @param {Number} weight 
 * @returns 

 */
const weightPricer = (weight)=>{
        if(weight < 3){
            return 0;
        }
        else if(weight <= 5){
            return 0.5;
        }
        else if(weight > 5){
            return 1;
        }
}
/**
 * The function calculates the amount that has to be payed for the delivery of the package based on a couple of factors.
 * The base amount to pay is 35DKK for a delivery.
 * @param {Number} volume Volume of the package,retrieved from a `package` object
 * @param {Number} weight Weight of the package,retrieved from a `package` object
 * @param {Boolean} international Will the package be internationalized,retrieved from a `delivery` object
 * @param {Boolean} electronics Does the package contain electronics,retrieved from a `package` object
 * @param {Boolean} oddsized Is the form of the package oddsized,retrieved from a `package` object
 * @param {Boolean} fragile Are there any fragile things inside the package,retrieved from a `package` object
 * @returns {Number} The price after calculations for how much to pay.
 */
const calculateAmount = (volume,weight,international,electronics,oddsized,fragile)=>{
    const checkVolume = checkIfPosNumber(volume) && volume <= 10000000
    const checkWeight = checkIfPosNumber(weight) && weight <= 50
    const checkInternational = (international === 1 || international === 0)
    const checkElectronics = (electronics === 1 || electronics === 0)
    const checkOddsized = (oddsized === 1 || oddsized === 0)
    const checkFragile = (fragile === 1 || fragile === 0)
    //35 is 35 dkk for a standard delivery price
    if (checkVolume && checkWeight && checkInternational && checkElectronics && checkOddsized && checkFragile){
        const baseAmountToPay= 35;
        return baseAmountToPay+(volumePricer(volume)+weightPricer(weight)+international+electronics+oddsized+fragile)*baseAmountToPay
    }else{
        return null
    }
}

const checkIfPosNumber = (value) => {
    if (typeof value == "number" && value > 0){
        return true
    }else{
        return false
    }
}

module.exports = {
    calculateVolume,
    calculateAmount
}