import { calculateAge } from "./module";

/**
 * @function calculateAge
 */

describe("calculateAge Unit Test Suites", () => {
    it("should return a correct age", () => {
        const loise = {
            birth: new Date("1991-07-11"),
        };

        //       const currentYear = new Date().getFullYear();
        //       const expectedAge = currentYear - 1991;
        
        const dateDiff = new Date(Date.now() - loise.birth.getTime());
        const expectedAge = Math.abs(dateDiff.getUTCFullYear() - 1970);

        expect(calculateAge(loise)).toEqual(expectedAge);
    });

    it('should throw a "missing param p" error', () => {
        expect(() => calculateAge()).toThrow("missing param p");
    });

    it("should throw an error if the param is not an object", () => {
        expect(() => calculateAge(12)).toThrow();
    });

    it("should throw an error if object has no birth field", () => {
        const p = {};
        expect(() => calculateAge(p)).toThrow();
    });

    it("should throw an error if birth is not a date", () => {
        const p = {
            birth: "1991-07-11",
        };
        expect(() => calculateAge(p)).toThrow();
    });

    it("should return NaN if birth date is invalid", () => {
        const p = {
            birth: new Date("not a real date"),
        };
        expect(() => calculateAge(p)).toThrow("birth date is invalid");
    });

    it("age depends on the current year", () => {
        const p = {
            birth: new Date("1991-07-11"),
        };
        const age = calculateAge(p);
        expect(typeof age).toBe("number");
    });
});
