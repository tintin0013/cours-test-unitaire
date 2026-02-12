/**
 * Calculate a person's age in years.
 *
 * @param {object} p An object representing a person, implementing a birth Date parameter.
 * @returns {number} The age in years of p.
 */
export function calculateAge(p) {

    if (!p) {
        throw new Error("missing param p");
    }

    if (typeof p !== "object") {
        throw new Error("param p is not an object");
    }

    if (!p.birth) {
        throw new Error("missing birth field");
    }

    if (!(p.birth instanceof Date)) {
        throw new Error("birth is not a date");
    }

    if (isNaN(p.birth.getTime())) {
        throw new Error("birth date is invalid");
    }

    const today = new Date();
    const birthDate = p.birth;

    let age = today.getFullYear() - birthDate.getFullYear();

    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
        age--;
    }

    return age;
}