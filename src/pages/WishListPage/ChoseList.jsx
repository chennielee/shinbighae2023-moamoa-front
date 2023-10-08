import React, { useState } from "react";
import * as S from "./ChoseList.style";
import axios from "axios";

const StockModal = ({ stock, onClose, onBuy, onSell }) => {
  return (
    <S.StockModal>
      <S.StockModalContent>
        <S.StockModalName>
          {stock.name}
          <S.CloseBtn onClick={onClose}> X </S.CloseBtn>
        </S.StockModalName>
        <S.Value>현재가: {stock.price}</S.Value>
        <S.Value>
          등락: {stock.limit > 0 ? "+" : ""}
          {stock.limit}%
        </S.Value>
        <S.Value className="detail-link">상세페이지 더보기</S.Value>
        <S.BuyBtn onClick={() => onBuy(stock)}>매도</S.BuyBtn>
        <S.SellBtn onClick={() => onSell(stock)}>매수</S.SellBtn>
      </S.StockModalContent>
    </S.StockModal>
  );
};

const ChoseList = ({ stockData }) => {
  const [selectedStock, setSelectedStock] = useState(null);
  const [isLiked, setIsLiked] = useState(false);

  // 모달 열기
  const openModal = (stock) => {
    setSelectedStock(stock);

    // 서버로부터 IsLiked 값을 가져오는 API 호출
    fetchIsLiked(stock.meetingId);
  };

  const closeModal = () => {
    setSelectedStock(null);
  };

  // 매수 이벤트 핸들러
  const handleBuy = (stock) => {
    prompt(` ${stock.name} 을(를) 몇 주 구매하시겠습니까?`);
  };

  // 매도 이벤트 핸들러
  const handleSell = (stock) => {
    prompt(` ${stock.name} 을(를) 몇 주 판매하시겠습니까?`);
  };

  const fetchIsLiked = async (meetingId) => {
    try {
      const response = await axios.get(
        `/api/v1/meeting/${meetingId}/recommend`
      );

      setIsLiked(response.data.IsLiked);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  //주식 api
  const additionalStockData = [
    {
      image: "/svgs/graph.svg",
      price: "$150.25",
      limit: "3.5",
    },
    {
      image: "/svgs/graph.svg",
      price: "$3,450.00",
      limit: "-1.2",
    },
    {
      image: "/svgs/graph.svg",
      price: "$3,450.00",
      limit: "+8.9",
    },
  ];

  let i = 0;
  for (let i in stockData) {
    stockData[i].price = additionalStockData[i].price;
    stockData[i].limit = additionalStockData[i].limit;
    stockData[i].image = additionalStockData[i].image;
    i++;
  }
  return (
    <div>
      {stockData.map((stock) => (
        <S.MainContainer key={stock.stockId} onClick={() => openModal(stock)}>
          <S.Naming>{stock.stockName}</S.Naming>
          <S.Details>
            <div>
              <img
                src={stock.image}
                alt={stock.stockId}
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
              <S.Heart src="/images/fullHeart.png" alt="Filled Heart" />
            ) : (
              <S.Heart src="/images/emptyHeart.png" alt="Empty Heart" />
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
