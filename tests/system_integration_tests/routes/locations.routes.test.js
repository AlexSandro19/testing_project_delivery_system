const request = require("supertest");
const app = require("../../../app");
const { init, end } = require("../../../src/database/mysql.connector");

let saveCreatedLocation;

describe("Testing Location api routes", () => {

  beforeAll(() => {
    init()
  });

  afterAll(() => {
    end()
  });

  test("Check addLocation api with predefined location", (done) => {
    const location = {
      typeOfLocationId: 1,
      address: "Adress Test",
      zipCode: 1,
      cityId: 3,
    }
    const response = request(app).post("/locations/addLocation").send(location)
    console.debug(response);
    response.expect(200).expect((res) => {
      console.log("res.body: ", res.body)
      console.log("res.body.response: ", res.body.response)
      const receivedLocation = res.body.response;
      console.log("location: " ,receivedLocation)
      expect(receivedLocation.typeoflocation_idtypeoflocation).toEqual(location.typeOfLocationId);
      console.log(res.body)
      saveCreatedLocation = { ...receivedLocation }
    }).end((err, res) => {
      if (err) return done(err);
      return done();
    });
  })

  test("Check addLocation api without predefined location", (done) => {
    const location = {
      typeOfLocationId: 1,
      address: "Adress Test",
      zipCode: 1,
      cityId: 2,
    }
    const response = request(app).post("/locations/addLocation").send(location)
    console.debug(response);
    response.expect(200).expect((res) => {
      console.log("res.body in addLocation: ", res.body)
      const {createdLocation} = res.body;
      expect(createdLocation.typeoflocation_idtypeoflocation).toEqual(location.typeOfLocationId);
      console.log(res.body)
      saveCreatedLocation = { ...createdLocation }
    }).end((err, res) => {
      if (err) return done(err);
      return done();
    });
  })

    test("Check updateUser api", (done) => {
      let generatedAddress = "";
      const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
      for (let index = 0; index < 26; index++) {
        const generateIndex = Math.floor(Math.random() * 26) // generate number 0-26
        generatedAddress += alphabet[generateIndex]
      }
      console.log("saveCreatedLocation", saveCreatedLocation)
      const location = {
        idlocation: saveCreatedLocation.idlocation,
        typeOfLocationId: saveCreatedLocation.typeoflocation_idtypeoflocation,
        address: generatedAddress,
        zipCode: saveCreatedLocation.zip_city_zipcode_idzipcode,
        cityId: saveCreatedLocation.zip_city_city_idcity,
      }
      const response = request(app).post("/locations/updateLocation").send(location)
      response.expect(200).expect((res) => {
        console.log("res.body test: ", res.body)
        expect(res.body.updatedLocation.idlocation).toEqual(location.idlocation);;
      }).end((err, res) => {
        console.log("res: ", res)
        if (err) return done(err);
        return done();
      });
    })

    test("Check deleteLocation api", (done) => {
      const response = request(app).delete("/locations/deleteLocation").send({idlocation: saveCreatedLocation.idlocation})
      response.expect(200).expect((res) => {
        console.log("res.body test delete : ", res.body)
        expect(res.body.payment.idlocation).toEqual(saveCreatedLocation.idlocation);
      }).end((err, res) => {
        console.log("res: ", res)
        if (err) return done(err);
        return done();
      });
    })

});