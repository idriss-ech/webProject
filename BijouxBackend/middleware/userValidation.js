export const userValidation = {
    username:{
        notEmpty:{
            errorMessage:'Username must not be empty'
        }, 
        isString:{
            errorMessage:'Username must be a string value'
        },
        isLength:{
            options:{
                min:4,
                max:32
            },
            errorMessage:'Username length must be at least between 4 to 32 character'
        }
    }
    , email:{
        notEmpty:{
            errorMessage:'Email must not be empty'
        },
        isString:{
            errorMessage:'Email must be a string value'
        }, 
        isEmail:{
            errorMessage:'Enter a valid Email'
        }
    }, 
    password:{
        notEmpty:{
            errorMessage:'Password must not be empty'
        },
        isLength:{
            options:{
                min:8,
            },
            errorMessage:'Password must be at least 8 character'
        }
    }
}