import React from "react";
import { useFetchAllCategoriesQuery } from "../../store/store";
import { CategoryText, Container, LoadingContainer, LoadingDiv } from "./style";
import Skeleton from "../skeleton/Skeleton";

function HomeCategories() {
  let { data, isFetching } = useFetchAllCategoriesQuery();

 
  console.log("Home data", data);
  return !isFetching ? (
    <Container>
      {data?.map((item) => {
        return (
          <CategoryText
            key={item}
            to={`category/${item}`}
          >
            {item}
          </CategoryText>
        );
      })}
    </Container>
  ) : (
    <LoadingContainer>
      {Array.from({ length: 20 }, (_, index) => {
        return (
          <LoadingDiv key={index}>
            <Skeleton
              height={4}
              width={20}
            />
          </LoadingDiv>
        );
      })}
    </LoadingContainer>
  );
}

export default HomeCategories;
