const express1 = require('express')
const app = express1()
app.get('',(req, resp)=> {
    console.log(req.query)
    resp.send([{
        
    }])
    resp.send("welcome to express js Basics")
})

app.get('/about',(req, resp)=>{
    resp.send("welcome to about page API")
})

app.get('/contact',(req, resp)=> {
    resp.send("welcome to contact page API")
    
)}

//    API end point is
// localhost:8008
// localhost:8008/about
// localhost:8008/contact

app.get('/about',)
