import { serverURL } from "./serverURL";
import { commonAPI } from "./commonAPI";
import Category from "../components/Category";

// to upload a new video
export const uploadAllVideo = async (reqBody)=>{
    return await commonAPI('POST',`${serverURL}video`,reqBody);
}

// to get all videos alrady inserted

 export const getAllVideos = async ()=>{
    return await commonAPI('GET',`${serverURL}video`,"")
 }
 //to delete a specific video
 export const deleteVideo=async(id)=>{
    return await commonAPI('DELETE',`${serverURL}video/${id}`,{})
 }
 //add details to watch history
 export const addToHistory =async(videoDetails)=>{
    return await commonAPI('POST',`${serverURL}history`,videoDetails)
 }
 export const getHistory = async()=>{
   return await commonAPI ('GET',`${serverURL}history`,"")
 }
 //TO DELETE A SPECIFIC History
 export const deleteHistory =async(id)=>{
   return await commonAPI('DELETE',`${serverURL}history/${id}`,{})
 }
 //add category
 export const uploadAllCategory = async (reqBody)=>{
   return await commonAPI('POST',`${serverURL}category`,reqBody);
 }


 export const getAllCategory = async()=>{
   return await commonAPI('GET',`${serverURL}category`,"");
 }
 //delete category
 export const deleteCategory = async (id)=>{
  return await commonAPI('DELETE',`${serverURL}category/${id}`,{});
}
//get video details wth video id
export const getVideoDetails=async(id)=>{
  return await commonAPI('GET',`${serverURL}video/${id}`,"")
}
//update category with video details
export const updateCategory=async(id,body)=>{
  return await commonAPI(`PUT`,`${serverURL}Category/${id}`,body)
}