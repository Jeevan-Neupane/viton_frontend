import React, { useState } from "react";
import { useProcessImageMutation } from "../../store/apis/vitonApi"; // Ensure path is correct
import { ConfirmButton, ConfirmButtonDiv } from "./style";

function Try_it_Buttton({
  vton_img,
  garm_img,
  setResultImg,
  setIsResultImgLoading,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  console.log("vton_img", vton_img, garm_img);
  const [processImage] = useProcessImageMutation();

  const handleTryItClick = async () => {
    const requestData = {
      vton_img: vton_img,
      garm_img: garm_img,
      n_samples: 1,
      n_steps: 20,
      image_scale: 2,
      seed: -1,
    };

    setIsLoading(true); // Start loading
    setIsResultImgLoading(true); // Notify parent component of loading state
    setIsError(false); // Reset error state

    try {
      // Step 1: Send the request to the API and get the image response
      const response = await processImage(requestData).unwrap();
      console.log("API response:", response);
      setResultImg(response?.result[0]?.image);
    } catch (err) {
      console.error("Error during processing or Cloudinary upload:", err);
      setIsError(true);
      setError(err);
    } finally {
      setIsLoading(false); // End loading
      setIsResultImgLoading(false); // Notify parent component of loading state
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
      {isError && <div>Error: {error?.message || "An error occurred"}</div>}
    </ConfirmButtonDiv>
  );
}

export default Try_it_Buttton;
