// const models = require("../models/index");
// const Product = models.Product;
const res = require("express/lib/response");


const index = (req, res) => {
    produto =[1,"Bicicleta", "Transporte", 455,50, 1111234];
    res.render('deviceManagement/index', {
        productData: produto,
        layout: 'main'
    });
}

function create(req, res) {
    res.render("deviceManagement/create", {
        layout : "main"
    });
    // if(req.route.methods.get){
    //     res.render("deviceManagement/create");
    // }else{
    //     await Product.create({
    //         name: req.body.nameProduct,
    //         category: req.body.category,
    //         price: req.body.price,
    //         serie: req.body.serie 
    //     });
    //     res.redirect("/");
    // }
}

const update = (req, res) => {
    idCategory = req.params.id;
    

    if(req.route.methods.get){
        res.render("deviceManagement/update", {
            id:  idCategory,
            layout : 'main'
        });
    }else{
    }
}

function remove(req,res){
    console.log(res.params);
    // await Product.destroy({where:{id:req.params.id}});
    // res.redirect("deviceManagement/");
}

module.exports = { index, update, create, remove }