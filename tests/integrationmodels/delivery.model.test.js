
const {Delivery} = require("../../src/model/delivery.model")
const { init } = require("../../src/database/mysql.connector");

describe('Testing the delivery', () => {
  
    beforeAll(async ()=>{
       init()
    })
    it('gets All deliveries', async () => {
       const deliveries = await Delivery.getAllDeliveries()
       expect(deliveries.length).toEqual(4)
    });
    it(' adds delivery', async () => {
      const date = new Date("2022-01-01T12:00:00.000")
      
      
      
      const newDelivery = new Delivery(
         null,1,1,1,1,1,1,"1",date,date,date,null
     )
     console.log("newDelivery",newDelivery)
    
      const {createdDelivery} = await Delivery.createDelivery(newDelivery)
      const exctractedDelivery = await Delivery.getDelivery(createdDelivery.iddeliveries)
      console.log("when we get delivery :   ",exctractedDelivery)
     // const delete2Delivery = await Delivery.deleteDelivery(createdDelivery.iddeliveries)
      //console.log("the deleted one",delete2Delivery)
      expect(createdDelivery).toEqual(exctractedDelivery)
   });


   it(' updates delivery', async () => {
      const date = new Date("2022-01-01T12:00:00.000")
      
      
      
      const updDelivery = new Delivery(
         14,2,2,1,1,1,1,"1",date,date,date,'q5pujvtc-udfd-hznn-ndtl-7qt2z9nq8ntk'
     )
     console.log("updDelivery",updDelivery)
    
      const {updatedDelivery} = await Delivery.updateDelivery(updDelivery)
      console.log("when we update delivery :   ",updatedDelivery)
      const exctractedDelivery = await Delivery.getDelivery(updatedDelivery.iddeliveries)
     // const delete2Delivery = await Delivery.deleteDelivery(createdDelivery.iddeliveries)
      console.log("the get one",exctractedDelivery)
      expect(updatedDelivery).toEqual(exctractedDelivery)
   });

   
   it(' deletes delivery', async () => {
      const date = new Date("2022-01-01T12:00:00.000")

      
      const deleteDelivery = new Delivery(
         11,1,1,1,1,1,1,"1",date,date,date,'s9i8cmqr-szw7-kmmj-e3sd-7hu8l5dyheo3'
     )
    
      const {deletedDelivery} = await Delivery.deleteDelivery(deleteDelivery.iddeliveries)
      console.log("when we update delivery :   ",deletedDelivery)
      //const exctractedDelivery = await Delivery.getDelivery(updatedDelivery.iddeliveries)
     // const delete2Delivery = await Delivery.deleteDelivery(createdDelivery.iddeliveries)
     
      expect(deletedDelivery[0]).toEqual(deleteDelivery)
   });
    afterEach(()=>{
      // app.close();
    })
})
