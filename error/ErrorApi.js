
class ErrorApi extends Error {
    constructor(code,message) {
        super()
        this.code = code
        this.message = message
    }
 
    static badRequest(message) {
        console.log(message,"fd")
        return new ErrorApi(400,message)
    }

    static internal(message) {
        return new ErrorApi(500,message)
    }

    static noAuth(message){
        return new ErrorApi(200,message);
    }
}

module.exports=ErrorApi