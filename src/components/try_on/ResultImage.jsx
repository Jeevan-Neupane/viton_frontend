import React from "react";
import { ResultImageDiv, ResultImg } from "./style";

function ResultImage({ resultImg }) {
  return (
    <ResultImageDiv>
      <ResultImg
        src='https://res.cloudinary.com/chatappjeevanneupane/image/upload/v1731668680/test/wi4o0jvnw9zkfqcyleol.webp'
        alt='result img'
      />
    </ResultImageDiv>
  );
}

export default ResultImage;
