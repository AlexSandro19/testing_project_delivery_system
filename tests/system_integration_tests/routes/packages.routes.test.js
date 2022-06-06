const request = require("supertest");
const app = require("../../../app");
const { init, end } = require("../../../src/database/mysql.connector")

let saveCreatedPackage; 

describe("Testing Packages api routes", () => {
 
  beforeAll(() => {
      init()
  });

  afterAll(() => {
    end()
  });

  test("Check addPackage api", (done) => {

    const samplePackage = {
      userId: 1,
      weight: 2.01,
      height: 1.01,
      width: 3.01,
      depth: 1.01,
      fragile: "0",
      electronics: "0",
      oddsized: "0",
    }
    const response = request(app).post("/packages/addPackage").send(samplePackage)
       console.debug(response);
    response.expect(200).expect((res) => {
      console.log("res.body: ", res.body)
      const {idpackages,user_iduser,weight,height,width,depth,fragile,electronics,oddsized,amount} = res.body; 
      expect(user_iduser).toEqual(samplePackage.userId);
      saveCreatedPackage = {idpackages,user_iduser,weight,height,width,depth,fragile,electronics,oddsized,amount}
    }).end((err, res) => {
      if (err) return done(err);
      return done();
    });
  })

  test("Check getPackage api", (done) => {
    console.log("saveCreatedPackage: ", saveCreatedPackage)
    const response = request(app).post("/packages/getPackage").send({idpackages: saveCreatedPackage.idpackages})
    response.expect(200).expect((res) => {
      // console.log("res.body.response.user.idcustomer: ", res.body.response.user.idcustomer);
      // console.log("res.body.response.user.idcustomer: ", typeof res.body.response.user.idcustomer);
      // console.log("saveCreatedUser.idcustomer: ", saveCreatedDelivery.idcustomer);
      // console.log("saveCreatedUser.idcustomer: ", typeof saveCreatedDelivery.idcustomer);

      expect(res.body.package.idpackages).toEqual(saveCreatedPackage.idpackages)
    }).end((err, res) => {

      if (err) return done(err);
      return done();
    });
  })

  test("Check getPackages api", (done) => {
    const response = request(app).get("/packages/getPackages").send()
    response.expect(200).expect((res) => {
      console.log("res.body test: ", res.body)
      expect(res.body.packages.length).toBeGreaterThan(0);
    }).end((err, res) => {
      if (err) return done(err);
      return done();
    });
  })

  test("Check updatePackage api", (done) => {
    let generatedWeight = Math.floor(Math.random() * 5) + 1 
    const samplePackage = {
      idpackages: saveCreatedPackage.idpackages,
      user_iduser: saveCreatedPackage.user_iduser,
      weight: generatedWeight,
      height: saveCreatedPackage.height,
      width: saveCreatedPackage.width,
      depth: saveCreatedPackage.depth,
      fragile: saveCreatedPackage.fragile,
      electronics: saveCreatedPackage.electronics,
      oddsized: saveCreatedPackage.oddsized,
      receiver_iduser: null,
    }
    console.log("samplePackage: ", samplePackage)
    const response = request(app).post("/packages/updatePackage").send(samplePackage)
    response.expect(200).expect((res) => {
      console.log("res.body test: ", res.body)
      expect(res.body.updatedPackage.idpackages).toEqual(saveCreatedPackage.idpackages);;
    }).end((err, res) => {
      console.log("res: ", res)
      if (err) return done(err);
      return done();
    });
  })
 
  test("Check deletePackage api", (done) => {
    const response = request(app).post("/packages/deletePackage").send({idpackages: saveCreatedPackage.idpackages})
    response.expect(200).expect((res) => {
      console.log("res.body test: ", res.body)
      expect(res.body.package.idpackages).toEqual(saveCreatedPackage.idpackages);
    }).end((err, res) => {
      console.log("res: ", res)
      if (err) return done(err);
      return done();
    });
  })

});