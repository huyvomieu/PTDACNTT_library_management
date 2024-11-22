
const User = require("../../model/user.model")

const md5 = require("md5")
class UserController {

    // [GET] /user/login
    login(req, res, err) {
        res.render('user/login',
            {
                layout: "signup",
                title: "Đăng nhập",

            }
        );
    }
    // [POST] /user/register
    async registerPost(req, res, err) {
        console.log(req.body)
        const email = req.body.email
        const existEmail = await User.findOne({ email: email })
        if (existEmail) {
            req.flash('danger', "Email đã tồn tại trên hệ thống")
            res.redirect('back')
            return;
        }
        req.body.password = md5(req.body.password)
        const user = new User(req.body)
        await user.save();

        req.flash("success", "Tạo tài khoản thành công");
        res.cookie("token", user.token);
        res.locals.user = user;
        res.redirect('/')
    }
    // [POST] /user/login
    async loginPost(req, res, err) {
        let email = req.body.email
        let password = md5(req.body.password)
        const existEmail = await User.findOne({ email: email })
        if (!existEmail) {
            req.flash('danger', "Email không tồn tại trên hệ thống")
            res.redirect('back')
            return;
        }
        if (password != existEmail.password) {
            req.flash('danger', "Mật khẩu không đúng!")
            res.redirect('back')
            return;
        }
        res.cookie("token", existEmail.token);
        res.locals.user = existEmail;
        res.redirect('/')
    }
    // [GET] /user/register
    register(req, res, err) {
        res.render('user/register',
            {
                layout: "signup",
                title: "Đăng kí",

            }
        );
    }
    // [GET] /user/logout
    logout(req, res, err) {
        res.clearCookie('token');
        res.redirect("back")
    }
    // [GET] /user/
    index(req, res, err) {
        res.render("user/info")
    }
    // [PATCH] /user/update/:id
    async update(req, res, err) {
        let id = req.params.id;
        let fullname = req.body.fullname;
        let email = req.body.email;
        await User.findOneAndUpdate({ _id: id }, { $set: { fullname: fullname, email: email } })
        req.flash("success", "Cập nhật thông tin thành công!")
        res.redirect("back")
    }



}

module.exports = new UserController()