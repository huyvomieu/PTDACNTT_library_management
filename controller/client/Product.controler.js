const Product = require("../../model/product.model");


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


}

module.exports = new ProductController()