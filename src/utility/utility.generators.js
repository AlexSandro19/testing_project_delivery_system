/**
 * Generates a string with length 4 with characters or numbers from `[a-z],[A-Z],[0-9]
 * @param {Number} length of the string that we want returned.
 * @returns {String} A semi-randomly generated string
 */
const characterGenerator = (length) => {
    if (typeof length == "number" && (length > 0 && length < 12) && Number.isInteger(length)){
       return Array(length+1).join((Math.random().toString(36)+'00000000000000000').slice(2, 18)).slice(0, length)
    }else{
        return null
    }
};
/**
 * Generates a number between 0 and 9 using recursion
 * @param {Number}   length of the string that we want returned. Based upon length that is how many recursions will occur.
 * @returns {String}  Returns a semi-randomly generated number-only string using numbers between 0 and 9
 */
const numberGenerator = (length) => {

    if (typeof length == "number" && (length > 0 && length < 6) && Number.isInteger(length)){
        let result = ""
        for (let index = 0; index < length; index++) {
            const newNumber = Math.floor((Math.random()*10))
            result += newNumber
        }
        return result;
    }else{
        return null;
    }
    
}
/**
 * 
 * @param {Number} dateToCheck is a number which is gotten from the date (today's date and month)
 * @returns {String}  Returns a string if the `dateToCheck` is below 10 then the string starts with a 0 if not the `dateToCheck` is returned.
 */
const sizeCheck = (dateToCheck) =>{
    if(dateToCheck < 10){
        return "0" + dateToCheck;
    }else{
        return dateToCheck;
    }
}
/**
 * 
 * Generates the end portion of the transaction id string based on today's date'
 * @returns {String}  Returns a date string with the format ddmmyy
 */
const transactionDateGenerator= ()=>{
    const today = new Date();
    const date = today.getDate();
    const month = today.getMonth()+1;
    const year = today.getFullYear()+"";
    return sizeCheck(date)+""+sizeCheck(month)+""+year.substring(2);
   
}


module.exports ={
    characterGenerator,
    numberGenerator,
    transactionDateGenerator
}