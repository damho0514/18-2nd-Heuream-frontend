import React from "react";
import Product from "../Components/Product";
import styled from "styled-components";

function ProductList({ shop }) {
  return (
    <MainBox>
      <ProductContents>
<<<<<<< HEAD
        {shop.map((el, idx) => {
=======
        {sortBy.map((el, idx) => {
>>>>>>> 2afc7eefa29a38e4b9787dcbc36b0e85b593238c
          return (
            <Product
              key={idx}
              product_id={el.product_id}
              product_image_url={el.product_image_url}
              brand_image_url={el.brand_image_url}
              english_name={el.english_name}
              price={el.price}
              is_wished={el.is_wished}
              size_id={el.size_id}
<<<<<<< HEAD
=======
              getShop={getShop}
>>>>>>> 2afc7eefa29a38e4b9787dcbc36b0e85b593238c
            />
          );
        })}
      </ProductContents>
    </MainBox>
  );
}

const MainBox = styled.div`
  width: 1200px;
  margin: auto;
`;
const ProductContents = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 300px);
  grid-template-rows: repeat(5, 500px);
`;
export default ProductList;
