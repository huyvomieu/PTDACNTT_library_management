const Product = require("../../model/product.model");


const { multipleMongooseToObject, mongooseToObject } = require("../../util/mongoose");
class ProductController {
    // [GET] /admin/product/
    async index(req, res, err) {
        const products = await Product.find({});
        res.render('admin/product/index',
            {
                titleAction: "product",
                title: "Quản lý sách",
                layout: "admin",
                products: multipleMongooseToObject(products)
            }
        );
    }
    // [GET] /admin/product/create
    create(req, res, err) {
        res.render('admin/product/create',
            {
                titleAction: "product",
                title: "Thêm sách mới",
                layout: "admin"
            }
        );
    }
    // [GET] /admin/product/:id/edit
    async edit(req, res, err) {
        let id = req.params.id;
        let record = await Product.findOne({ _id: id });
        record = record.toObject();
        res.render('admin/product/edit',
            {
                titleAction: "product",
                title: record.title,
                layout: "admin",
                product: record
            }
        );
    }
    // [POST] /admin/product/create
    async createPost(req, res, err) {
        try {
            const product = new Product(req.body);
            await product.save();
            req.flash("success", "Thêm sách thành công!");
            res.redirect("back");
        } catch (error) {
            req.flash("error", "Thêm sách thất bại!");
            res.redirect("back");
        }
    }
    // [PATCH] /admin/product/:id
    async editPatch(req, res, err) {
        try {
            const id = req.params.id
            await Product.findOneAndUpdate({ _id: req.params.id }, req.body)
            req.flash("success", "Sửa sách thành công!");
            res.redirect("back");
        } catch (error) {
            req.flash("error", "Sửa sách thất bại!");
            res.redirect("back");
        }
    }
    // [DELETE] /admin/product/:id
    async delete(req, res, err) {
        try {
            const id = req.params.id
            await Product.findOneAndDelete({ _id: req.params.id })
            req.flash("success", "Xóa sách thành công!");
            res.redirect("back");
        } catch (error) {
            req.flash("error", "Xóa sách thất bại!");
            res.redirect("back");
        }


    }


}

module.exports = new ProductController()