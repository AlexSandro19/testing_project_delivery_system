const request = require("supertest");
const app = require("../../../app");
const { init, end } = require("../../../src/database/mysql.connector");

let saveCreatedDelivery; 

describe("Testing Deliveries api routes", () => {
 
  beforeAll(() => {
      init()
  });

  afterAll(() => {
    end()
  });
  
  test("Check addDelivery api", (done) => {

    const delivery = {
      packages_idpackages: 1,
      priority: "0",
      payment_idpayment: 1,
      international: "0",
      start_location: 2,
      end_location: 3,
      message: "placerat, augue. Sed molestie. Sed",
      start_date: "2021-09-21 02:51:52",
      estimated_date: "2021-09-24 02:51:52",
      end_date: "2021-09-24 02:51:52"
    }
    const response = request(app).post("/deliveries/addDelivery").send(delivery)
       console.debug(response);
    response.expect(200).expect((res) => {
      console.log("res.body: ", res.body)
      const {createdDelivery} = res.body; 
      expect(createdDelivery.packages_idpackages).toEqual(delivery.packages_idpackages);
      console.log("createdDelivery: ", createdDelivery)
      saveCreatedDelivery = {...createdDelivery}
    }).end((err, res) => {
      if (err) return done(err);
      return done();
    });
  })

  test("Check getDelivery api", (done) => {
    console.log("saveCreatedUser: ", saveCreatedDelivery)
    const response = request(app).post("/deliveries/getDelivery").send({iddeliveries: saveCreatedDelivery.iddeliveries})
    response.expect(200).expect((res) => {
      // console.log("res.body.response.user.idcustomer: ", res.body.response.user.idcustomer);
      // console.log("res.body.response.user.idcustomer: ", typeof res.body.response.user.idcustomer);
      // console.log("saveCreatedUser.idcustomer: ", saveCreatedDelivery.idcustomer);
      // console.log("saveCreatedUser.idcustomer: ", typeof saveCreatedDelivery.idcustomer);

      expect(res.body.delivery.uid).toEqual(saveCreatedDelivery.uid)
    }).end((err, res) => {

      if (err) return done(err);
      return done();
    });
  })

  test("Check getDeliveries api", (done) => {
    const response = request(app).get("/deliveries/getDeliveries").send()
    response.expect(200).expect((res) => {
      console.log("res.body test: ", res.body)
      expect(res.body.deliveries.length).toBeGreaterThan(0);
    }).end((err, res) => {
      if (err) return done(err);
      return done();
    });
  })

  test("Check updateDelivery api", (done) => {
    let generatedMessage = "";
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    for (let index = 0; index < 26; index++) {
      const generateIndex = Math.floor(Math.random() * 26) // generate number 0-26
      generatedMessage += alphabet[generateIndex]
    }
    const delivery = {
      iddeliveries: saveCreatedDelivery.iddeliveries,
      packages_idpackages: saveCreatedDelivery.packages_idpackages,
      priority: saveCreatedDelivery.priority,
      payment_idpayment: saveCreatedDelivery.payment_idpayment,
      international: saveCreatedDelivery.international,
      start_location: saveCreatedDelivery.start_location,
      end_location: saveCreatedDelivery.end_location,
      message: generatedMessage,
      start_date: saveCreatedDelivery.start_date,
      estimated_date: saveCreatedDelivery.estimated_date,
      end_date: saveCreatedDelivery.end_date,
      uid: saveCreatedDelivery.uid
    }
    console.log("delivery: ", delivery)
    const response = request(app).post("/deliveries/updateDelivery").send(delivery)
    response.expect(200).expect((res) => {
      console.log("res.body test: ", res.body)
      expect(res.body.updatedDelivery.uid).toEqual(saveCreatedDelivery.uid);;
    }).end((err, res) => {
      console.log("res: ", res)
      if (err) return done(err);
      return done();
    });
  })
 
  test("Check deleteDelivery api", (done) => {
    const response = request(app).delete("/deliveries/deleteDelivery").send({iddeliveries: saveCreatedDelivery.iddeliveries})
    response.expect(200).expect((res) => {
      console.log("res.body test: ", res.body)
      expect(res.body.delivery.uid).toEqual(saveCreatedDelivery.uid);
    }).end((err, res) => {
      console.log("res: ", res)
      if (err) return done(err);
      return done();
    });
  })

});