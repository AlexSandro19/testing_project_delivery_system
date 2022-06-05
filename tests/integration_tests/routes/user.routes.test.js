const request = require("supertest");
const app = require("../../../app");
const { init, end } = require("../../../src/database/mysql.connector");

describe("Test example", () => {
 
  beforeAll(() => {
      init()
  });

  afterAll(() => {
    end()
  });
  
  // test("Check login api", (done) => {
  //   const user = {
  //     email: "alex@gmail.com",
  //     password: "alex123",
  //   }
  //   const response = request(app).post("/users/login").send(user)
  //   response.expect(200).expect((res) => {
  //     expect(res.body.user.email).toEqual(user.email);
  //     console.log(res.body)
  //   }).end((err, res) => {
  //     if (err) return done(err);
  //     return done();
  //   });
  // })

  // test("Check register api", (done) => {
  //   const user = {
  //     typeOfUser: 1, 
  //     firstName: "AlexTestNew", 
  //     secondName: "AlexTestNew", 
  //     companyName: "Alex ComapnyTestNew", 
  //     email: "alextestnew@gmail.com", 
  //     phone: "12341234", 
  //     address: "Norrebro 1", 
  //     duns: "123456999", 
  //     zipcode: "2", 
  //     city: 1,
  //     password: "alex123",
  //     confirmPassword: "alex123"
  // }
  //   const response = request(app).post("/users/register").send(user)
  //      console.debug(response);
  //   response.expect(200).expect((res) => {
  //     console.log("res.body: ", res.body)
  //     expect(res.body.response.createdUser.email).toEqual(user.email);
  //     console.log(res.body)
  //   }).end((err, res) => {
  //     if (err) return done(err);
  //     return done();
  //   });
  // })

  // test("Check getUser api", (done) => {
  //   const user = {
  //     idcustomer: 47
  // }
  //   const response = request(app).get("/users/getUser").send(user)
  //   response.expect(200).expect((res) => {
  //     expect(res.body.response.user.idcustomer).toEqual(user.idcustomer)
  //   }).end((err, res) => {

  //     if (err) return done(err);
  //     return done();
  //   });
  // })

  // test("Check getUsers api", (done) => {
  //   const user = {
  //     idcustomer: 47
  // }
  //   const response = request(app).get("/users/getUsers").send(user)
  //   response.expect(200).expect((res) => {
  //     console.log("res.body test: ", res.body)
  //     expect(res.body.response.users.length).toBeGreaterThan(0);
  //   }).end((err, res) => {
  //     if (err) return done(err);
  //     return done();
  //   });
  // })

  // test("Check updateUser api", (done) => {
  //   const user = {
  //     idCustomer: 47,
  //     typeOfUser: 1,
  //     firstName: 'AlexTestUpdate',
  //     secondName: 'AlexTestUpdate',
  //     companyName: 'Alex ComapnyTestUpdate',
  //     email: 'alextest@gmail.com',
  //     phone: '12341234',
  //     address: 'Norrebro str. 1000000',
  //     duns: '123456799',
  //     zipcode: 2,
  //     city: 1,
  //     password: '$2b$12$c3CBaYuvzpAPMYCbbpYNMeMCIfPIckgpihDTa8YGRxYxI/1lFsYUi'
  //   }
  //   const response = request(app).post("/users/updateUser").send(user)
  //   response.expect(200).expect((res) => {
  //     console.log("res.body test: ", res.body)
  //     expect(res.body.response.user.email).toEqual(user.email);;
  //   }).end((err, res) => {
  //     console.log("res: ", res)
  //     if (err) return done(err);
  //     return done();
  //   });
  // })
 
  test("Check deleteUser api", (done) => {
    const user = {
      idCustomer: 50,
    }
    const response = request(app).delete("/users/deleteUser").send(user)
    response.expect(200).expect((res) => {
      console.log("res.body test: ", res.body)
      expect(res.body.response.user.idcustomer).toEqual(user.idCustomer);;
    }).end((err, res) => {
      console.log("res: ", res)
      if (err) return done(err);
      return done();
    });
  })

});