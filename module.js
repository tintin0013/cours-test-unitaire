/**
 * Calculate a person's age in years.
 *
 * @param {object} p An object representing a person, implementing a birth Date parameter.
 * @return {number} The age in years of p.
 */
function calculateAge(p) {

    if (!p) {
        throw new Error("missing param p")
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

    let dateDiff = new Date(Date.now() - p.birth.getTime())
    let age = Math.abs(dateDiff.getUTCFullYear() - 1970);
    return age;
}

export { calculateAge }