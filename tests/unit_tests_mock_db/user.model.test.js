const { User } = require("../../src/model/user.model")
const { execute } = require("../../src/database/mysql.connector");
jest.mock('../../src/database/mysql.connector');
describe('testing users', () => {
  it("should create a user", async () => {
    execute.mockResolvedValue(
      {
        affectedRows: 1,
        insertId: 1
      }
    )

    const newUser = new User(
      1, 2, 3, 4, 5, 6, 7, 8, 9, 0
    )

    const { userCreated, createdUser } = await User.createUser(newUser)
    // // console.log("delivery",createdDelivery)
    //// console.log("newdelivery",newDelivery)
    expect(newUser).toEqual(createdUser);
  })
  it('should Gett All Users', async () => {

    execute.mockResolvedValue(
      [{
        idcustomer: 1,
        type_of_user: 1,
        firstname: 1,
        secondname: 1,
        companyname: 1,
        email: 1,
        phone: 1,
        address: 1,
        duns: 1,
        zip_city_zipcode_idzipcode: 1,
        zip_city_city_idcity: 1,
        password: 1
      },
      {
        idcustomer: 1,
        type_of_user: 1,
        firstname: 1,
        secondname: 1,
        companyname: 1,
        email: 1,
        phone: 1,
        address: 1,
        duns: 1,
        zip_city_zipcode_idzipcode: 1,
        zip_city_city_idcity: 1,
        password: 1
      }]
    )

    const obj = [{
      idcustomer: 1,
      type_of_user: 1,
      firstname: 1,
      secondname: 1,
      companyname: 1,
      email: 1,
      phone: 1,
      address: 1,
      duns: 1,
      zip_city_zipcode_idzipcode: 1,
      zip_city_city_idcity: 1,
      password: 1
    },
    {
      idcustomer: 1,
      type_of_user: 1,
      firstname: 1,
      secondname: 1,
      companyname: 1,
      email: 1,
      phone: 1,
      address: 1,
      duns: 1,
      zip_city_zipcode_idzipcode: 1,
      zip_city_city_idcity: 1,
      password: 1
    }]

    const users = await User.getAllUsers()
    // // console.log("deliveries",deliveries)
    expect(users).toEqual(obj)

  })
  it('should update delivery', async () => {
    const date = new Date("2022-01-01T12:00:00.000")

    execute.mockResolvedValueOnce(
      [{
        idcustomer: 1,
        type_of_user: 1,
        firstname: 1,
        secondname: 1,
        companyname: 1,
        email: 1,
        phone: 1,
        address: 1,
        duns: 1,
        zip_city_zipcode_idzipcode: 1,
        zip_city_city_idcity: 1,
        password: 1
      }],

    ).mockResolvedValueOnce(
      {
        changedRows: 1
      }
    )


    const updUser = new User(
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
    )

    const { userInfoIsSame, updatedUser } = await User.updateUser(updUser)

    // console.log("newdelivery",updatedUser)
    expect(updatedUser).toEqual(updUser);
  });
})