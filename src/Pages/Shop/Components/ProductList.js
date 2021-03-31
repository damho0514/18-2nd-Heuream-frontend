import React from "react";
import Product from "../Components/Product";
import styled from "styled-components";

function ProductList({ shop, solt, getShop }) {
  // const [ProductContents,setProductContents] = useState();

  const soltValue = () => {
    if (solt === "프리미엄순") {
      return (a, b) => {
        const soltA = a.price;
        const soltB = b.price;

        if (soltA < soltB) {
          return -1;
        }
        if (soltA > soltB) {
          return 1;
        }
        return 0;
      };
    }
  };

  const sortBy = shop?.sort(soltValue());

  return (
    <MainBox>
      <ProductContents>
        {sortBy.map((el, idx) => {
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
              getShop={getShop}
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
