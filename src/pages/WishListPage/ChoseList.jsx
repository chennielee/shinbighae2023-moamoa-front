// ChoseList.js
import React from "react";
import * as S from "./ChoseList.style"; // ChoseList에 대한 CSS 스타일 파일을 import

const ChoseList = ({ stockData }) => {
  return (
    <div>
      {stockData.map((stock) => (
        <S.MainContainer key={stock.id}>
          <S.Naming>{stock.name}</S.Naming>
          <S.Details>
            <div>
              <img src={stock.image} alt={stock.name} />
            </div>
            <S.Price>
              <div>{stock.price}</div>
              <div>{stock.limit}</div>
            </S.Price>
            <S.Heart>
              <div>하트그림</div>
            </S.Heart>
          </S.Details>
        </S.MainContainer>
      ))}
    </div>
  );
};

export default ChoseList;
