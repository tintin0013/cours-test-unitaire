function calculateAge(p) {
    let dateDiff = new Date(date.now() - p.birth.getTime())
    let age = Math.abs(dateDiff.getUTCFullYear() - 1970)
    return age
}