import React, { useEffect, useState } from "react";
import {
  VitonContainerInside,
  VitonContainerOutside,
  VitonLeftDiv,
  VitonRightDiv,
} from "./style";
import ClotheImage from "../../components/try_on/ClotheImage";
import { useParams } from "react-router-dom";
import { useFetchSingleProductQuery } from "../../store/store";
import YourImage from "../../components/try_on/YourImage";
import ResultImage from "../../components/try_on/ResultImage";

import Try_it_Buttton from "../../components/try_on/Try_it_Buttton";
import TryItButton2 from "../../components/try_on/Try_it_Button_2";

function VitonPage() {
  let { category, id } = useParams();
  const { isFetching, data } = useFetchSingleProductQuery(id);

  const [vton_img, setVtonImg] = useState(null);
  const [garm_img, setGarmImg] = useState(null);
  const [result_img, setResultImg] = useState(null);

  const [isResultImgLoading, setIsResultImgLoading] = useState(false);
  console.log("result_img", result_img);
  useEffect(() => {
    if (data) {
      setGarmImg(data?.thumbnail);
    }
  }, [data]);

  console.log(vton_img, garm_img);

  return (
    <VitonContainerOutside>
      <VitonContainerInside>
        <VitonLeftDiv>
          {!isFetching && <ClotheImage thumbnail={data?.thumbnail} />}

          <YourImage setVtonImg={setVtonImg} />
        </VitonLeftDiv>

        <VitonRightDiv>
          <ResultImage
            resultImg={result_img}
            isResultImgLoading={isResultImgLoading}
          />
        </VitonRightDiv>
      </VitonContainerInside>
      <Try_it_Buttton
        garm_img={garm_img}
        vton_img={vton_img}
        setResultImg={setResultImg}
        setIsResultImgLoading={setIsResultImgLoading}
      />
      <TryItButton2
        backgroundUrl={vton_img}
        garmImgUrl={garm_img}
        garmentDesc='shirt '
        setIsResultImgLoading={setIsResultImgLoading}
        setResultImg={setResultImg}
      />
    </VitonContainerOutside>
  );
}

export default VitonPage;
