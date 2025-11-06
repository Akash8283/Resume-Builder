import commonApi from "./CommonApi"
import serverUrl from "./ServerUrl"

//resume add api - called by userInputs, when finish button is clicked
export const addResumeApi = async (resume)=>{
    return await commonApi(`${serverUrl}/resume`,"POST",resume)
}
//get resume api - called from viewResume, when page loaded
export const getResumeApi = async (id)=>{
    return await commonApi(`${serverUrl}/resume/${id}`,"GET",{})
}
//update resume api
export const updateResumeApi = async (id,resume)=>{
    return await commonApi(`${serverUrl}/resume/${id}`,"PUT",{resume})
}
//add history api
//get history api
//remove history api