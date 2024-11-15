module.exports = (req, res, next) => {

    const code = req.body.code;
    const title = req.body.title;
    const quantity = req.body.quantity;
    const price = req.body.price;
    const description = req.body.description;
    if (code.length < 6) {
        req.flash("error", "Mã sách > 3 kí tự");
        res.redirect("back");
        return;
    }
    if (title.length < 3) {
        req.flash("error", "Tên sách > 3 kí tự");
        res.redirect("back");
        return;
    }
    if (quantity <= 0 || quantity > 100) {
        req.flash("error", "Số lượng sách phải > 0 hoặc < 1000 ");
        res.redirect("back");
        return;
    }
    if (price < 10000) {
        req.flash("error", "Giá phải > 10000VND");
        res.redirect("back");
        return;
    }
    if (description.length < 10 || description > 20000) {
        req.flash("error", "Mô tả sách phải > 500 kí tự và < 2000 kí tự ");
        res.redirect("back");
        return;
    }
    next()
}