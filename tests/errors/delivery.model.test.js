const {Delivery} = require("../../src/model/delivery.model")
const { init } = require("../../src/database/mysql.connector");

describe('Testing the delivery', () => {

    beforeAll(async ()=>{
        init()
     })

     it('checks for errors', async () => {
        const date = new Date("2022-01-01T12:00:00.000")
        const deleteDelivery = new Delivery(
            11,1,1,1,1,1,1,"1",65,date,date,'s9i8cmqr-szw7-kmmj-e3sd-7hu8l5dyheo3'
        )
        
        expect( async () => {
           await Delivery.createDelivery()
          }).toThrow("no password given");       
     });
})