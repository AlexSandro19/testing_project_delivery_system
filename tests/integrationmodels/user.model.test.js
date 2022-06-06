
const {User} = require("../../src/model/user.model")
const { init } = require("../../src/database/mysql.connector");
describe('Testing the user', () => {
    let someCreatedUser;
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

        expect(createdUser).toEqual(exctractedUser)
        someCreatedUser = createdUser
     });

     it(' updates user', async () => {
      
        const {updatedUser} = await User.updateUser(someCreatedUser)
        console.log("when we update delivUser :   ",updatedUser)
        const exctractedUser = await User.getUser(updatedUser.idcustomer)
       // const delete2Delivery = await Delivery.deleteDelivery(createdDelivery.iddeliveries)
        console.log("the get one",exctractedUser)
        expect(updatedUser).toEqual(exctractedUser)
     });

     it(' deletes user', async () => {
      
        const {deletedUser} = await User.deleteUser(someCreatedUser.idcustomer)
        console.log("when we update delivery :   ",deletedUser)
        //const exctractedDelivery = await Delivery.getDelivery(updatedDelivery.iddeliveries)
       // const delete2Delivery = await Delivery.deleteDelivery(createdDelivery.iddeliveries)
       
        expect(deletedUser).toEqual(someCreatedUser)
     });
    afterEach(()=>{
    
    })
})
