const express = require("express");
const path = require("path");
const cors = require("cors")
const request = require("request");
const app = express();

app.use(cors()); 

const api = "https://api.mercadolibre.com/"

app.get("/api/items", (req, res) => {
    request(`${api}/sites/MLA/search?q=${req.query.q}`,(err,response,body)=>{
        if (!err){
            const search = JSON.parse(body);
            res.send(search)
        }
    })
});

app.get("/api/items/:id", (req, res) => {    
    request(`${api}/items/${req.params.id}`,(err,response,body)=>{
        if (!err){
            const search = JSON.parse(body);
            res.send(search)           
        }
    })
});

app.get("/api/items/:id/description", (req, res) => {
    request(`${api}/items/${req.params.id}/description`,(err,response,body)=>{
        if (!err){
            const search = JSON.parse(body);
            res.send(search)           
        }
    })
});


app.listen(3000, () => {
    console.log('Server listening on port', 3000);
});