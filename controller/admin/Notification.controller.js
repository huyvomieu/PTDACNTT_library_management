const Notification = require("../../model/notification.model")


class NotificationController {
    // [GET] /admin/notification
    index(req, res, err) {
        res.render('admin/notification/index',
            {
                titleAction: "notification",
                title: "Thông báo",
                layout: "admin"
            }
        );
    }
    // [GET] /admin/notification/create
    create(req, res, err) {
        res.render('admin/notification/create',
            {
                titleAction: "notification",
                title: "Thêm mới thông báo",
                layout: "admin"
            }
        );
    }
    // [POST] /admin/notification/create
    async createPost(req, res, err) {
        const notification = new Notification(req.body);
        await notification.save();
        req.flash("success", "Đăng thông báo thành công");
        res.redirect("back")
    }


}

module.exports = new NotificationController()