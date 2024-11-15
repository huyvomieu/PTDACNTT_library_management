module.exports = (query) => {
    if (query) {
        var regx = new RegExp(query, 'i')
    }
    return regx
}