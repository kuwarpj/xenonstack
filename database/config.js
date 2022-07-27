const mongoose = require('mongoose')
mongoose.connect(process.env.URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log("db connected successfully"))
.catch((e)=>console.log(e));