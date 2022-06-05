
const {Location} = require("../../src/model/location.model")
const { init } = require("../../src/database/mysql.connector");
describe('Testing the location', () => {
  
    beforeAll(async ()=>{
        init()
    })
    it('gets All locations', async () => {
       const locations = await Location.getAllLocations()
       expect(locations.length).toEqual(15)
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
     });
    it(' updates location', async () => {
 
        const updLocation = new Location(
           1,2,"1",1,2
       )
       console.log("updLocation",updLocation)
      
        const {updatedLocation} = await Location.updateLocation(updLocation)
        console.log("when we update delivery :   ",updatedLocation)
        const exctractedLocation = await Location.getLocation(updatedLocation.idlocation)
       // const delete2Delivery = await Delivery.deleteDelivery(createdDelivery.iddeliveries)
        console.log("the get one",exctractedLocation)
        expect(updatedLocation).toEqual(exctractedLocation)
     });

     it(' deletes location', async () => {
            
            const deleteLocation = new Location(
                 18,1,"1",1,2
            )
      
        const {deletedLocation} = await Location.deleteLocation(deleteLocation.idlocation)
        console.log("when we update Location :   ",deletedLocation)
        //const exctractedDelivery = await Delivery.getDelivery(updatedDelivery.iddeliveries)
       // const delete2Delivery = await Delivery.deleteDelivery(createdDelivery.iddeliveries)
       
        expect(deletedLocation[0]).toEqual(deleteLocation)
     });
     
    
    afterEach(()=>{
        
    })
})
