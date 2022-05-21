// const models = require("../models/index");
// const Category = models.Category;
const res = require("express/lib/response");

const index = (req, res) => {
    frutas =[1,"frutas"];
      
    res.render('managementCategory/index', {
        productData: frutas,
        layout: false
    });
}

function create(req, res) {
    res.render("managementCategory/create");
    // if(req.route.methods.get){
    //     res.render("managementCategory/create");
    // }else{
    //     await Category.create({
    //         name: req.body.inputName
    //     });
    //     res.redirect("/");
    // }
}


const update = (req, res) => {
    idCategory = req.params.id;

    if(req.route.methods.get){
        res.render("managementCategory/update", {
            id: idCategory,
            layout:false
        });
    }else{
        ///
    }
}

function remove(req,res){
    console.log(res.params);
    // await Product.destroy({where:{id:req.params.id}});
    // res.redirect("deviceManagement/");
}


module.exports = {index, update, create, remove}