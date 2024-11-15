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
          <ResultImage resultImg={result_img} />
        </VitonRightDiv>
      </VitonContainerInside>
      <Try_it_Buttton
        garm_img={garm_img}
        vton_img={vton_img}
        setResultImg={setResultImg}
      />
      <TryItButton2
        backgroundUrl={vton_img}
        garmImgUrl={garm_img}
        garmentDesc='shirt '
      />
    </VitonContainerOutside>
  );
}

export default VitonPage;
