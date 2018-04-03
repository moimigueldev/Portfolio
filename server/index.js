

let express = require("express");
let app = express();
let port = process.env.PORT || 5000;
let bodyParser = require("body-parser");


app.use(express.static('src'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

//Routes
let index = require("./routes/index");


// Uses
app.use("/", index);

app.listen(port, () => {
    console.log("Server running..");
});
