/**
 * @module validator
 */

const { calculateAge } = require("./module");

/**
 * Validate the age of a person.
 *
 * @param {object} person
 * @throws {Error}
 */
function validateAge(person) {
    const age = calculateAge(person);

    if (age < 18) {
        throw new Error("AGE_UNDER_18");
    }
}

/**
 * Validate a postal code.
 *
 * @param {string} code
 * @throws {Error}
 */
function validatePostalCode(code) {
    if (isNaN(code) || code.length !== 5) {
        throw new Error("INVALID_POSTAL_CODE");
    }
}

/**
 * Validate an email address.
 *
 * @param {string} email
 * @throws {Error}
 */
function validateEmail(email) {
    if (!email.includes("@") || !email.includes(".")) {
        throw new Error("INVALID_EMAIL");
    }
}

/**
 * Validate identity (name or firstname).
 *
 * @param {string} value
 * @throws {Error}
 */
function validateIdentity(value) {
    // refuse numbers
    for (let i = 0; i < value.length; i++) {
        if (!isNaN(value[i])) {
            throw new Error("INVALID_IDENTITY");
        }
    }

    // basic XSS protection
    if (value.includes("<") || value.includes(">")) {
        throw new Error("INVALID_IDENTITY");
    }
}

module.exports = {
    validateAge,
    validatePostalCode,
    validateEmail,
    validateIdentity
};