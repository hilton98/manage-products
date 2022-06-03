const res = require("express/lib/response");

const index = (req, res) => {
    res.render('menu/index', {
        layout: 'main'
    });
}


module.exports = {index}