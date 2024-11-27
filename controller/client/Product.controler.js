const Product = require("../../model/product.model");
const User = require("../../model/user.model");


const { multipleMongooseToObject, mongooseToObject } = require("../../util/mongoose");
const searchRegx = require("../../helpers/search")

class ProductController {
    // [GET] /product/api/all
    async listProduct(req, res, err) {
        let query = req.query.q;
        let finds = {
            title: searchRegx(query)
        }
        let products = await Product.find(finds).limit(4);
        // console.log(products)
        products = multipleMongooseToObject(products);
        res.json(products)

    }
    // [GET] /product/:slug
    async detail(req, res, err) {
        let slug = req.params.slug;
        let product = await Product.findOne({ slug: slug });
        product = product.toObject();
        res.render('product/detail',
            {
                title: product.title,
                product
            }
        );
    }
    // [POST] /product/:productId/:userId
    async borrow(req, res, err) {
        let proId = req.params.productId;
        let userId = req.params.userId;
        let user = await User.findOne({ _id: userId });
        if (!user) {
            res.redirect("/user/login")
            return;
        }
        let existProductInUser = user.products.find(item => item.productId == proId)
        if (!existProductInUser) {
            let objProduct = {
                productId: proId,
                quantity: 1,
                BorrowedAt: new Date(),
                ExpireAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)

            }
            await User.findOneAndUpdate(
                {
                    _id: userId
                },
                {
                    $push:
                    {
                        products: objProduct
                    }
                }
            )
        }
        else {
            let quantityNew = existProductInUser.quantity + 1;
            await User.findOneAndUpdate(
                {
                    _id: userId,
                    "products.productId": proId
                },
                {
                    $set:
                    {
                        "products.$.quantity": quantityNew
                    }
                }
            )
        }
        let Productborrow = await Product.findOne({ _id: proId });
        let borrowPro = Productborrow.borrow + 1;
        await Product.findOneAndUpdate({ _id: proId }, { $set: { borrow: borrowPro } })
        req.flash("success", "Đặt mượn sách thành công!")
        res.redirect("back")
    }



}

module.exports = new ProductController()