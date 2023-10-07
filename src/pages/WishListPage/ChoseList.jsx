import React, { useState } from "react";
import * as S from "./ChoseList.style";

const StockModal = ({ stock, onClose, onBuy, onSell }) => {
  return (
    <S.StockModal>
      <S.StockModalContent>
        <S.StockModalName>
          {stock.name}
          <S.CloseBtn onClick={onClose}> X </S.CloseBtn>
        </S.StockModalName>
        <S.Value>현재가: {stock.price}</S.Value>
        <S.Value>등락: {stock.limit}</S.Value>
        <S.Value className="detail-link">상세페이지 더보기</S.Value>
        <S.BuyBtn onClick={() => onBuy(stock)}>매도</S.BuyBtn>
        <S.SellBtn onClick={() => onSell(stock)}>매수</S.SellBtn>
      </S.StockModalContent>
    </S.StockModal>
  );
};

const ChoseList = ({ stockData }) => {
  // 모달 상태 관리
  const [selectedStock, setSelectedStock] = useState(null);

  // 모달 열기
  const openModal = (stock) => {
    setSelectedStock(stock);
  };

  // 모달 닫기
  const closeModal = () => {
    setSelectedStock(null);
  };

  // 매수 이벤트 핸들러
  const handleBuy = (stock) => {
    console.log(`매수: ${stock.name}`);
  };

  // 매도 이벤트 핸들러
  const handleSell = (stock) => {
    console.log(`매도: ${stock.name}`);
  };

  return (
    <div>
      {stockData.map((stock) => (
        <S.MainContainer key={stock.id} onClick={() => openModal(stock)}>
          <S.Naming>{stock.name}</S.Naming>
          <S.Details>
            <div>
              <img
                src={stock.image}
                alt={stock.name}
                style={{ width: "140%" }}
              />
            </div>
            <S.Price>
              <div>
                <div>
                  <span
                    style={{
                      marginBottom: "14%",
                      marginTop: "-10%",
                    }}
                  >
                    {stock.price}
                  </span>
                </div>
              </div>
              <S.Limit isPositive={stock.limit > 0}>
                {stock.limit > 0 ? "+" : ""}
                {stock.limit}%
              </S.Limit>
            </S.Price>

            {stock.isLiked ? (
              <S.Heart src="/images/fullHeart.png" alt="Filled Heart"></S.Heart>
            ) : (
              <S.Heart src="/images/emptyHeart.png" alt="Empty Heart"></S.Heart>
            )}
          </S.Details>
        </S.MainContainer>
      ))}

      {selectedStock && (
        <StockModal
          stock={selectedStock}
          onClose={closeModal}
          onBuy={handleBuy}
          onSell={handleSell}
        />
      )}
    </div>
  );
};

export default ChoseList;
