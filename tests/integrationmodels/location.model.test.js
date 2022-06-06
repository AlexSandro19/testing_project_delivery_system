
const {Location} = require("../../src/model/location.model")
const { init, end  } = require("../../src/database/mysql.connector");
describe('Testing the location', () => {
    let someCreatedLocation;
    beforeAll(async ()=>{
        init()
    })

    afterAll(() => {
      end()
    });


    it('gets All locations', async () => {
       const locations = await Location.getAllLocations()
       expect(locations.length).toBeGreaterThan(0)
    });
    it(' adds location', async () => {
            newLocation = new Location(
          null,1,"1",1,2
       )
       console.log("newLocation",newLocation)
      
        const {createdLocation} = await Location.createLocation(newLocation)
        const exctractedLocation = await Location.getLocation(createdLocation.idlocation)
        console.log("when we get delivery :   ",exctractedLocation)
       // const delete2Delivery = await Delivery.deleteDelivery(createdDelivery.iddeliveries)
        //console.log("the deleted one",delete2Delivery)
        expect(createdLocation).toEqual(exctractedLocation)
        someCreatedLocation = createdLocation
     });
    it(' updates location', async () => {
 
        someCreatedLocation.address += "asd"
      
      
        const {updatedLocation} = await Location.updateLocation(someCreatedLocation)
        console.log("when we update delivery :   ",updatedLocation)
        const exctractedLocation = await Location.getLocation(updatedLocation.idlocation)
       // const delete2Delivery = await Delivery.deleteDelivery(createdDelivery.iddeliveries)
        console.log("the get one",exctractedLocation)
        expect(updatedLocation).toEqual(exctractedLocation)
     });

     it(' deletes location', async () => {

        const {deletedLocation} = await Location.deleteLocation(someCreatedLocation.idlocation)
        console.log("when we update Location :   ",deletedLocation)
        //const exctractedDelivery = await Delivery.getDelivery(updatedDelivery.iddeliveries)
       // const delete2Delivery = await Delivery.deleteDelivery(createdDelivery.iddeliveries)
       
        expect(deletedLocation).toEqual(someCreatedLocation)
     });
     
    
    afterEach(()=>{
        
    })
})
