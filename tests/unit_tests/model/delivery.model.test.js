const { Delivery } = require("../../../src/model/delivery.model");

describe("Run tests for Delivery.generateUUID function", () => {

    test("Pass valid nothing and expect a string representation of it in format `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`, where `x` can be a character or number from `[a-z],[A-Z],[0-9]`", () => {
        //Arrange
        const response = new Delivery()
        
        //Act
        const uuid = response.generateUUID()
        //Assert
        expect(uuid).toMatch(/^[0-9a-zA-Z]{8}\b-[0-9a-zA-Z]{4}\b-[0-9a-zA-Z]{4}\b-[0-9a-zA-Z]{4}\b-[0-9a-zA-Z]{12}$/gi);
    });

    test("Pass valid nothing and expect a string with length 36", () => {
        //Arrange
        const response = new Delivery()
        //Act
        const uuidLength = response.generateUUID().length
        //Assert
        expect(uuidLength).toEqual(36);
    });
    
    test("Pass valid nothing and expect value not to be number", () => {
        //Arrange
        const response = new Delivery()
        
        //Act
        const uuid = response.generateUUID()
        //Assert
        expect(typeof uuid).not.toBe('number');
    });

    test("Pass valid nothing and expect value not to be null", () => {
        //Arrange
        const response = new Delivery()
        //Act
        const uuid = response.generateUUID()
        //Assert
        expect(uuid).not.toBeNull();
    });

    test("Pass valid nothing and expect string length not be 0", () => {
        //Arrange
        const response = new Delivery()
        //Act
        const uuidLength = response.generateUUID().length
        //Assert
        expect(uuidLength).not.toBe(0);
    });
});