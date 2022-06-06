const request = require("supertest");
const app = require("../../../app");
const { init, end } = require("../../../src/database/mysql.connector");

let saveCreatedPayment; 

describe("Testing Payments api routes", () => {
 
  beforeAll(() => {
      init()
  });

  afterAll(() => {
    end()
  });
  
  test("Check addPayment api", (done) => {

    const payment = {
      typeofpayment_idtypeofpayment: 1, 
      amount: 20.5, 
      payed: "1", 
      prepaid: "0", 
      billing_address: "Some address"
     }
    const response = request(app).post("/payments/addPayment").send(payment)
       console.debug(response);
    response.expect(200).expect((res) => {
      console.log("res.body: ", res.body)
      const {createdPayment} = res.body; 
      expect(createdPayment.typeofpayment_idtypeofpayment).toEqual(payment.typeofpayment_idtypeofpayment);
      console.log(res.body)
      saveCreatedPayment = {...createdPayment}
    }).end((err, res) => {
      if (err) return done(err);
      return done();
    });
  })

  test("Check getPayment api", (done) => {
    console.log("saveCreatedUser: ", saveCreatedPayment)
    const response = request(app).post("/payments/getPayment").send({idpayment: saveCreatedPayment.idpayment})
    response.expect(200).expect((res) => {
     console.log("getPayment > res.body: ", res.body)
      expect(res.body.payment.transactionid).toEqual(saveCreatedPayment.transactionid)
    }).end((err, res) => {

      if (err) return done(err);
      return done();
    });
  })

  test("Check getPayments api", (done) => {
    const response = request(app).get("/payments/getPayments").send()
    response.expect(200).expect((res) => {
      console.log("res.body test: ", res.body)
      expect(res.body.payments.length).toBeGreaterThan(0);
    }).end((err, res) => {
      if (err) return done(err);
      return done();
    });
  })

  test("Check updatePayment api", (done) => {
    let generatedAddress = "";
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    for (let index = 0; index < 30; index++) {
      const generateIndex = Math.floor(Math.random() * 26) // generate number 0-26
      generatedAddress += alphabet[generateIndex]
    }
    const payment = {
        idpayment: saveCreatedPayment.idpayment,
        typeofpayment_idtypeofpayment: saveCreatedPayment.typeofpayment_idtypeofpayment, 
        amount: saveCreatedPayment.amount, 
        payed: saveCreatedPayment.payed, 
        prepaid: saveCreatedPayment.prepaid, 
        transactionid: saveCreatedPayment.transactionid, 
        billing_address: generatedAddress
    }
    const response = request(app).post("/payments/updatePayment").send(payment)
    response.expect(200).expect((res) => {
      console.log("res.body test: ", res.body)
      expect(res.body.updatedPayment.idpayment).toEqual(payment.idpayment);;
    }).end((err, res) => {
      console.log("res: ", res)
      if (err) return done(err);
      return done();
    });
  })
 
  test("Check deletePayment api", (done) => {
    const response = request(app).delete("/payments/deletePayment").send({idpayment: saveCreatedPayment.idpayment})
    response.expect(200).expect((res) => {
      console.log("res.body test: ", res.body)
      expect(res.body.payment.idpayment).toEqual(saveCreatedPayment.idpayment);
    }).end((err, res) => {
      console.log("res: ", res)
      if (err) return done(err);
      return done();
    });
  })

});