import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localfilePath) => {
    try {
        if (!localfilePath) return null;

        const response = await cloudinary.uploader.upload(localfilePath, {
            resource_type: "auto",
        });

        //File is successfully uploaded to cloudinary
        console.log(
            "File is uploaded successfully on Cloundinary",
            response.url
        );
        return response;
    } catch (error) {
        fs.unlinkSync(localfilePath); //For removing temp file stored on server as file upload operation got failed.
        return null;
    }
};

export { uploadOnCloudinary };
