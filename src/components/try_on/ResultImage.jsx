import React from "react";
import { ResultImageDiv, ResultImg, ShimmerEffect } from "./style";

function ResultImage({ resultImg, isResultImgLoading }) {
  
  console.log("result_img_component", resultImg);
  return (
    <ResultImageDiv>
      {isResultImgLoading ? (
        <ShimmerEffect />
      ) : (
        <ResultImg
          src={
            resultImg ||
            "https://thumbs.dreamstime.com/b/default-photo-placeholder-half-length-portrait-photo-avatar-gray-color-default-photo-placeholder-116847356.jpg"
          }
          alt='result img'
        />
      )}
    </ResultImageDiv>
  );
}

export default ResultImage;
