import { v2 as cloudinary } from "cloudinary";
import fs from "fs";


cloudinary.config({
   cloud_name: 'agent_cloud',
   api_key: '855486284983515',
   api_secret: 'c6_9FbYShvOJFkn4qYGNuF8B6Bk'
});
const uploadOnCloudinary = async (localFilePath) => {
   try {
      if (!localFilePath) return null;
      // upload on cloudinary
      const response = cloudinary.uploader.upload(localFilePath, { resource_type: "auto" });
      console.log(" file is upload on cloudinary ", response);
      return response;

   } catch (error) {
      console.log("Error----", error)
      fs.unlinkSync(localFilePath);// remove for the local save file
      return null;
   }
}
export { uploadOnCloudinary };