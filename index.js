require(`dotenv`).config();
const express = require('express')
const app = express()
const PORT = 3000
const str = "To ye message ka matlab hai:";


app.get('/',(req , res)=>{
	res.send("<h1> string send </h1>")
})

app.get('/home', (req , res)=>{
 res.send("ASIF AKBAR")

})

app.get('/str',(req , res )=>{
   res.send(`String checking ${str}`)
})


app.listen(process.env.PORT , ()=>{
	console.log(`this data send by server ${PORT}`)


})