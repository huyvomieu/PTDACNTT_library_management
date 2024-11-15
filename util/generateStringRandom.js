const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
module.exports = (number) => {
    let rs = "";
    for (let i = 0; i < number; i++) {
        rs += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return rs;
}