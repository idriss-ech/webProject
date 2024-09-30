import bcrypt from 'bcrypt'

const saltRound = 10; 
export const crypting = (password)=>{
     const salt = bcrypt.genSaltSync(10); 
     return bcrypt.hashSync(password, salt)
}


export const comparing = (password, encryptedPassword)=> bcrypt.compareSync(password, encryptedPassword)
