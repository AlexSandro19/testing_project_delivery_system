const {Payment} = require("../../src/model/payment.model")
const { execute } = require("../../src/database/mysql.connector");
jest.mock('../../src/database/mysql.connector');

describe('testing payments', () => {
    it("should create a payment", async ()=> {
      execute.mockResolvedValue(
        {
          affectedRows:1,
          insertId:1
        }
      )
  
      const newPayment = new Payment(
        1,2,3,4,5,6,7
    )
      
      const {createdPayment} = await Payment.createPayment(newPayment)
      // console.log("delivery",createdLocation)
       // console.log("newdelivery",newLocation)
        console.log("newPayment",newPayment)
       console.log("createdPayment",createdPayment)
      expect(newPayment).toEqual(createdPayment);
    })
    it('should Gett All Payments', async ()=> {
  
      execute.mockResolvedValue(
       [ {
        idpayment:1,
        typeofpayment_idtypeofpayment:1,
        amount:1,
        payed:1,
        prepaid:1,
        transactionid:1,
        billing_address:1
        },
        {
          idpayment:1,
        typeofpayment_idtypeofpayment:1,
        amount:1,
        payed:1,
        prepaid:1,
        transactionid:1,
        billing_address:1
          }]
      )
  
      const obj = [ {
        idpayment:1,
        typeofpayment_idtypeofpayment:1,
        amount:1,
        payed:1,
        prepaid:1,
        transactionid:1,
        billing_address:1
        },
        {
          idpayment:1,
        typeofpayment_idtypeofpayment:1,
        amount:1,
        payed:1,
        prepaid:1,
        transactionid:1,
        billing_address:1
          }]
  
      const payments = await Payment.getAllPayments()
      
      expect(payments).toEqual(obj)
  
    })
    it('should update payment', async () => {
      
      
      execute.mockResolvedValueOnce(
        [{
          idpayment:1,
          typeofpayment_idtypeofpayment:1,
          amount:1,
          payed:1,
          prepaid:1,
          transactionid:1,
          billing_address:1
        }],
        
      ).mockResolvedValueOnce(
        {
          changedRows:1
        }
      )
    
  
    const updPayment = new Payment(
      1,1,1,1,1,1,1
  )
  const { paymentInfoIsSame, updatedPayment } = await Payment.updatePayment(updPayment)
    
      //console.log("newdpackage",updatedPackage)
      expect(updatedPayment).toEqual(updPayment);
  });
  })