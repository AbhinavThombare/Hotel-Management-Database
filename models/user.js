const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true
    },
    mobile:{
        type:Number,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minlength:6
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
})

UserSchema.methods.generateToken = async function() {
    const user = this;
    const token = jwt.sign({_id:user._id.toString()}, 'thisishoteldatabase')
    user.tokens = user.tokens.concat({token})
    await user.save()

    return token;

} 

UserSchema.statics.findCredential = async function (email, password) {
    const user = await User.findOne({ email })

    if (!user) {
        throw new Error(message = 'User Not Found')
    }

    if (user.password === password) {
        return user
    }
    else {
        throw new Error(message = 'Password Not Match')
    }
}

const User = mongoose.model('User', UserSchema)

module.exports = User