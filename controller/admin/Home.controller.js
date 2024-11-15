


class HomeController {
    // [GET] /admin
    home(req, res, err) {
        res.render('admin/home',
            {
                titleAction: "dashboard",
                title: "Tổng quan",
                layout: "admin"
            }
        );
    }


}

module.exports = new HomeController()