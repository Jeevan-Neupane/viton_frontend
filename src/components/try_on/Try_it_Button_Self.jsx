import React, { useState } from "react";
import { useProcessImageMutation } from "../../store/apis/vitonApiself"; // Ensure path is correct
import { ConfirmButton, ConfirmButtonDiv } from "./style";

function Try_it_Button_Self({
  backgroundUrl,
  garmImgUrl,
  setIsResultImgLoading,
  setResultImg,
}) {
  const [tryOn] = useProcessImageMutation();
  const [isLoading, setIsLoading] = useState(false); // Local loading state

  const [error, setError] = useState(null); // Local error state

  const handleTryItClick = async () => {
    const requestData = {
      person: backgroundUrl,
      cloth: garmImgUrl,
    };

    setIsLoading(true); // Start loading
    setIsResultImgLoading(true); // Start loading

    setError(null); // Clear any previous error
    try {
      const response = await tryOn(requestData).unwrap();
      console.log("API Response:", response);

      if (response) {
        setResultImg(response.cloudinary_urls);
      }
    } catch (err) {
      console.error("Error during processing:", err);
      setError(err);
    } finally {
      setIsLoading(false); // Stop loading
      setIsResultImgLoading(false); // Stop loading
    }
  };

  return (
    <ConfirmButtonDiv>
      <ConfirmButton
        onClick={handleTryItClick}
        disabled={isLoading}
      >
        {isLoading ? "Processing..." : "Try It Self"}
      </ConfirmButton>
      {error && <div>Error: {error?.message || "An error occurred."}</div>}
    </ConfirmButtonDiv>
  );
}

export default Try_it_Button_Self;
