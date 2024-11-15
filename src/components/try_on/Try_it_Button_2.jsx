import React from "react";
import { useTryOnMutation } from "../../store/apis/vitonApi2"; // Ensure path is correct
import { ConfirmButton, ConfirmButtonDiv } from "./style";

function TryItButton2({ backgroundUrl, garmImgUrl, garmentDesc }) {
  // Get the tryOn mutation hook from RTK Query
  const [tryOn, { isLoading, isError, error }] = useTryOnMutation();

  const handleTryItClick = async () => {
    const requestData = {
      background_url: backgroundUrl,
      garm_img_url: garmImgUrl,
      garment_des: garmentDesc, // Dynamically provided description
      is_checked: true,
      is_checked_crop: true,
      denoise_steps: 20,
      seed: 0,
    };

    try {
      // Step 1: Send the request to the API and get the response
      const response = await tryOn(requestData).unwrap();
      console.log("API Response:", response);
    } catch (err) {
      console.error("Error during processing:", err);
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
      {isError && <div>Error: {error?.message || "An error occurred."}</div>}
    </ConfirmButtonDiv>
  );
}

export default TryItButton2;
