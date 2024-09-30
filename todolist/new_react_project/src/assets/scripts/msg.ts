export const URL = 'http://localhost:3001'

export const getErrors = (error:any) :any=>{
    
    if(error === null || error === undefined){
        console.log('undefined or null')
        return null;
    }
    else{
        if(error.response.data){
            const responseErrors = error.response.data;
            const errorData:{[key:string]:string} = {}
            if(Array.isArray(responseErrors.error)){
                for(const errorItem of responseErrors.error){
                    errorData[errorItem.path] = errorItem.msg
                }
                console.log('1 - ', errorData)
                return errorData;
            }
           errorData['error'] = responseErrors.message
           console.log('2 - ', errorData)

           return errorData;
        }
             
    }
}


