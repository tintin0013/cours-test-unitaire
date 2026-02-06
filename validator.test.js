const {
    validateAge,
    validatePostalCode,
    validateEmail,
    validateIdentity
} = require("./validator");

/**
 * Tests unitaires pour les validations
 */

describe("validator", () => {

    it("should throw an error if age is under 18", () => {
        const person = {
            birth: new Date("2010-01-01")
        };

        expect(() => {
            validateAge(person);
        }).toThrow();
    });

    it("should not throw an error if age is 18 or more", () => {
        const person = {
            birth: new Date("1990-01-01")
        };

        expect(() => {
            validateAge(person);
        }).not.toThrow();
    });

    it("should handle leap year birth date (29 february)", () => {
        const person = {
            birth: new Date("2004-02-29")
        };

        expect(() => {
            validateAge(person);
        }).not.toThrow();
    });

    it("should throw an error if postal code is invalid", () => {
        expect(() => {
            validatePostalCode("75A01");
        }).toThrow();
    });

    it("should not throw an error if postal code is valid", () => {
        expect(() => {
            validatePostalCode("75001");
        }).not.toThrow();
    });

    it("should throw an error if postal code length is not 5", () => {
        expect(() => {
            validatePostalCode("123");
        }).toThrow();
    });

    it("should throw an error if email is invalid", () => {
        expect(() => {
            validateEmail("testmail.com");
        }).toThrow();
    });

    it("should not throw an error if email is valid", () => {
        expect(() => {
            validateEmail("test@mail.com");
        }).not.toThrow();
    });

    it("should throw an error if email is null", () => {
        expect(() => {
            validateEmail(null);
        }).toThrow();
    });

    it("should throw an error if identity contains html tags", () => {
        expect(() => {
            validateIdentity("<b>Jean</b>");
        }).toThrow();
    });

    it("should throw an error if identity contains script tag", () => {
        expect(() => {
            validateIdentity("<script>alert(1)</script>");
        }).toThrow();
    });

    it("should throw an error if identity is null", () => {
        expect(() => {
            validateIdentity(null);
        }).toThrow();
    });

});