const {Delivery} = require("../../src/model/delivery.model")
const { execute } = require("../../src/database/mysql.connector");

jest.mock('../../src/database/mysql.connector');
describe('testing deliveries', () => {
    it('should work for case 1', async () => {
      
      execute.mockResolvedValue(
        {
          affectedRows:1,
          insertId:1
        }
      )
  
      const newDelivery = new Delivery(
        1,2,3,4,5,6,7,8,9,0,9
    )
      
      const {deliveryCreated,createdDelivery} = await Delivery.createDelivery(newDelivery)
       // console.log("delivery",createdDelivery)
        //console.log("newdelivery",newDelivery)
      expect(newDelivery).toEqual(createdDelivery);
    });
  
    it('shouldGett All deliveries', async ()=> {
  
      execute.mockResolvedValue(
       [ {
        iddeliveries:1,
        packages_idpackages:1,
        priority:1,
        payment_idpayment:1,
        international:1,
        start_location:1,
        end_location:1,
        message:1,
        estimated_date:1,
        start_date:1,
        end_date:1,
        uid:1
        },
        {
          iddeliveries:1,
          packages_idpackages:1,
          priority:1,
          payment_idpayment:1,
          international:1,
          start_location:1,
          end_location:1,
          message:1,
          estimated_date:1,
          start_date:1,
          end_date:1,
          uid:1
        }]
      )
  
      const obj = [ {
        iddeliveries:1,
        packages_idpackages:1,
        priority:1,
        payment_idpayment:1,
        international:1,
        start_location:1,
        end_location:1,
        message:1,
        estimated_date:1,
        start_date:1,
        end_date:1,
        uid:1
        },
        {
          iddeliveries:1,
          packages_idpackages:1,
          priority:1,
          payment_idpayment:1,
          international:1,
          start_location:1,
          end_location:1,
          message:1,
          estimated_date:1,
          start_date:1,
          end_date:1,
          uid:1
        }]
  
      const deliveries = await Delivery.getAllDeliveries()
     // console.log("deliveries",deliveries)
      expect(deliveries).toEqual(obj)
  
    })
  
    it('should update delivery', async () => {
      const date = new Date("2022-01-01T12:00:00.000")
      
        execute.mockResolvedValueOnce(
          [{
            iddeliveries:1,
                  packages_idpackages:1,
                  priority:1,
                  payment_idpayment:1,
                  international:1,
                  start_location:1,
                  end_location:1,
                  message:1,
                  estimated_date:date,
                  start_date:new Date("2022-01-01T12:00:00.000"),
                  end_date:new Date("2022-01-01T12:00:00.000"),
                  uid:1,
            insertId:1,
          }],
          
        ).mockResolvedValueOnce(
          {
            changedRows:1
          }
        )
      
  
      const updDelivery = new Delivery(
        1,1,1,1,1,1,1,1,date,date,date,1
    )
      
    const { deliveryInfoIsSame, updatedDelivery } = await Delivery.updateDelivery(updDelivery)
      
        console.log("newdelivery",updatedDelivery)
      expect(updatedDelivery).toEqual(updDelivery);
    });
  })