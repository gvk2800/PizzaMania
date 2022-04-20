const express = require('express')
const app=express()
const ejs=require('ejs')
const path=require('path')
const expresslayout=require('express-ejs-layouts')
const PORT=process.env.PORT || 33000

app.get('/',(req,res)=>{
    res.render('home')
})

//Set template
app.use(expresslayout)
app.set('views',path.join(__dirname,'/resources/views'))
app.set('view engine','ejs')

app.listen(PORT , ()=>{
    console.log(`Listening at port ${PORT}`)
})