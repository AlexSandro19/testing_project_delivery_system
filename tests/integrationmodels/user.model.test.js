
const {User} = require("../../src/model/user.model")
const { init } = require("../../src/database/mysql.connector");
describe('Testing the user', () => {
  
    beforeAll(async ()=>{
     init()
    })
    it('gets All users', async () => {
       const users = await User.getAllUsers()
       expect(users.length).toEqual(41)
    });

    it(' adds users', async () => {
        
        const newUser = new User(
           null,1,"12","13","14","11","12","13","11",1,2,"123"
       )
       console.log("newUser",newUser)
      
        const {createdUser} = await User.createUser(newUser)
        const exctractedUser = await User.getUser(createdUser.idcustomer)
        console.log("when we get User :   ",exctractedUser)
       // const delete2Delivery = await Delivery.deleteDelivery(createdDelivery.iddeliveries)
        //console.log("the deleted one",delete2Delivery)
        expect(createdUser).toEqual(exctractedUser)
     });

     it(' updates user', async () => {
      
        const updUser = new User(
            43,1,"2123","2123","1123","1asdddjkasdqwe","1123","1123","2wqjkhw",1,2,"1"
       )
       console.log("updUser",updUser)
      
        const {updatedUser} = await User.updateUser(updUser)
        console.log("when we update delivUser :   ",updatedUser)
        const exctractedUser = await User.getUser(updatedUser.idcustomer)
       // const delete2Delivery = await Delivery.deleteDelivery(createdDelivery.iddeliveries)
        console.log("the get one",exctractedUser)
        expect(updatedUser).toEqual(exctractedUser)
     });

     it(' deletes user', async () => {
        
        const deleteUser = new User(
           52,1,"12","13","14","11","12","13","11",1,2,"123"
       )
      
        const {deletedUser} = await User.deleteUser(deleteUser.idcustomer)
        console.log("when we update delivery :   ",deletedUser)
        //const exctractedDelivery = await Delivery.getDelivery(updatedDelivery.iddeliveries)
       // const delete2Delivery = await Delivery.deleteDelivery(createdDelivery.iddeliveries)
       
        expect(deletedUser[0]).toEqual(deleteUser)
     });
    afterEach(()=>{
    
    })
})
