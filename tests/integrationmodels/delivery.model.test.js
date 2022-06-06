
const {Delivery} = require("../../src/model/delivery.model")
const { init } = require("../../src/database/mysql.connector");

describe('Testing the delivery', () => {
  
let someCreatedDelivery;

    beforeAll(async ()=>{
       init()
    })
    it('gets All deliveries', async () => {
       const deliveries = await Delivery.getAllDeliveries()
       expect(deliveries.length).toBeGreaterThan(0)
    });
    it(' adds delivery', async () => {
      const date = new Date("2022-01-01T12:00:00.000")
      
      
      //const TestableDelivery = new Delivery(null,1,1,1,1,1,1,"1",date,date,date,null)
      const newDelivery = new Delivery(
         null,1,1,1,1,1,1,"1",date,date,date,null
     )

     console.log("newDelivery",newDelivery)
         
      const {createdDelivery} = await Delivery.createDelivery(newDelivery)
      console.log("when we get delivery :   ",createdDelivery)
      const exctractedDelivery = await Delivery.getDelivery(createdDelivery.iddeliveries)
      console.log("when we get delivery :   ",exctractedDelivery)
      expect(createdDelivery).toEqual(exctractedDelivery)
      
      someCreatedDelivery = createdDelivery
      
      
   });


   it(' updates delivery', async () => {
      const date = new Date("2022-01-01T12:00:00.000")
   
 
      const {updatedDelivery} = await Delivery.updateDelivery(someCreatedDelivery)
      console.log("when we update delivery :   ",updatedDelivery)
      const exctractedDelivery = await Delivery.getDelivery(updatedDelivery.iddeliveries)
     // const delete2Delivery = await Delivery.deleteDelivery(createdDelivery.iddeliveries)
      console.log("the get one",exctractedDelivery)
      expect(updatedDelivery).toEqual(exctractedDelivery)
   });

   
   it(' deletes delivery', async () => {
      const date = new Date("2022-01-01T12:00:00.000")
    
      const {deletedDelivery} = await Delivery.deleteDelivery(someCreatedDelivery.iddeliveries)
      console.log("when we update delivery :   ",deletedDelivery)
      //const exctractedDelivery = await Delivery.getDelivery(updatedDelivery.iddeliveries)
     // const delete2Delivery = await Delivery.deleteDelivery(createdDelivery.iddeliveries)
     
      expect(deletedDelivery).toEqual(someCreatedDelivery)
   });
    afterEach(()=>{
      // app.close();
    })
})
