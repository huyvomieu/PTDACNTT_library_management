const Notification = require("../../model/notification.model")

const mongooseToObject = require("../../util/mongoose")

class NotificationController {
    // [GET] /admin/notification
    async index(req, res, err) {
        const records = await Notification.find({});

        res.render('admin/notification/index',
            {
                titleAction: "notification",
                title: "Thông báo",
                layout: "admin",
                notification: mongooseToObject.multipleMongooseToObject(records)
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
    // [DELETE] /admin/notification/delete/:id
    async delete(req, res, err) {
        try {
            await Notification.findOneAndDelete({ _id: req.params.id })
            req.flash("success", "Xóa thông báo thành công");
            res.redirect("back")
        } catch (err) {
            console.log("lỗi...");
        }

    }


}

module.exports = new NotificationController()