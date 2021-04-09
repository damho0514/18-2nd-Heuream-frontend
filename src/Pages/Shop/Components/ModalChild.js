import React, { useState } from "react";
import styled from "styled-components";
import { VscBookmark } from "react-icons/vsc";
import { IoBookmarkSharp } from "react-icons/io5";

const ModalChild = ({ product_id, size_id, size_name, handleBookColor }) => {
  const [bookmark, setBookmark] = useState(false);

  const handleBookClick = () => {
    setBookmark(!bookmark);
  };

  return (
    <Sizes>
      {size_name}
      <div
        className="bookmarkIcon"
        handleBookColor={handleBookColor}
        onClick={handleBookClick}
      >
        {bookmark ? (
          <IoBookmarkSharp className="bookmarkFillIcon" />
        ) : (
          <VscBookmark className="bookmarkIcon" />
        )}
      </div>
    </Sizes>
  );
};

const Sizes = styled.div`
  border: 1px solid #d3d3d3;
  border-radius: ${props => props.theme.border.productRadius};
  width: 120px;
  height: 50px;
  text-align: center;
  cursor: pointer;
  margin: 5px;
  border: 1px solid #d3d3d3;
  border-radius: 12px;
  background-color: white;
  font-size: 14px;
  margin-top: 10px;
  padding-top: 10px;
`;
export default ModalChild;
