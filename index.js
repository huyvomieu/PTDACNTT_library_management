const express = require("express")
const app = express();

const routes = require("./routes/client/index.route")

const path = require('path');
const exphbs = require('express-handlebars');
const flash = require('express-flash')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const methodOverride = require('method-override')

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

app.engine('.hbs', exphbs.engine({
    defaultLayout: "main",
    extname: '.hbs',
    helpers: {
        block: function (name, options) {
            // Tạo đối tượng _blocks nếu chưa tồn tại
            this._blocks = this._blocks || {};
            // Tạo mảng rỗng cho block nếu chưa tồn tại
            this._blocks[name] = this._blocks[name] || [];
            // Thêm nội dung vào block với options.fn
            this._blocks[name].push(options.fn(this));
            return null;
        },
        content: function (name) {
            // Kiểm tra nếu block có nội dung, nối lại và trả về
            this._blocks = this._blocks || {};
            const val = (this._blocks[name] || []).join('\n');
            this._blocks[name] = []; // Reset sau khi render
            return val;
        },
        subtract: function (a, b) {
            return a - b;
        }

    }
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));

// public file
app.use(express.static(path.join(__dirname, 'public')));

// config
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser('keyboard cat'));
app.use(session({ cookie: { maxAge: 60000 } }));
app.use(flash());


// Routes
routes(app);
require("./routes/admin/index.route")(app);


// connectDB

require("./config/connectDB").connectDB();


// Initializations
app.listen(3000, () => {
    console.log("app listening port 3000");
})
