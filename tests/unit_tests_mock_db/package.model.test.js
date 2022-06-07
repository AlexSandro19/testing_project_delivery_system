const {Package} = require("../../src/model/package.model")
const { execute } = require("../../src/database/mysql.connector");
jest.mock('../../src/database/mysql.connector');

describe('testing package', () => {
    it("should create a package", async ()=> {
      execute.mockResolvedValue(
        {
          affectedRows:1,
          insertId:1
        }
      )
  
      const newPackage = new Package(
        1,2,3,4,5,6,7,8,9,0
    )
      
      const {packageCreated,createdPackage} = await Package.createPackage(newPackage)
       // console.log("delivery",createdDelivery)
        //console.log("newdelivery",newDelivery)
      expect(newPackage).toEqual(createdPackage);
    })
    it('should Gett All Packages', async ()=> {
  
      execute.mockResolvedValue(
       [ {
        idpackages: 1,
          user_iduser: 1,
          weight: 1,
          height: 1,
          width: 1,
          depth: 1,
          fragile: 1,
          electronics: 1,
          oddsized: 1,
          receiver_iduser: 1,
        },
        {
          idpackages: 1,
            user_iduser: 1,
            weight: 1,
            height: 1,
            width: 1,
            depth: 1,
            fragile: 1,
            electronics: 1,
            oddsized: 1,
            receiver_iduser: 1,
          }]
      )
  
      const obj = [ {
        idpackages: 1,
          user_iduser: 1,
          weight: 1,
          height: 1,
          width: 1,
          depth: 1,
          fragile: 1,
          electronics: 1,
          oddsized: 1,
          receiver_iduser: 1,
        },
        {
          idpackages: 1,
            user_iduser: 1,
            weight: 1,
            height: 1,
            width: 1,
            depth: 1,
            fragile: 1,
            electronics: 1,
            oddsized: 1,
            receiver_iduser: 1,
          }]
  
      const packages = await Package.getAllPackages()
      console.log("packages",packages)
      console.log("obj",obj)
      expect(packages).toEqual(obj)
  
    })
    it('should update package', async () => {
      
      
        execute.mockResolvedValueOnce(
          [{
            idpackages: 1,
            user_iduser: 1,
            weight: 1,
            height: 1,
            width: 1,
            depth: 1,
            fragile: 1,
            electronics: 1,
            oddsized: 1,
            receiver_iduser: 1,
          }],
          
        ).mockResolvedValueOnce(
          {
            changedRows:1
          }
        )
      
  
      const updPackage = new Package(
        1,1,1,1,1,1,1,1,1,1
    )
      
    const { pakcageInfoIsSame, updatedPackage } = await Package.updatePackage(updPackage)
      
        //console.log("newdpackage",updatedPackage)
        expect(updatedPackage).toEqual(updPackage);
    });
  })