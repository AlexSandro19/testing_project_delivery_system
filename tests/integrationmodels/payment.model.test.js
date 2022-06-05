
const {Payment} = require("../../src/model/payment.model")
const { init } = require("../../src/database/mysql.connector");
describe('Testing the payment', () => {
  
    beforeAll(async ()=>{
     init()
    })
    
    it('gets All payments', async () => {
       const payments = await Payment.getAllPayments()
       expect(payments.length).toEqual(10)
    });

    it(' adds payment', async () => {
     
        const newPayment = new Payment(
           null,1,1,1,1,"32",1
       )
       console.log("newPayment",newPayment)
      
        const {createdPayment} = await Payment.createPayment(newPayment)
        const exctractedPayment = await Payment.getPayment(createdPayment.idpayment)
        console.log("when we get Payment :   ",exctractedPayment)
       // const delete2Delivery = await Delivery.deleteDelivery(createdDelivery.iddeliveries)
        //console.log("the deleted one",delete2Delivery)
        expect(createdPayment).toEqual(exctractedPayment)
     });

     it(' updates payment', async () => {
        
        const updPayment = new Payment(
           1,2,1,1,1,"asdda",3
       )
       console.log("updPayment",updPayment)
      
        const {updatedPayment} = await Payment.updatePayment(updPayment)
        console.log("when we update delivery :   ",updatedPayment)
        const exctractedPayment = await Payment.getPayment(updatedPayment.idpayment)
       // const delete2Delivery = await Delivery.deleteDelivery(createdDelivery.iddeliveries)
        console.log("the get one",exctractedPayment)
        expect(updatedPayment).toEqual(exctractedPayment)
     });

     it(' deletes payment', async () => {
      
        const deletePayment = new Payment(
           23,1,1,1,1,"32",1
       )
      
        const {deletedPayment} = await Payment.deletePayment(deletePayment.idpayment)
        console.log("when we delete paymnet :   ",deletedPayment)
        //const exctractedDelivery = await Delivery.getDelivery(updatedDelivery.iddeliveries)
       // const delete2Delivery = await Delivery.deleteDelivery(createdDelivery.iddeliveries)
       
        expect(deletedPayment).toEqual(deletePayment)
     });
    afterEach(()=>{
     
    })
})
