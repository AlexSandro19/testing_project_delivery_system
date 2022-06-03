const { getDateInSqlFormat } = require("../../src/utility/utility.functions");

describe("Run tests for getDateInSqlFormat function", () => {
    test("Pass a valid Date object and expect a string representation of it in format 'YYYY-MM-DD hh:mm:ss'", () => {
        //Arrange
        const today = new Date("2022-01-01T12:00:00.000")
        //Act
        const result = getDateInSqlFormat(today);
        //Assert
        expect(result).toEqual("2022-01-01 12:00:00");
    });

    test("Pass a valid Date object with month and day smaller than 10 and expect a string representation of it in format 'YYYY-MM-DD hh:mm:ss'", () => {
        //Arrange
        const today = new Date("2022-05-05T12:00:00.000")
        //Act
        const result = getDateInSqlFormat(today);
        //Assert
        expect(result).toEqual("2022-05-05 12:00:00");
    });

    test("Pass a valid Date object with month and day bigger than 10 and expect a string representation of it in format 'YYYY-MM-DD hh:mm:ss'", () => {
        //Arrange
        const today = new Date("2022-10-10T12:00:00.000")
        //Act
        const result = getDateInSqlFormat(today);
        //Assert
        expect(result).toEqual("2022-10-10 12:00:00");
    });

    test("Pass a valid Date object with hour, minutes and seconds smaller than 10 and expect a string representation of it in format 'YYYY-MM-DD hh:mm:ss'", () => {
        //Arrange
        const today = new Date("2022-05-05T07:07:07.000")
        //Act
        const result = getDateInSqlFormat(today);
        //Assert
        expect(result).toEqual("2022-05-05 07:07:07");
    });

    test("Pass a valid Date object with hour, minutes and seconds bigger than 10 and expect a string representation of it in format 'YYYY-MM-DD hh:mm:ss'", () => {
        //Arrange
        const today = new Date("2022-10-10T14:14:14.000")
        //Act
        const result = getDateInSqlFormat(today);
        //Assert
        expect(result).toEqual("2022-10-10 14:14:14");
    });

    test("Pass an invalid Date object and expect null", () => {
        //Arrange
        const today = new Date("202999-01-01T12:00:00.000")
        //Act
        const result = getDateInSqlFormat(today);
        //Assert
        expect(result).toBe(null);
    });

    test("Pass a invalid object and expect null", () => {
        //Arrange
        const today = new Object;
        //Act
        const result = getDateInSqlFormat(today);
        //Assert
        expect(result).toBe(null);
    });

    test("Pass a invalid string and expect null", () => {
        //Arrange
        const today = "test";
        //Act
        const result = getDateInSqlFormat(today);
        //Assert
        expect(result).toBe(null);
    });

    test("Pass a invalid number and expect null", () => {
        //Arrange
        const today = 999;
        //Act
        const result = getDateInSqlFormat(today);
        //Assert
        expect(result).toBe(null);
    });

    test("Pass a invalid null vallue and expect null", () => {
        //Arrange
        const today = null;
        //Act
        const result = getDateInSqlFormat(today);
        //Assert
        expect(result).toBe(null);
    });

    test("Pass a nothing and expect null", () => {
        //Act
        const result = getDateInSqlFormat();
        //Assert
        expect(result).toBe(null);
    });

})