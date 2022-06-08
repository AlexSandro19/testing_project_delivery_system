const { characterGenerator, numberGenerator, transactionDateGenerator } = require("../../../src/utility/utility.generators");

describe("Run tests for characterGenerator function", () => {

    test("Pass a valid number: 1, and expect a string with 1 character of following value: [a-z] OR [A-Z] OR [0-9]", () => {
        //Arrange
        const length = 1
        //Act
        const result = characterGenerator(length);
        //Assert
        expect(result).toMatch(/[a-zA-Z0-9]/);
    });

    test("Pass a valid number: 4, and expect a string with 4 characters of following values: [a-z] OR [A-Z] OR [0-9]", () => {
        //Arrange
        const length = 4
        //Act
        const result = characterGenerator(length);
        //Assert
        expect(result).toMatch(/[a-zA-Z0-9]{4}/);
    });

    test("Pass a valid number: 11, and expect a string with 9999 characters of following values: [a-z] OR [A-Z] OR [0-9]", () => {
        //Arrange
        const length = 11
        //Act
        const result = characterGenerator(length);
        // // console.debug(result)
        //Assert
        expect(result).toMatch(/[a-zA-Z0-9]{11}/);
    });

    test("Pass an invalid null value, and expect null", () => {
        //Arrange
        const length = null
        //Act
        const result = characterGenerator(length);
        //Assert
        expect(result).toBeNull();
    });

    test("Pass an invalid number: 0, and expect null", () => {
        //Arrange
        const length = 0
        //Act
        const result = characterGenerator(length);
        //Assert
        expect(result).toBeNull();
    });

    test("Pass an invalid string value, and expect null", () => {
        //Arrange
        const length = "test"
        //Act
        const result = characterGenerator(length);
        //Assert
        expect(result).toBeNull();
    });

    test("Pass an invalid number: -1, and expect null", () => {
        //Arrange
        const length = -1
        //Act
        const result = characterGenerator(length);
        //Assert
        expect(result).toBeNull();
    });

    test("Pass an invalid number: 5.5, and expect null", () => {
        //Arrange
        const length = 5.5
        //Act
        const result = characterGenerator(length);
        //Assert
        expect(result).toBeNull();
    });

})

describe("Run tests for numberGenerator function", () => {

    test("Pass a valid number: 1, and expect a string with 1 character of following value: [0-9]", () => {
        //Arrange
        const length = 1
        //Act
        const result = numberGenerator(length);
        //Assert
        expect(result).toMatch(/[0-9]/);
    });

    test("Pass a valid number: 4, and expect a string with 4 characters of following values: [0-9]", () => {
        //Arrange
        const length = 4
        //Act
        const result = numberGenerator(length);
        //Assert
        expect(result).toMatch(/[0-9]{4}/);
    });

    test("Pass a valid number: 5, and expect a string with 10 characters of following values: [0-9]", () => {
        //Arrange
        const length = 5
        //Act
        const result = numberGenerator(length);
        // // console.debug(result)
        //Assert
        expect(result).toMatch(/[0-9]{5}/);
    });

    test("Pass an invalid number: 6, and expect null", () => {
        //Arrange
        const length = 6
        //Act
        const result = numberGenerator(length);
        //Assert
        expect(result).toBeNull();
    });

    test("Pass an invalid null value, and expect null", () => {
        //Arrange
        const length = null
        //Act
        const result = numberGenerator(length);
        //Assert
        expect(result).toBeNull();
    });

    test("Pass an invalid number: 0, and expect null", () => {
        //Arrange
        const length = 0
        //Act
        const result = numberGenerator(length);
        //Assert
        expect(result).toBeNull();
    });

    test("Pass an invalid string value, and expect null", () => {
        //Arrange
        const length = "test"
        //Act
        const result = numberGenerator(length);
        //Assert
        expect(result).toBeNull();
    });

    test("Pass an invalid number: -1, and expect null", () => {
        //Arrange
        const length = -1
        //Act
        const result = numberGenerator(length);
        //Assert
        expect(result).toBeNull();
    });

    test("Pass an invalid number: 5.5, and expect null", () => {
        //Arrange
        const length = 5.5
        //Act
        const result = numberGenerator(length);
        //Assert
        expect(result).toBeNull();
    });


})

describe("Run tests for transactionDateGenerator function", () => {

    test("Pass nothing, and expect a string with 6 characters that represent current date in format: 'DDMMYY'", () => {
        const result = transactionDateGenerator();
        expect(result).toMatch(/[0-9]{6}/);
    });

    test("Pass invalid number, and expect a string with 6 characters that represent current date in format: 'DDMMYY'", () => {
        const test = 999
        const result = transactionDateGenerator(test);
        expect(result).toMatch(/[0-9]{6}/);
    });

    test("Pass invalid string, and expect a string with 6 characters that represent current date in format: 'DDMMYY'", () => {
        const test = "str"
        const result = transactionDateGenerator(test);
        expect(result).toMatch(/[0-9]{6}/);
    });

    test("Pass nothing, and don't expect an empty string", () => {

        const result = transactionDateGenerator();
        const length = result.length
        expect(result).not.toBe(length);
    });

    test("Pass nothing, and don't expect an integer", () => {

        const result = transactionDateGenerator();
        const type = typeof result
        expect(type).not.toBe("number");
    });

    test("Pass nothing, and don't expect an null", () => {

        const result = transactionDateGenerator();
        const type = typeof result
        expect(type).not.toBeNull();
    });

})