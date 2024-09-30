import jwt from 'jsonwebtoken'

const auth = (req,res, next)=>{
    const token = req.header('Authorization')
    if(!token){
        return res.status(401).json({message:'Access denied, No token provided'})
    }
    try{
        const decoded = jwt.verify(token, 'ois@F223S')
        req.user = decoded;
        next()
    }
    catch(error){
        res.status(500).json({message: 'connexion error'})
    }
    
}

export default auth;