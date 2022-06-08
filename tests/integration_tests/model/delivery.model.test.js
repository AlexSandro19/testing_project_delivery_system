
const { Delivery } = require("../../../src/model/delivery.model")
const { init, end } = require("../../../src/database/mysql.connector");

describe('Testing the delivery', () => {

   let someCreatedDelivery;

   beforeAll(async () => {
      init()
   })

   afterAll(() => {
      end()
   });


   it('gets All deliveries', async () => {
      const deliveries = await Delivery.getAllDeliveries()
      expect(deliveries.length).toBeGreaterThan(0)
   });


   it(' adds delivery', async () => {
      const date = new Date("2022-01-01T12:00:00.000")


      //const TestableDelivery = new Delivery(null,1,1,1,1,1,1,"1",date,date,date,null)
      const newDelivery = new Delivery(
         null, 1, 1, 1, 1, 1, 1, "1", date, date, date, null
      )

      // console.log("newDelivery",newDelivery)

      const { createdDelivery } = await Delivery.createDelivery(newDelivery)
      // console.log("when we get createdDelivery :   ",createdDelivery)
      const exctractedDelivery = await Delivery.getDelivery(createdDelivery.iddeliveries)
      // console.log("when we get exctractedDelivery :   ",exctractedDelivery)
      expect(createdDelivery).toEqual(exctractedDelivery)

      someCreatedDelivery = createdDelivery
      // console.log("someCreatedDelivery: ", someCreatedDelivery)

   });


   it(' updates delivery', async () => {
      const date = new Date("2022-01-01T12:00:00.000")

      let generatedMessage = ""
      const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
      for (let index = 0; index < 15; index++) {
         const generateIndex = Math.floor(Math.random() * 26) // generate number 0-26
         generatedMessage += alphabet[generateIndex]
      }
      someCreatedDelivery.message = generatedMessage
      // console.log("when we update delivery in updates delivery someCreatedDelivery:   ",someCreatedDelivery)
      const { updatedDelivery } = await Delivery.updateDelivery(someCreatedDelivery)
      // console.log("when we update delivery in updates delivery:   ",updatedDelivery)
      const exctractedDelivery = await Delivery.getDelivery(updatedDelivery.iddeliveries)
      // const delete2Delivery = await Delivery.deleteDelivery(createdDelivery.iddeliveries)
      // console.log("the get one",exctractedDelivery)
      expect(updatedDelivery).toEqual(exctractedDelivery)
   });


   it(' deletes delivery', async () => {
      const date = new Date("2022-01-01T12:00:00.000")

      const { deletedDelivery } = await Delivery.deleteDelivery(someCreatedDelivery.iddeliveries)
      // console.log("when we update delivery :   ",deletedDelivery)
      //const exctractedDelivery = await Delivery.getDelivery(updatedDelivery.iddeliveries)
      // const delete2Delivery = await Delivery.deleteDelivery(createdDelivery.iddeliveries)

      expect(deletedDelivery).toEqual(someCreatedDelivery)
   });

})
