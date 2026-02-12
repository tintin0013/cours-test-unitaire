/**
 * @module validator
 */

import { calculateAge } from "./module";

/**
 * Validate the age of a person.
 *
 * @param {object} person Object containing at least a birth Date property
 * @throws {Error} Throws AGE_UNDER_18 if the person is under 18 years old
 */
export function validateAge(person) {
    const age = calculateAge(person);

    if (age < 18) {
        throw new Error("AGE_UNDER_18");
    }
}

/**
 * Validate a postal code.
 *
 * @param {string} code French postal code to validate (must contain exactly 5 digits)
 * @throws {Error} Throws INVALID_POSTAL_CODE if format is incorrect
 */
export function validatePostalCode(code) {
    const regex = /^[0-9]{5}$/;

    if (!regex.test(code)) {
        throw new Error("INVALID_POSTAL_CODE");
    }
}

/**
 * Validate an email address.
 *
 * @param {string} email Email address to validate
 * @throws {Error} Throws INVALID_EMAIL if the format is incorrect
 */
export function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(email)) {
        throw new Error("INVALID_EMAIL");
    }
}

/**
 * Validate identity (name or firstname).
 *
 * @param {string} value Name or firstname containing only letters, accents or hyphen
 * @throws {Error} Throws INVALID_IDENTITY if the value is empty or contains invalid characters
 */
export function validateIdentity(value) {

    if (!value) {
        throw new Error("INVALID_IDENTITY");
    }

    const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ-]+$/;

    if (!regex.test(value)) {
        throw new Error("INVALID_IDENTITY");
    }
}

/**
 * Validate a full user object.
 *
 * @param {object} user Object representing a user
 * @param {Date} user.birth Date of birth used to calculate age
 * @param {string} user.postalCode French postal code (5 digits)
 * @param {string} user.email Email address
 * @param {string} user.firstname User firstname
 * @param {string} user.lastname User lastname
 * @returns {boolean} Returns true if all validations pass
 * @throws {Error} Throws an error if any validation fails
 */
export function validateUser(user) {
    validateAge(user);
    validatePostalCode(user.postalCode);
    validateEmail(user.email);
    validateIdentity(user.firstname);
    validateIdentity(user.lastname);

    return true;
}