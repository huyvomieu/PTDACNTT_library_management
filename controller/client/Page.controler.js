const Product = require("../../model/product.model");
const Notification = require("../../model/notification.model");


const { multipleMongooseToObject, mongooseToObject } = require("../../util/mongoose");

class PageController {
    // [GET] /
    async index(req, res, err) {
        const products = await Product.find({});
        const notification = await Notification.findOne({}).limit(1).sort("desc");
        if (notification) {
            res.cookie("notification", notification.title + "-" + notification.description);
        }
        res.render("pages/home",
            {
                title: "Trung tâm thông tin thư viện - HaUI - Nhóm 7",
                products: multipleMongooseToObject(products)
            }
        )
    }

}

module.exports = new PageController()