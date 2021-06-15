const express = require("express");
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname,'../assets')));

app.get('/',(req,res)=>{
    res.redirect('/index.html')
})

app.get('/index.html',(req,res)=>{
    res.sendFile(path.join(__dirname, '../', 'index.html'));
})

const port = process.env.PORT || 80;
app.listen(port , ()=> console.log(`Server is running on port :${port}`))