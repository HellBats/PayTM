const {Schema,model,connect} = require('mongoose');


const url = 'mongodb+srv://vishalgoyal452003:w0rmh01es@cluster0.nbks85v.mongodb.net/paytm'
connect(url);

const UserSchema = Schema({
    FirstName:{
        type:String,
        required:true,
        minLength:4,
        maxLength:20,
        trim: true,
        lowercase:true,
    },
    LastName:{
        type:String,
        required:true,
        minLength:4,
        maxLength:20,
        trim: true,
        lowercase:true,
    },
    PhoneNo:{
        type:String,
        required:true,
        minLength:10,
        maxLength:10,
        trim: true,
    },
    Password:{
        type:String,
        required:true,
        minLength:8,
        maxLength:50,
    },
    EmailId:{
        type:String,
        required:true,
        minLength:6,
        maxLength:40,
        unique:true,
        lowecase:true
    },
});

const AccountsSchema = Schema({
    UserId:{type: Schema.Types.ObjectId , ref:"User",required:true},
    Balance:{type:Number,required:true}
})


const User = model('User',UserSchema);
const Accounts = model('Accounts',AccountsSchema);


module.exports = {User,Accounts}