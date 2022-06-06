const request = require("supertest");
const app = require("../../../app");
const { init, end } = require("../../../src/database/mysql.connector");

let saveCreatedUser; 

describe("Testing User api routes", () => {
 
  beforeAll(() => {
      init()
  });

  afterAll(() => {
    end()
  });
  
  test("Check login api", (done) => {
    const user = {
      email: "alex@gmail.com",
      password: "alex123",
    }
    const response = request(app).post("/users/login").send(user)
    response.expect(200).expect((res) => {
      expect(res.body.user.email).toEqual(user.email);
      console.log(res.body)
    }).end((err, res) => {
      if (err) return done(err);
      return done();
    });
  })

  test("Check register api", (done) => {

    let generatedDuns = ""; 
    for (let index = 0; index < 9; index++) {
      generatedDuns += Math.floor(Math.random() * 10) // generate number 0-9
    }

    let generatedEmail = ""
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    for (let index = 0; index < 10; index++) {
      const generateIndex = Math.floor(Math.random() * 26) // generate number 0-26
      generatedEmail += alphabet[generateIndex]
    }
    generatedEmail += "@gmail.com"
    const user = {
      typeOfUser: 1, 
      firstName: "AlexTestNew", 
      secondName: "AlexTestNew", 
      companyName: "Alex ComapnyTestNew", 
      email: generatedEmail, // has to be unique
      phone: "12345699", 
      address: "Norrebro 1", 
      duns: generatedDuns, // has to be unique
      zipcode: "2", 
      city: "1",
      password: "alex123",
      confirmPassword: "alex123"
     }
    const response = request(app).post("/users/register").send(user)
       console.debug(response);
    response.expect(200).expect((res) => {
      console.log("res.body: ", res.body)
      const {createdUser} = res.body; 
      expect(createdUser.email).toEqual(user.email);
      console.log(res.body)
      saveCreatedUser = {...createdUser}
    }).end((err, res) => {
      if (err) return done(err);
      return done();
    });
  })

  test("Check getUser api", (done) => {
    console.log("saveCreatedUser: ", saveCreatedUser)
    const response = request(app).post("/users/getUser").send({idcustomer: saveCreatedUser.idcustomer})
    response.expect(200).expect((res) => {
      console.log("res.body.user.idcustomer: ", res.body.user.idcustomer);
      console.log("res.body.user.idcustomer: ", typeof res.body.user.idcustomer);
      console.log("saveCreatedUser.idcustomer: ", saveCreatedUser.idcustomer);
      console.log("saveCreatedUser.idcustomer: ", typeof saveCreatedUser.idcustomer);

      expect(res.body.user.idcustomer).toEqual(saveCreatedUser.idcustomer)
    }).end((err, res) => {

      if (err) return done(err);
      return done();
    });
  })

  test("Check getUsers api", (done) => {
    const response = request(app).get("/users/getUsers").send()
    response.expect(200).expect((res) => {
      console.log("res.body test: ", res.body)
      expect(res.body.users.length).toBeGreaterThan(0);
    }).end((err, res) => {
      if (err) return done(err);
      return done();
    });
  })

  test("Check updateUser api", (done) => {
    let generatedPhoneNumber = ""; 
    for (let index = 0; index < 7; index++) {
      generatedPhoneNumber += Math.floor(Math.random() * 10) // generate number 0-9
    }
    const user = {
      idCustomer: saveCreatedUser.idcustomer,
      typeOfUser: saveCreatedUser.type_of_user,
      firstName: saveCreatedUser.firstname,
      secondName: saveCreatedUser.secondname,
      companyName: saveCreatedUser.companyname,
      email: saveCreatedUser.email,
      phone: generatedPhoneNumber,
      address: saveCreatedUser.address,
      duns: saveCreatedUser.duns,
      zipcode: saveCreatedUser.zip_city_zipcode_idzipcode,
      city: saveCreatedUser.zip_city_city_idcity,
      password: saveCreatedUser.password,
      confirmPassword: saveCreatedUser.password,
    }
    const response = request(app).post("/users/updateUser").send(user)
    response.expect(200).expect((res) => {
      console.log("res.body test: ", res.body)
      expect(res.body.user.email).toEqual(user.email);;
    }).end((err, res) => {
      console.log("res: ", res)
      if (err) return done(err);
      return done();
    });
  })
 
  test("Check deleteUser api", (done) => {
    const user = {
      idCustomer: 50,
    }
    const response = request(app).delete("/users/deleteUser").send({idCustomer: saveCreatedUser.idcustomer})
    response.expect(200).expect((res) => {
      console.log("res.body test: ", res.body)
      expect(res.body.user.idcustomer).toEqual(saveCreatedUser.idcustomer);
    }).end((err, res) => {
      console.log("res: ", res)
      if (err) return done(err);
      return done();
    });
  })

});