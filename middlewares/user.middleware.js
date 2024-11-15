const User = require("../model/user.model")
module.exports = async (req, res, next) => {
    let tokenUser = req.cookies.token
    const user = await User.findOne({ token: tokenUser })
    if (user) {
        res.locals.user = user;
    }
    next();

}