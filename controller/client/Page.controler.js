const Product = require("../../model/product.model");


const { multipleMongooseToObject, mongooseToObject } = require("../../util/mongoose");

class PageController {
    // [GET] /
    async index(req, res, err) {
        const products = await Product.find({});
        res.render("pages/home",
            {
                title: "Trung tâm thông tin thư viện - HaUI - Nhóm 7",
                products: multipleMongooseToObject(products)
            }
        )
    }

}

module.exports = new PageController()