import React, { useState } from "react";
import { useProcessImageMutation } from "../../store/apis/vitonApi"; // Ensure path is correct
import { ConfirmButton, ConfirmButtonDiv } from "./style";
import axios from "axios";

function Try_it_Buttton({ vton_img, garm_img, setResultImg }) {
  // Get the processImage mutation hook from RTK Query
  const [processImage, { isLoading, isError, error }] =
    useProcessImageMutation();

  const handleTryItClick = async () => {
    const requestData = {
      vton_img: vton_img,
      garm_img: garm_img,
      n_samples: 1,
      n_steps: 20,
      image_scale: 2,
      seed: -1,
    };

    try {
      // Step 1: Send the request to the API and get the image response
      const response = await processImage(requestData).unwrap();
      console.log("API response:", response);

      // Step 2: Convert the API response to a Blob for upload
      const responseBlob = await fetch(response.image).then((res) =>
        res.blob()
      );
      const processedImageFile = new File(
        [responseBlob],
        "processed-image.png",
        { type: "image/png" }
      );

      // Step 3: Upload the image file to Cloudinary
      const formData = new FormData();
      formData.append("file", processedImageFile);
      formData.append("upload_preset", "chat_app"); // Use your Cloudinary upload preset

      const cloudinaryResponse = await axios.post(
        "https://api.cloudinary.com/v1_1/chatappjeevanneupane/image/upload", // Replace with your Cloudinary URL
        formData
      );

      // Step 4: Set the Cloudinary URL
      setResultImg(cloudinaryResponse.data.secure_url);
      console.log("Cloudinary URL:", cloudinaryResponse.data.secure_url);
    } catch (err) {
      console.error("Error during processing or Cloudinary upload:", err);
    }
  };

  return (
    <ConfirmButtonDiv>
      <ConfirmButton
        onClick={handleTryItClick}
        disabled={isLoading}
      >
        {isLoading ? "Processing..." : "Try It"}
      </ConfirmButton>
      {isError && <div>Error: {error.message}</div>}
    </ConfirmButtonDiv>
  );
}

export default Try_it_Buttton;
