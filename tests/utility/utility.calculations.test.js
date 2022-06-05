const { calculateVolume, calculateAmount } = require("../../src/utility/utility.calculations");

describe("Run tests for calculateVolume function", () => {

    test("Pass a valid height = 1, width= 1, depth= 1, and expect a number with value 1", () => {
        //Arrange
        const value = 1
        //Act
        const result = calculateVolume(value, value, value);
        //Assert
        expect(result).toEqual(1);
    });

    test("Pass a valid height = 5, width= 5, depth= 5, and expect a number with value 125", () => {
        //Arrange
        const value = 5
        //Act
        const result = calculateVolume(value, value, value);
        //Assert
        expect(result).toEqual(125);
    });

    test("Pass a valid height = 0.01, width= 0.01, depth= 0.01, and expect a number with value 0.000001", () => {
        //Arrange
        const value = 0.01
        //Act
        const result = calculateVolume(value, value, value);
        //Assert
        expect(result).toEqual(0.01);
    });

    test("Pass a valid height = 3.3, width= 1.1, depth= 5.5, and expect a number with value 19.965", () => {
        //Arrange
        const height = 3.3;
        const width = 1.1;
        const depth = 5.5;
        //Act
        const result = calculateVolume(height, width, depth);
        //Assert
        expect(result).toEqual(19.965);
    });

    test("Pass a valid height = 3.3, width= 1.1, depth= 5.5, and expect a number with value 19.965", () => {
        //Arrange
        const height = 3.3;
        const width = 1.1;
        const depth = 5.5;
        //Act
        const result = calculateVolume(height, width, depth);
        //Assert
        expect(result).toEqual(19.965);
    });

    test("Pass a valid height = 10.5, width= 20.5, depth= 30.5, and expect a number with value 19.965", () => {
        //Arrange
        const height = 10.5;
        const width = 20.5;
        const depth = 30.5;
        //Act
        const result = calculateVolume(height, width, depth);
        //Assert
        expect(result).toEqual(6565.125);
    });

    test("Pass an invalid height = 0 and valid width = 0.01, depth = 1, and expect undefined", () => {
        //Arrange
        const height = 0;
        const width = 0.01;
        const depth = 1;
        //Act
        const result = calculateVolume(height, width, depth);
        //Assert
        expect(result).toBeUndefined();
    });

    test("Pass an invalid height = 0, width = 0 and valid depth = 1, and expect undefined", () => {
        //Arrange
        const height = 0;
        const width = 0;
        const depth = 1;
        //Act
        const result = calculateVolume(height, width, depth);
        //Assert
        expect(result).toBeUndefined();
    });

    test("Pass an invalid height = -1 and valid width = 0.01, depth = 1, and expect undefined", () => {
        //Arrange
        const height = -1;
        const width = 0.01;
        const depth = 1;
        //Act
        const result = calculateVolume(height, width, depth);
        //Assert
        expect(result).toBeUndefined();
    });

    test("Pass an invalid height = -0.01 and valid width = 1, depth = 1, and expect undefined", () => {
        //Arrange
        const height = -0.01;
        const width = 1;
        const depth = 1;
        //Act
        const result = calculateVolume(height, width, depth);
        //Assert
        expect(result).toBeUndefined();
    });

    test("Pass an invalid string height = 'test' and valid number width = 1, depth = 1, and expect undefined", () => {
        //Arrange
        const height = "test";
        const width = 1;
        const depth = 1;
        //Act
        const result = calculateVolume(height, width, depth);
        //Assert
        expect(result).toBeUndefined();
    });

    test("Pass an invalid value height = null and valid number width = 1, depth = 1, and expect undefined", () => {
        //Arrange
        const height = null;
        const width = 1;
        const depth = 1;
        //Act
        const result = calculateVolume(height, width, depth);
        //Assert
        expect(result).toBeUndefined();
    });

    test("Pass nothing, and expect undefined", () => {

        //Act
        const result = calculateVolume();
        //Assert
        expect(result).toBeUndefined();
    });
})

