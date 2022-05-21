const express = require('express');
const { engine } =  require('express-handlebars');
const sass = require("node-sass-middleware");
const router = require('./config/routes');
const app = express();


app.engine("handlebars", engine());
app.set("view engine","handlebars");
app.set("views", `${__dirname}/../frontend/views`);

app.use(sass({
	src: `${__dirname}/../frontend/public/scss`,
	dest: `${__dirname}/../frontend/public/css`,
	outputStyle: 'compressed',
	prefix: '/css'

}));

app.use("/js", [
	express.static(__dirname + '/../node_modules/jquery/dist'),
	express.static(__dirname + '/../node_modules/popper.js/dist/umd'),
	express.static(__dirname + '/../node_modules/bootstrap/dist/js'),
	express.static(__dirname + '/../public/js')
]);

app.use("/img", express.static(`${__dirname}/../frontend/public/img`) );
app.use("/css", express.static(`${__dirname}/../frontend/public/css`) );
app.use("/webfonts", express.static(`${__dirname}/../node_modules/@fortawesome/fontawesome-free/webfonts`));

app.use(express.urlencoded({ extended: false}));

app.use(router);
app.listen(3000, function(){
    console.log("foi iniciado na porta 3000");
});