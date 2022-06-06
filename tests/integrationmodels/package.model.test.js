
const {Package} = require("../../src/model/package.model")
const { init } = require("../../src/database/mysql.connector");
describe('Testing the package', () => {
  
    beforeAll(async ()=>{
       init()
    })
    it('gets All packages', async () => {
       const packages = await Package.getAllPackages()
       expect(packages.length).toEqual(4)
    });
    it(' adds package', async () => {   
      
      const newPackage = new Package(
         null,1,1,1,1,1,1,1,1,null
     )
     console.log("newPackage",newPackage)
    
      const {createdPackage} = await Package.createPackage(newPackage)
      const exctractedPackage = await Package.getPackage(createdPackage.idpackages)
      console.log("when we get package :   ",exctractedPackage)
     // const delete2Delivery = await Delivery.deleteDelivery(createdDelivery.iddeliveries)
      //console.log("the deleted one",delete2Delivery)
      expect(createdPackage).toEqual(exctractedPackage)
   });

   it(' updates package', async () => {
   
      const updPackage = new Package(
        1,1,1,1,1,1,1,1,1,null
     )
     console.log("updPackage",updPackage)
    
      const {updatedPackage} = await Package.updatePackage(updPackage)
      console.log("when we update Package :   ",updatedPackage)
      const exctractedPackage = await Package.getPackage(updatedPackage.idpackages)
     // const delete2Delivery = await Delivery.deleteDelivery(createdDelivery.iddeliveries)
      console.log("the get one",exctractedPackage)
      expect(updatedPackage).toEqual(exctractedPackage)
   });

   it(' deletes package', async () => {
      
      const deletePackage = new Package(
         9,1,1,1,1,1,1,1,1,null
     )
    
      const {deletedPackage} = await Package.deletePackage(deletePackage.idpackages)
      console.log("when we update delivery :   ",deletedPackage)
      //const exctractedDelivery = await Delivery.getDelivery(updatedDelivery.iddeliveries)
     // const delete2Delivery = await Delivery.deleteDelivery(createdDelivery.iddeliveries)
     
      expect(deletedPackage[0]).toEqual(deletePackage)
   });
    afterEach(()=>{
    
    })
})
