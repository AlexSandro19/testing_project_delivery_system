const { Location } = require("../../src/model/location.model")
const { execute } = require("../../src/database/mysql.connector");
jest.mock('../../src/database/mysql.connector');

describe('testing locations', () => {
  it("should create a location", async () => {
    execute.mockResolvedValue(
      {
        affectedRows: 1,
        insertId: 1
      }
    )

    const newLocation = new Location(
      1, 2, 3, 4, 5, 6, 7, 8, 9, 0
    )

    const { locationCreated, createdLocation } = await Location.createLocation(newLocation)
    // // console.log("delivery",createdLocation)
    // // console.log("newdelivery",newLocation)
    expect(newLocation).toEqual(createdLocation);
  })
  it('should Gett All Locations', async () => {

    execute.mockResolvedValue(
      [{
        idlocation: 1,
        typeoflocation_idtypeoflocation: 1,
        address: 1,
        zip_city_zipcode_idzipcode: 1,
        zip_city_city_idcity: 1
      },
      {
        idlocation: 1,
        typeoflocation_idtypeoflocation: 1,
        address: 1,
        zip_city_zipcode_idzipcode: 1,
        zip_city_city_idcity: 1
      }]
    )

    const obj = [{
      idlocation: 1,
      typeoflocation_idtypeoflocation: 1,
      address: 1,
      zip_city_zipcode_idzipcode: 1,
      zip_city_city_idcity: 1
    },
    {
      idlocation: 1,
      typeoflocation_idtypeoflocation: 1,
      address: 1,
      zip_city_zipcode_idzipcode: 1,
      zip_city_city_idcity: 1
    }]

    const locations = await Location.getAllLocations()
    // // console.log("deliveries",deliveries)
    expect(locations).toEqual(obj)

  })
  it('should update package', async () => {


    execute.mockResolvedValueOnce(
      [{
        idlocation: 1,
        typeoflocation_idtypeoflocation: 1,
        address: 1,
        zip_city_zipcode_idzipcode: 1,
        zip_city_city_idcity: 1
      }],

    ).mockResolvedValueOnce(
      {
        changedRows: 1
      }
    )


    const updLocation = new Location(
      1, 1, 1, 1, 1
    )

    const { locationInfoIsSame, updatedLocation } = await Location.updateLocation(updLocation)

    //// console.log("newdpackage",updatedPackage)
    expect(updatedLocation).toEqual(updLocation);
  });
})