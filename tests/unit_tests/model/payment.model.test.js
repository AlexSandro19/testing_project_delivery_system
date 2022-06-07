const { Payment } = require("../../../src/model/payment.model");

describe("Run tests for Payment.generateTransactionId function", () => {

    test("Pass valid nothing and expect a string representation of it in format `xxxxxxxxNNNNN-ddmmyy`, " +
              "where `x` can be a random character or number from `[a-z],[A-Z],[0-9]`, " + 
              "`N` is a random number from `[0-9]`, and " + 
              "`ddmmyy` is based on the current date. `yy` is the last two numbers of the year.", () => {
        //Arrange
        const response = new Payment()
        
        //Act
        const transactionId = response.generateTransactionId()
        // const transactionId = "eed33see32334-233432"
        //Assert
        expect(transactionId).toMatch(/^[0-9a-zA-Z]{8}\B[0-9]{5}\b-[0-9]{6}$/gi);
    });

    test("Pass valid nothing and expect a string with length 20", () => {
        //Arrange
        const response = new Payment()
        //Act
        const transactionIdLength = response.generateTransactionId().length
        //Assert
        expect(transactionIdLength).toEqual(20);
    });
    
    test("Pass valid nothing and expect value not to be number", () => {
        //Arrange
        const response = new Payment()
        
        //Act
        const transactionId = response.generateTransactionId()
        //Assert
        expect(typeof transactionId).not.toBe('number');
    });

    test("Pass valid nothing and expect value not to be null", () => {
        //Arrange
        const response = new Payment()
        //Act
        const transactionId = response.generateTransactionId()
        //Assert
        expect(transactionId).not.toBeNull();
    });

    test("Pass valid nothing and expect string length not be 0", () => {
        //Arrange
        const response = new Payment()
        //Act
        const transactionIdLength = response.generateTransactionId().length
        //Assert
        expect(transactionIdLength).not.toBe(0);
    });
});