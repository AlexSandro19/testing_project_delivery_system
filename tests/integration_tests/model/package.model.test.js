
const {Package} = require("../../../src/model/package.model")
const { init, end  } = require("../../../src/database/mysql.connector");
describe('Testing the package', () => {
   let someCreatedPackage;
    beforeAll(async ()=>{
       init()
    })

    afterAll(() => {
      end()
    });


    it('gets All packages', async () => {
       const packages = await Package.getAllPackages()
       expect(packages.length).toBeGreaterThan(0)
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
      someCreatedPackage = createdPackage
   });

   it(' updates package', async () => {
   
      someCreatedPackage.user_iduser +=1
     
    
      const {updatedPackage} = await Package.updatePackage(someCreatedPackage)
      console.log("when we update Package :   ",updatedPackage)
      const exctractedPackage = await Package.getPackage(updatedPackage.idpackages)
     // const delete2Delivery = await Delivery.deleteDelivery(createdDelivery.iddeliveries)
      console.log("the get one",exctractedPackage)
      expect(updatedPackage).toEqual(exctractedPackage)
   });

   it(' deletes package', async () => {
      
     
      const {deletedPackage} = await Package.deletePackage(someCreatedPackage.idpackages)
      console.log("when we update delivery :   ",deletedPackage)
      //const exctractedDelivery = await Delivery.getDelivery(updatedDelivery.iddeliveries)
     // const delete2Delivery = await Delivery.deleteDelivery(createdDelivery.iddeliveries)
     
      expect(deletedPackage).toEqual(someCreatedPackage)
   });
    afterEach(()=>{
    
    })
})
