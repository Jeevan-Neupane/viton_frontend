import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetchCatagoriesProductsQuery } from "../../store/store";
import { CategoryPageMain } from "../../style/Container";
import { CategoryProductList, ForYou, ToTop } from "../../components";
import FemaleSelfProducts from "../../viton_comp/Ladies_dress";
import WomenDressTop from "../../viton_comp/ProductCards";

function CategoryPage() {
  const { name } = useParams();
  const { data, isFetching, isError, isLoading } =
    useFetchCatagoriesProductsQuery(name);

  console.log("category page", data);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [name]);
  return (
    <CategoryPageMain>
      <h1> {name.toUpperCase()}</h1>
      <h2>Total:{data?.total}</h2>
      <CategoryProductList
        data={data?.products}
        isLoading={isFetching || isLoading}
      />

      <WomenDressTop />

      {/* <ForYou /> */}
      <ToTop />
    </CategoryPageMain>
  );
}

export default CategoryPage;
