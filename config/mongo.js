const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://rifky:<password>@gizilator-bjnik.mongodb.net/test?retryWrites=true&w=majority').then(()=>console.log('connect'))
    .catch((err)=>{
        console.log(err)
    })