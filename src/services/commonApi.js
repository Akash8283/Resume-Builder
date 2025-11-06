import axios from "axios"

const commonApi = async(url,httpMethod,reqBody)=>{
        const reqConfig = {
            url,
            method:httpMethod,
            data:reqBody
        }
        // api call
    return await axios(reqConfig).then(res=>res).catch(err=>err)
}

export default commonApi