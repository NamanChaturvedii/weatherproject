const express= require('express')
const app = express();
const hbs =require("hbs")
const port = process.env.PORT || 3000; // the words written in the start are for situation in which it port will run on 3000 or on the given port
const path = require("path")

// public static path

const staticpath=(path.join(__dirname,"../public")) 
const template_path=(path.join(__dirname,"../src/templates/views")) 
const partials_path=(path.join(__dirname,"../src/templates/partials")) 


/// importing the static website

app.set("view engine","hbs")
app.set("views",template_path);
app.use(express.static(staticpath))
hbs.registerPartials(partials_path) // for making the partails works


// routing


app.get("/",(req,res)=>{
    res.render('index')
})

app.get("/about",(req,res)=>{
    res.render("about.hbs")
})

app.get("/weather",(req,res)=>{
    res.render("weather")
})

app.get("*",(req,res)=>{
    res.render("404error",{
        errorMsg: "Oops Page not found"
    })
})

app.listen(port,()=>{
    console.log("listinng to the port")
})