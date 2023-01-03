const mongoose = require('mongoose')

const DishesSchema = new mongoose.Schema({
    Category: {
        type:String,
        required:true,
        trim:true
    },
    Dish_Name: {
        type:String,
        required:true,
        trim:true

    },
    Price: {
        type:String,
        required:true,
        trim:true

    }
})

DishesSchema.methods.addDish =async function() {
    const dish = this;
    const name = dish.Dish_Name
    console.log(dish.Dish_Name)
    const dishdatabase = await Dish.findOne({Dish_Name:name})
    console.log(dishdatabase)
    if(dishdatabase){
        return Error({message:'Dish Already Exists!'})
    }
    // console.log(dish)
    // await dish.save()
    // return dish;
}

const Dish = mongoose.model('Dish',DishesSchema)


module.exports = Dish;

