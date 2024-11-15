import React from "react";
import { ClotheImageDiv, ClotheImg } from "./style";

function ClotheImage({ thumbnail }) {
  console.log(thumbnail);
  return (
    <ClotheImageDiv>
      <ClotheImg src={thumbnail} />
    </ClotheImageDiv>
  );
}

export default ClotheImage;
