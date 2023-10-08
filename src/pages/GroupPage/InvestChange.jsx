import React from "react";
import * as S from "./InvestChange.style";

const InvestChange = ({ priceData }) => {
  return (
    <div>
      {priceData.map((stock) => (
        <S.MainBox key={stock.id}>
          {" "}
          <S.Title>{stock.name}</S.Title>
          <S.ProfitArr>
            <S.Profits>수익률</S.Profits>
            <S.ProfitNum>{stock.profit}</S.ProfitNum>
          </S.ProfitArr>
          <S.GainBox>
            <S.A>
              <S.Topic>보유</S.Topic>
              <S.Answer>{stock.holding}</S.Answer>
            </S.A>

            <S.A>
              <S.Topic>현재가</S.Topic>
              <S.Answer>{stock.currentPrice}</S.Answer>
            </S.A>
          </S.GainBox>
        </S.MainBox>
      ))}
    </div>
  );
};
export default InvestChange;
