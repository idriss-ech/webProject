const mongoose = require('mongoose')

const User = mongoose.model('users',{
    firstname:{
        type:String,
        require:true
    },
    lastname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique: true
    },
    password:{
        type:String,
        require:true
    },
    dateOfBirth:{
        type:String,
    },
    phoneNumber:{
        type:String,
    },
    address:{
        street:{
            type:String
        },
        city:{
            type:String
        },
        country:{
            type:String
        },
        postalCode:{
            type:String
        }
    },
    profilePicture:{
        type:String
    },
    biograpy:{
        type:String
    },
    website:{
        type:String
    },
    socialLinks:{
        facebook:{ type:String },
        instagram:{ type:String },
        twitter:{ type:String },
        snapchat:{ type:String },
        tiktok:{ type:String }
    },
    roles:{
        type:String
    },
    preferences:{
        theme:{type:String, default:'light'},
        language:{type:String, default:'english'}
    },
    createdAt:{
        type:String
    },
    updatedAt:{
        type:String
    }

})


module.exports = User