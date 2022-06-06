const { calculateVolume, calculateAmount } = require("../../../src/utility/utility.calculations");

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
        expect(result).toEqual(1);
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

    test("Pass a valid height = 50, width= 50, depth= 50, and expect a number with value 6565.125", () => {
        //Arrange
        const height = 50;
        const width = 50;
        const depth = 50;
        //Act
        const result = calculateVolume(height, width, depth);
        //Assert
        expect(result).toEqual(125000);
    });


    test("Pass a valid height = 100, width= 20.5, depth= 30.5, and expect a number with value 6565.125", () => {
        //Arrange
        const height = 10.5;
        const width = 20.5;
        const depth = 30.5;
        //Act
        const result = calculateVolume(height, width, depth);
        //Assert
        expect(result).toEqual(6565.125);
    });

    test("Pass a valid height = 100, width= 100, depth= 100, and expect a number with value 6565.125", () => {
        //Arrange
        const height = 100;
        const width = 100;
        const depth = 100;
        //Act
        const result = calculateVolume(height, width, depth);
        //Assert
        expect(result).toEqual(1000000);
    });

    test("Pass an invalid height = 0 and valid width = 0.01, depth = 1, and expect null", () => {
        //Arrange
        const height = 0;
        const width = 0.01;
        const depth = 1;
        //Act
        const result = calculateVolume(height, width, depth);
        //Assert
        expect(result).toBeNull();
    });

    test("Pass an invalid height = 0, width = 0 and valid depth = 1, and expect null", () => {
        //Arrange
        const height = 0;
        const width = 0;
        const depth = 1;
        //Act
        const result = calculateVolume(height, width, depth);
        //Assert
        expect(result).toBeNull();
    });

    test("Pass an invalid height = -1 and valid width = 0.01, depth = 1, and expect null", () => {
        //Arrange
        const height = -1;
        const width = 0.01;
        const depth = 1;
        //Act
        const result = calculateVolume(height, width, depth);
        //Assert
        expect(result).toBeNull();
    });

    test("Pass an invalid height = -0.01 and valid width = 1, depth = 1, and expect null", () => {
        //Arrange
        const height = -0.01;
        const width = 1;
        const depth = 1;
        //Act
        const result = calculateVolume(height, width, depth);
        //Assert
        expect(result).toBeNull();
    });

    test("Pass an invalid string height = 'test' and valid number width = 1, depth = 1, and expect null", () => {
        //Arrange
        const height = "test";
        const width = 1;
        const depth = 1;
        //Act
        const result = calculateVolume(height, width, depth);
        //Assert
        expect(result).toBeNull();
    });

    test("Pass an invalid value height = null and valid number width = 1, depth = 1, and expect null", () => {
        //Arrange
        const height = null;
        const width = 1;
        const depth = 1;
        //Act
        const result = calculateVolume(height, width, depth);
        //Assert
        expect(result).toBeNull();
    });

    test("Pass a valid height = 1000, width= 1000, depth= 1000, and expect a number with value 6565.125", () => {
        //Arrange
        const height = 1000;
        const width = 1000;
        const depth = 1000;
        //Act
        const result = calculateVolume(height, width, depth);
        //Assert
        expect(result).toBeNull();
    });

    test("Pass nothing, and expect null", () => {

        //Act
        const result = calculateVolume();
        //Assert
        expect(result).toBeNull();
    });
})

describe("Run tests for calculateAmount function", () => {

    describe("Test volume values and keep the rest of variables with valid values", () => {

        test("Pass valid value for package weight = 1, while rest is : volume = 1, international = 0, electronics = 0, oddsized = 0, fragile = 0 and expect a number with value 35", () => {
            //Arrange
            const weight = 1;
            const volume = 1;
            const international = 0;
            const electronics = 0;
            const oddsized = 0;
            const fragile = 0;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toEqual(35);
        });

        test("Pass valid value for package weight = 2, while rest is : volume = 1, international = 0, electronics = 0, oddsized = 0, fragile = 0 and expect a number with value 35", () => {
            //Arrange
            const weight = 2;
            const volume = 1;
            const international = 0;
            const electronics = 0;
            const oddsized = 0;
            const fragile = 0;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toEqual(35);
        });

        test("Pass valid value for package weight = 400, while rest is : volume = 1, international = 0, electronics = 0, oddsized = 0, fragile = 0 and expect a number with value 35", () => {
            //Arrange
            const weight = 400;
            const volume = 1;
            const international = 0;
            const electronics = 0;
            const oddsized = 0;
            const fragile = 0;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toEqual(35);
        });

        test("Pass valid value for package weight = 799.9, while rest is : volume = 1, international = 0, electronics = 0, oddsized = 0, fragile = 0 and expect a number with value 35", () => {
            //Arrange
            const weight = 799.9;
            const volume = 1;
            const international = 0;
            const electronics = 0;
            const oddsized = 0;
            const fragile = 0;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toEqual(35);
        });

        test("Pass valid value for package weight = 800, while rest is : volume = 1, international = 0, electronics = 0, oddsized = 0, fragile = 0 and expect a number with value 35", () => {
            //Arrange
            const weight = 800;
            const volume = 1;
            const international = 0;
            const electronics = 0;
            const oddsized = 0;
            const fragile = 0;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toEqual(52.5);
        });

        test("Pass valid value for package weight = 800.1, while rest is : volume = 1, international = 0, electronics = 0, oddsized = 0, fragile = 0 and expect a number with value 52.5", () => {
            //Arrange
            const weight = 800.1;
            const volume = 1;
            const international = 0;
            const electronics = 0;
            const oddsized = 0;
            const fragile = 0;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toEqual(52.5);
        });

        test("Pass valid value for package weight = 6650, while rest is : volume = 1, international = 0, electronics = 0, oddsized = 0, fragile = 0 and expect a number with value 52.5", () => {
            //Arrange
            const weight = 6650;
            const volume = 1;
            const international = 0;
            const electronics = 0;
            const oddsized = 0;
            const fragile = 0;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toEqual(52.5);
        });

        test("Pass valid value for package weight = 12499.9, while rest is : volume = 1, international = 0, electronics = 0, oddsized = 0, fragile = 0 and expect a number with value 52.5", () => {
            //Arrange
            const weight = 12499.9;
            const volume = 1;
            const international = 0;
            const electronics = 0;
            const oddsized = 0;
            const fragile = 0;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toEqual(52.5);
        });

        test("Pass valid value for package weight = 12500, while rest is : volume = 1, international = 0, electronics = 0, oddsized = 0, fragile = 0 and expect a number with value 70", () => {
            //Arrange
            const weight = 12500;
            const volume = 1;
            const international = 0;
            const electronics = 0;
            const oddsized = 0;
            const fragile = 0;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toEqual(52.5);
        });

        test("Pass valid value for package weight = 12500.1, while rest is : volume = 1, international = 0, electronics = 0, oddsized = 0, fragile = 0 and expect a number with value 70", () => {
            //Arrange
            const weight = 12500.1;
            const volume = 1;
            const international = 0;
            const electronics = 0;
            const oddsized = 0;
            const fragile = 0;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toEqual(70);
        });

        test("Pass valid value for package weight = 100000, while rest is : volume = 1, international = 0, electronics = 0, oddsized = 0, fragile = 0 and expect a number with value 70", () => {
            //Arrange
            const weight = 100000;
            const volume = 1;
            const international = 0;
            const electronics = 0;
            const oddsized = 0;
            const fragile = 0;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toEqual(70);
        });

        test("Pass valid value for package weight = 999999, while rest is : volume = 1, international = 0, electronics = 0, oddsized = 0, fragile = 0 and expect a number with value 70", () => {
            //Arrange
            const weight = 999999;
            const volume = 1;
            const international = 0;
            const electronics = 0;
            const oddsized = 0;
            const fragile = 0;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toEqual(70);
        });

        test("Pass valid value for package weight = 1000000, while rest is : volume = 1, international = 0, electronics = 0, oddsized = 0, fragile = 0 and expect a number with value 70", () => {
            //Arrange
            const weight = 1000000;
            const volume = 1;
            const international = 0;
            const electronics = 0;
            const oddsized = 0;
            const fragile = 0;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toEqual(70);
        });

        test("Pass invalid value for package weight = 1000001, while rest is : volume = 1, international = 0, electronics = 0, oddsized = 0, fragile = 0 and expect a number with value 70", () => {
            //Arrange
            const weight = 1000001;
            const volume = 1;
            const international = 0;
            const electronics = 0;
            const oddsized = 0;
            const fragile = 0;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toBeNull();
        });

        test("Pass invalid value for package weight = -1, while rest is : volume = 1, international = 0, electronics = 0, oddsized = 0, fragile = 0 and expect a number with value 70", () => {
            //Arrange
            const weight = -1;
            const volume = 1;
            const international = 0;
            const electronics = 0;
            const oddsized = 0;
            const fragile = 0;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toBeNull();
        });

        test("Pass invalid value for package weight = 0, while rest is : volume = 1, international = 0, electronics = 0, oddsized = 0, fragile = 0 and expect a number with value 70", () => {
            //Arrange
            const weight = 0;
            const volume = 1;
            const international = 0;
            const electronics = 0;
            const oddsized = 0;
            const fragile = 0;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toBeNull();
        });

        test("Pass invalid value for package weight = 'str', while rest is : volume = 1, international = 0, electronics = 0, oddsized = 0, fragile = 0 and expect a number with value 70", () => {
            //Arrange
            const weight = "str";
            const volume = 1;
            const international = 0;
            const electronics = 0;
            const oddsized = 0;
            const fragile = 0;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toBeNull();
        });

        test("Pass invalid value for package weight = null, while rest is : volume = 1, international = 0, electronics = 0, oddsized = 0, fragile = 0 and expect a number with value 70", () => {
            //Arrange
            const weight = null;
            const volume = 1;
            const international = 0;
            const electronics = 0;
            const oddsized = 0;
            const fragile = 0;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toBeNull();
        });

    })

    describe("Test weight values and keep the rest of variables with valid values", () => {

        test("Pass valid value for package volume = 1, while rest is : weight = 1, international = 0, electronics = 0, oddsized = 0, fragile = 0 and expect a number with value 35", () => {
            //Arrange
            const weight = 1;
            const volume = 1;
            const international = 0;
            const electronics = 0;
            const oddsized = 0;
            const fragile = 0;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toEqual(35);
        });

        test("Pass valid value for package volume = 2, while rest is : weight = 1, international = 0, electronics = 0, oddsized = 0, fragile = 0 and expect a number with value 35", () => {
            //Arrange
            const weight = 1;
            const volume = 2;
            const international = 0;
            const electronics = 0;
            const oddsized = 0;
            const fragile = 0;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toEqual(35);
        });

        test("Pass valid value for package volume = 3, while rest is : weight = 1, international = 0, electronics = 0, oddsized = 0, fragile = 0 and expect a number with value 35", () => {
            //Arrange
            const weight = 1;
            const volume = 3;
            const international = 0;
            const electronics = 0;
            const oddsized = 0;
            const fragile = 0;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toEqual(52.5);
        });

        test("Pass valid value for package volume = 3.1, while rest is : weight = 1, international = 0, electronics = 0, oddsized = 0, fragile = 0 and expect a number with value 35", () => {
            //Arrange
            const weight = 1;
            const volume = 3.1;
            const international = 0;
            const electronics = 0;
            const oddsized = 0;
            const fragile = 0;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toEqual(52.5);
        });

        test("Pass valid value for package volume = 4, while rest is : weight = 1, international = 0, electronics = 0, oddsized = 0, fragile = 0 and expect a number with value 35", () => {
            //Arrange
            const weight = 1;
            const volume = 4;
            const international = 0;
            const electronics = 0;
            const oddsized = 0;
            const fragile = 0;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toEqual(52.5);
        });

        test("Pass valid value for package volume = 5, while rest is : weight = 1, international = 0, electronics = 0, oddsized = 0, fragile = 0 and expect a number with value 52.5", () => {
            //Arrange
            const weight = 1;
            const volume = 5;
            const international = 0;
            const electronics = 0;
            const oddsized = 0;
            const fragile = 0;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            console.log(result)
            //Assert
            expect(result).toEqual(52.5);
        });

        test("Pass valid value for package volume = 5.1, while rest is : weight = 1, international = 0, electronics = 0, oddsized = 0, fragile = 0 and expect a number with value 52.5", () => {
            //Arrange
            const weight = 1;
            const volume = 5.1;
            const international = 0;
            const electronics = 0;
            const oddsized = 0;
            const fragile = 0;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toEqual(70);
        });

        test("Pass valid value for package volume = 27.5, while rest is : weight = 1, international = 0, electronics = 0, oddsized = 0, fragile = 0 and expect a number with value 52.5", () => {
            //Arrange
            const weight = 1;
            const volume = 27.5;
            const international = 0;
            const electronics = 0;
            const oddsized = 0;
            const fragile = 0;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toEqual(70);
        });

        test("Pass valid value for package volume = 49, while rest is : weight = 1, international = 0, electronics = 0, oddsized = 0, fragile = 0 and expect a number with value 70", () => {
            //Arrange
            const weight = 1;
            const volume = 49;
            const international = 0;
            const electronics = 0;
            const oddsized = 0;
            const fragile = 0;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toEqual(70);
        });

        test("Pass valid value for package volume = 50, while rest is : weight = 1, international = 0, electronics = 0, oddsized = 0, fragile = 0 and expect a number with value 70", () => {
            //Arrange
            const weight = 1;
            const volume = 50;
            const international = 0;
            const electronics = 0;
            const oddsized = 0;
            const fragile = 0;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toEqual(70);
        });

        test("Pass invalid value for package volume = 51, while rest is : weight = 1, international = 0, electronics = 0, oddsized = 0, fragile = 0 and expect a number with value 70", () => {
            //Arrange
            const weight = 1;
            const volume = 51;
            const international = 0;
            const electronics = 0;
            const oddsized = 0;
            const fragile = 0;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toBeNull();
        });

        test("Pass invalid value for package volume = -1, while rest is : weight = 1, international = 0, electronics = 0, oddsized = 0, fragile = 0 and expect a number with value 70", () => {
            //Arrange
            const weight = 1;
            const volume = -1;
            const international = 0;
            const electronics = 0;
            const oddsized = 0;
            const fragile = 0;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toBeNull();
        });

        test("Pass invalid value for package volume = 0, while rest is : weight = 1, international = 0, electronics = 0, oddsized = 0, fragile = 0 and expect a number with value 70", () => {
            //Arrange
            const weight = 1;
            const volume = 0;
            const international = 0;
            const electronics = 0;
            const oddsized = 0;
            const fragile = 0;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toBeNull();
        });

        test("Pass invalid value for package volume = 'str', while rest is : weight = 1, international = 0, electronics = 0, oddsized = 0, fragile = 0 and expect a number with value 70", () => {
            //Arrange
            const weight = 1;
            const volume = "str";
            const international = 0;
            const electronics = 0;
            const oddsized = 0;
            const fragile = 0;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toBeNull();
        });

        test("Pass invalid value for package volume = null, while rest is : weight = 1, international = 0, electronics = 0, oddsized = 0, fragile = 0 and expect a number with value 70", () => {
            //Arrange
            const weight = 1;
            const volume = null;
            const international = 0;
            const electronics = 0;
            const oddsized = 0;
            const fragile = 0;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toBeNull();
        });

    })

    describe("Test international values and keep the rest of variables with valid values", () => {

        test("Pass valid value for package international = 1, while rest is : weight = 1, volume = 1, international = 0, electronics = 0, oddsized = 0, fragile = 0 and expect a number with value 35", () => {
            //Arrange
            const weight = 1;
            const volume = 1;
            const international = 1;
            const electronics = 0;
            const oddsized = 0;
            const fragile = 0;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toEqual(70);
        });

        test("Pass valid value for package international = 0, while rest is : weight = 1, volume = 1, international = 0, electronics = 0, oddsized = 0, fragile = 0 and expect a number with value 35", () => {
            //Arrange
            const weight = 1;
            const volume = 1;
            const international = 0;
            const electronics = 0;
            const oddsized = 0;
            const fragile = 0;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toEqual(35);
        });

        test("Pass invalid value for package international = -1, while rest is : weight = 1, volume = 1, electronics = 0, oddsized = 0, fragile = 0 and expect a number with value 35", () => {
            //Arrange
            const weight = 1;
            const volume = 1;
            const international = -1;
            const electronics = 0;
            const oddsized = 0;
            const fragile = 0;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toBeNull();
        });

        test("Pass invalid value for package international = 2, while rest is : weight = 1, volume = 1, electronics = 0, oddsized = 0, fragile = 0 and expect a number with value 35", () => {
            //Arrange
            const weight = 1;
            const volume = 1;
            const international = 2;
            const electronics = 0;
            const oddsized = 0;
            const fragile = 0;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toBeNull();
        });

        test("Pass invalid value for package international = 'str', while rest is : weight = 1, volume = 1, electronics = 0, oddsized = 0, fragile = 0 and expect a number with value 35", () => {
            //Arrange
            const weight = 1;
            const volume = 1;
            const international = 'str';
            const electronics = 0;
            const oddsized = 0;
            const fragile = 0;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toBeNull();
        });

        test("Pass invalid value for package international = null, while rest is : weight = 1, volume = 1, electronics = 0, oddsized = 0, fragile = 0 and expect a number with value 35", () => {
            //Arrange
            const weight = 1;
            const volume = 1;
            const international = null;
            const electronics = 0;
            const oddsized = 0;
            const fragile = 0;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toBeNull();
        });
    })
    describe("Test electonics values and keep the rest of variables with valid values", () => {

        test("Pass valid value for package electronics = 1, while rest is : weight = 1, volume = 1, international = 0, oddsized = 0, fragile = 0 and expect a number with value 35", () => {
            //Arrange
            const weight = 1;
            const volume = 1;
            const international = 0;
            const electronics = 1;
            const oddsized = 0;
            const fragile = 0;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toEqual(70);
        });

        test("Pass valid value for package electronics = 0, while rest is : weight = 1, volume = 1, international = 0, oddsized = 0, fragile = 0 and expect a number with value 35", () => {
            //Arrange
            const weight = 1;
            const volume = 1;
            const international = 0;
            const electronics = 0;
            const oddsized = 0;
            const fragile = 0;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toEqual(35);
        });

        test("Pass invalid value for package electronics = -1, while rest is : weight = 1, volume = 1, international = 0, oddsized = 0, fragile = 0 and expect a number with value 35", () => {
            //Arrange
            const weight = 1;
            const volume = 1;
            const international = 0;
            const electronics = -1;
            const oddsized = 0;
            const fragile = 0;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toBeNull();
        });

        test("Pass invalid value for package electronics = 2, while rest is : weight = 1, volume = 1, international = 0, oddsized = 0, fragile = 0 and expect a number with value 35", () => {
            //Arrange
            const weight = 1;
            const volume = 1;
            const international = 0;
            const electronics = 2;
            const oddsized = 0;
            const fragile = 0;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toBeNull();
        });

        test("Pass invalid value for package electronics = 'str', while rest is : weight = 1, volume = 1, international = 0, oddsized = 0, fragile = 0 and expect a number with value 35", () => {
            //Arrange
            const weight = 1;
            const volume = 1;
            const international = 0;
            const electronics = 'str';
            const oddsized = 0;
            const fragile = 0;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toBeNull();
        });

        test("Pass invalid value for package electronics = null, while rest is : weight = 1, volume = 1, international = 0, oddsized = 0, fragile = 0 and expect a number with value 35", () => {
            //Arrange
            const weight = 1;
            const volume = 1;
            const international = 0;
            const electronics = null;
            const oddsized = 0;
            const fragile = 0;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toBeNull();
        });
    })
    describe("Test oddsized values and keep the rest of variables with valid values", () => {

        test("Pass valid value for package oddsized = 1, while rest is : weight = 1, volume = 1, international = 0, electronics = 0, oddsized = 0, fragile = 0 and expect a number with value 35", () => {
            //Arrange
            const weight = 1;
            const volume = 1;
            const international = 0;
            const electronics = 0;
            const oddsized = 1;
            const fragile = 0;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toEqual(70);
        });

        test("Pass valid value for package oddsized = 0, while rest is : weight = 1, volume = 1, international = 0, electronics = 0, fragile = 0 and expect a number with value 35", () => {
            //Arrange
            const weight = 1;
            const volume = 1;
            const international = 0;
            const electronics = 0;
            const oddsized = 0;
            const fragile = 0;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toEqual(35);
        });

        test("Pass invalid value for package oddsized = -1, while rest is : weight = 1, volume = 1, international = 0, electronics = 0, fragile = 0 and expect a number with value 35", () => {
            //Arrange
            const weight = 1;
            const volume = 1;
            const international = 0;
            const electronics = 0;
            const oddsized = -1;
            const fragile = 0;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toBeNull();
        });

        test("Pass invalid value for package oddsized = 2, while rest is : weight = 1, volume = 1, international = 0, electronics = 0, fragile = 0 and expect a number with value 35", () => {
            //Arrange
            const weight = 1;
            const volume = 1;
            const international = 0;
            const electronics = 0;
            const oddsized = 2;
            const fragile = 0;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toBeNull();
        });

        test("Pass invalid value for package oddsized = 'str', while rest is : weight = 1, volume = 1, international = 0, electronics = 0, fragile = 0 and expect a number with value 35", () => {
            //Arrange
            const weight = 1;
            const volume = 1;
            const international = 0;
            const electronics = 0;
            const oddsized = 'str';
            const fragile = 0;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toBeNull();
        });

        test("Pass invalid value for package oddsized = null, while rest is : weight = 1, volume = 1, international = 0, electronics = 0, fragile = 0 and expect a number with value 35", () => {
            //Arrange
            const weight = 1;
            const volume = 1;
            const international = 0;
            const electronics = 0;
            const oddsized = null;
            const fragile = 0;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toBeNull();
        });
    })
    describe("Test fragile values and keep the rest of variables with valid values", () => {

        test("Pass valid value for package fragile = 1, while rest is : weight = 1, volume = 1, international = 0, electronics = 0, oddsized = 0, and expect a number with value 35", () => {
            //Arrange
            const weight = 1;
            const volume = 1;
            const international = 0;
            const electronics = 0;
            const oddsized = 0;
            const fragile = 1;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toEqual(70);
        });

        test("Pass valid value for package fragile = 0, while rest is : weight = 1, volume = 1, international = 0, electronics = 0, oddsized = 0, and expect a number with value 35", () => {
            //Arrange
            const weight = 1;
            const volume = 1;
            const international = 0;
            const electronics = 0;
            const oddsized = 0;
            const fragile = 0;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toEqual(35);
        });

        test("Pass invalid value for package fragile = -1, while rest is : weight = 1, volume = 1, international = 0, electronics = 0, oddsized = 0, and expect a number with value 35", () => {
            //Arrange
            const weight = 1;
            const volume = 1;
            const international = 0;
            const electronics = 0;
            const oddsized = 0;
            const fragile = -1;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toBeNull();
        });

        test("Pass invalid value for package fragile = 2, while rest is : weight = 1, volume = 1, international = 0, electronics = 0, oddsized = 0, and expect a number with value 35", () => {
            //Arrange
            const weight = 1;
            const volume = 1;
            const international = 0;
            const electronics = 0;
            const oddsized = 0;
            const fragile = 2;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toBeNull();
        });

        test("Pass invalid value for package fragile = 'str', while rest is : weight = 1, volume = 1, international = 0, electronics = 0, oddsized = 0, and expect a number with value 35", () => {
            //Arrange
            const weight = 1;
            const volume = 1;
            const international = 0;
            const electronics = 0;
            const oddsized = 0;
            const fragile = 'str';
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toBeNull();
        });

        test("Pass invalid value for package fragile = null, while rest is : weight = 1, volume = 1, international = 0, electronics = 0, oddsized = 0, and expect a number with value 35", () => {
            //Arrange
            const weight = 1;
            const volume = 1;
            const international = null;
            const electronics = 0;
            const oddsized = 0;
            const fragile = null;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toBeNull();
        });
    })

    describe("Test test all variables with valid values", () => {

        test("Pass valid value for package weight = 400, volume = 2, international = 0, electronics = 0, oddsized = 0, fragile = 0 and expect a number with value 35", () => {
            //Arrange
            const weight = 400;
            const volume = 2;
            const international = 0;
            const electronics = 0;
            const oddsized = 0;
            const fragile = 0;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toEqual(35);
        });

        test("Pass valid value for package weight = 400, volume = 2, international = 1, electronics = 0, oddsized = 1, fragile = 0 and expect a number with value 35", () => {
            //Arrange
            const weight = 400;
            const volume = 2;
            const international = 1;
            const electronics = 0;
            const oddsized = 1;
            const fragile = 0;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toEqual(105);
        });

        test("Pass valid value for package weight = 400, volume = 2, international = 1, electronics = 1, oddsized = 1, fragile = 1 and expect a number with value 35", () => {
            //Arrange
            const weight = 400;
            const volume = 2;
            const international = 1;
            const electronics = 1;
            const oddsized = 1;
            const fragile = 1;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toEqual(175);
        });

        test("Pass valid value for package weight = 6650, volume = 4, international = 0, electronics = 0, oddsized = 0, fragile = 0 and expect a number with value 35", () => {
            //Arrange
            const weight = 6650;
            const volume = 4;
            const international = 0;
            const electronics = 0;
            const oddsized = 0;
            const fragile = 0;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toEqual(70);
        });

        test("Pass valid value for package weight = 6650, volume = 4, international = 1, electronics = 0, oddsized = 1, fragile = 0 and expect a number with value 35", () => {
            //Arrange
            const weight = 6650;
            const volume = 4;
            const international = 1;
            const electronics = 0;
            const oddsized = 1;
            const fragile = 0;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toEqual(140);
        });

        test("Pass valid value for package weight = 6650, volume = 4, international = 1, electronics = 1, oddsized = 1, fragile = 1 and expect a number with value 35", () => {
            //Arrange
            const weight = 6650;
            const volume = 4;
            const international = 1;
            const electronics = 1;
            const oddsized = 1;
            const fragile = 1;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toEqual(210);
        });

        test("Pass valid value for package weight = 100000, volume = 27.5, international = 0, electronics = 0, oddsized = 0, fragile = 0 and expect a number with value 35", () => {
            //Arrange
            const weight = 100000;
            const volume = 27.5;
            const international = 0;
            const electronics = 0;
            const oddsized = 0;
            const fragile = 0;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toEqual(105);
        });

        test("Pass valid value for package weight = 100000, volume = 27.5, international = 1, electronics = 0, oddsized = 1, fragile = 0 and expect a number with value 35", () => {
            //Arrange
            const weight = 100000;
            const volume = 27.5;
            const international = 1;
            const electronics = 0;
            const oddsized = 1;
            const fragile = 0;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toEqual(175);
        });

        test("Pass valid value for package weight = 100000, volume = 27.5, international = 1, electronics = 1, oddsized = 1, fragile = 1 and expect a number with value 35", () => {
            //Arrange
            const weight = 100000;
            const volume = 27.5;
            const international = 1;
            const electronics = 1;
            const oddsized = 1;
            const fragile = 1;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toEqual(245);
        });
    })

    describe("Test test all variables with invalid values", () => {

        test("Pass invalid value for package weight = 'str', volume = 27.5, international = 1, electronics = 1, oddsized = 1, fragile = 1 and expect a number with value 35", () => {
            //Arrange
            const weight = 'str';
            const volume = 27.5;
            const international = 1;
            const electronics = 1;
            const oddsized = 1;
            const fragile = 1;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toBeNull();
        });

        test("Pass invalid value for package weight = 100000, volume = -100, international = 1, electronics = 1, oddsized = 1, fragile = 1 and expect a number with value 35", () => {
            //Arrange
            const weight = 100000;
            const volume = -100;
            const international = 1;
            const electronics = 1;
            const oddsized = 1;
            const fragile = 1;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toBeNull();
        });

        test("Pass invalid value for package weight = 1000000000000000000000000000000, volume = 27.5, international = 1, electronics = 1, oddsized = 1, fragile = 1 and expect a number with value 35", () => {
            //Arrange
            const weight = 1000000000000000000000000000000;
            const volume = 27.5;
            const international = 1;
            const electronics = 1;
            const oddsized = 1;
            const fragile = 1;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toBeNull();
        });

        test("Pass invalid value for package weight = 100000, volume = null, international = 1, electronics = 1, oddsized = 1, fragile = 1 and expect a number with value 35", () => {
            //Arrange
            const weight = 100000;
            const volume = null;
            const international = 1;
            const electronics = 1;
            const oddsized = 1;
            const fragile = 1;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toBeNull();
        });

        test("Pass invalid value for package weight = 100000, volume = 27.5, international = 'str', electronics = 1, oddsized = 1, fragile = 1 and expect a number with value 35", () => {
            //Arrange
            const weight = 100000;
            const volume = 27.5;
            const international = 'str';
            const electronics = 1;
            const oddsized = 1;
            const fragile = 1;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toBeNull();
        });

        test("Pass invalid value for package weight = 100000, volume = 27.5, international = 1, electronics = -2, oddsized = 1, fragile = 1 and expect a number with value 35", () => {
            //Arrange
            const weight = 100000;
            const volume = 27.5;
            const international = 1;
            const electronics = -2;
            const oddsized = 1;
            const fragile = 1;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toBeNull();
        });

        test("Pass invalid value for package weight = 100000, volume = 27.5, international = 1, electronics = 1, oddsized = 'str', fragile = 1 and expect a number with value 35", () => {
            //Arrange
            const weight = 100000;
            const volume = 27.5;
            const international = 1;
            const electronics = 1;
            const oddsized = 'str';
            const fragile = 1;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toBeNull();
        });

        test("Pass invalid value for package weight = 100000, volume = 27.5, international = 1, electronics = 1, oddsized = 1, fragile = null and expect a number with value 35", () => {
            //Arrange
            const weight = 100000;
            const volume = 27.5;
            const international = 1;
            const electronics = 1;
            const oddsized = 1;
            const fragile = null;
            //Act
            const result = calculateAmount(weight, volume, international, electronics, oddsized, fragile);
            //Assert
            expect(result).toBeNull();
        });
    })
})



describe("Run parameterized tests with calculateVolume function", () => {
    it.each([
        [1, 1, 1, 1],
        [2.5, 2.5, 2.5, 15.625],
        [5, 5, 5, 125],
        [0.01, 0.01, 0.01, 1],
        [20.5, 30.5, 40.5, 25322.625],
        [100, 100, 100, 1000000],
    ])(
        (height, width, depth, result) => {
            const response = calculateVolume(height, width, depth);
            expect(response).toEqual(result);
        }
    );
});