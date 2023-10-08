import styled from "@emotion/styled";

export const MainContainer = styled.div`
  width: 100%; /* 전체 너비로 설정 */
  margin: 0 auto;
  padding-left: 20px;
  border: 1px solid #ccc;
  border-radius: 40px;
  background-color: white; /* 배경색을 흰색으로 설정합니다. */
  margin-bottom: 8%;
  border-radius: 30px;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.1);import styled from "@emotion/styled";

export const MainContainer = styled.div`
  width: 100%; /* 전체 너비로 설정 */
  margin: 0 auto;
  padding-left: 20px;
  border: 1px solid #ccc;
  border-radius: 40px;
  background-color: white; /* 배경색을 흰색으로 설정합니다. */
  margin-bottom: 8%;
  border-radius: 30px;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.1);
`;

export const Details = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between; /* 요소 사이의 공간을 최대한 확보합니다. */
  align-items: center; /* 세로 중앙 정렬 */
  margin-top: 10px; /* 위쪽 여백 추가 */
`;

export const Price = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* 세로 중앙 정렬 */
  margin-bottom: 10%;
  margin-left: 20%;
  line-height: 20px;
  font-size: large;
  font-weight: 600;
`;

export const Limit = styled.div`
  color: ${(props) => (props.isPositive ? "red" : "blue")};
`;

export const Heart = styled.img`
  width: auto;
  max-width: 40px;
  height: auto;
  margin-right: 8%;
  margin-top: -10%;
`;

export const Naming = styled.div`
  font-size: large;
  font-weight: 600;
  display: block;
  width: 100%;
  margin-top: 12px;
  margin-bottom: -10px;
`;

export const StockModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const StockModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  height: 30%;
  width: 70%;
`;

export const StockModalName = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  font-size: 200%;
  font-weight: 600;
`;

export const img = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
`;

export const Value = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
  margin-top: 8%;
  font-weight: 600;

  &.detail-link:hover {
    cursor: pointer;
  }
`;

export const BuyBtn = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 16px;
  margin: 5px;
  border-radius: 4px;
  cursor: pointer;
  font-size: medium;
  font-weight: 400;
`;

export const SellBtn = styled.button`
  background-color: red;
  color: #fff;
  border: none;
  padding: 8px 16px;
  margin: 5px;
  border-radius: 4px;
  cursor: pointer;
  font-size: medium;
  font-weight: 400;
`;

export const CloseBtn = styled.button`
  background-color: transparent;
  border: none;
  color: #333;
  font-size: 24px;
  cursor: pointer;
  float: right;
`;

`;

export const Details = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between; /* 요소 사이의 공간을 최대한 확보합니다. */
  align-items: center; /* 세로 중앙 정렬 */
  margin-top: 10px; /* 위쪽 여백 추가 */
`;

export const Price = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* 세로 중앙 정렬 */
  margin-bottom: 10%;
  margin-left: 20%;
  line-height: 20px;
  font-size: large;
  font-weight: 600;
`;

export const Limit = styled.div`
  color: ${(props) => (props.isPositive ? "red" : "blue")};
`;

export const Heart = styled.img`
  width: auto;
  max-width: 40px;
  height: auto;
  margin-right: 8%;
  margin-top: -10%;
`;

export const Naming = styled.div`
  font-size: large;
  font-weight: 600;
  display: block;
  width: 100%;
  margin-top: 12px;
  margin-bottom: -10px;
`;

export const StockModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const StockModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  height: 30%;
  width: 70%;
`;

export const StockModalName = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  font-size: 200%;
  font-weight: 600;
`;

export const img = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
`;

export const Value = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
  margin-top: 8%;
  font-weight: 600;

  &.detail-link:hover {
    cursor: pointer;
  }
`;

export const BuyBtn = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 16px;
  margin: 5px;
  border-radius: 4px;
  cursor: pointer;
  font-size: medium;
  font-weight: 400;
`;

export const SellBtn = styled.button`
  background-color: red;
  color: #fff;
  border: none;
  padding: 8px 16px;
  margin: 5px;
  border-radius: 4px;
  cursor: pointer;
  font-size: medium;
  font-weight: 400;
`;

export const CloseBtn = styled.button`
  background-color: transparent;
  border: none;
  color: #333;
  font-size: 24px;
  cursor: pointer;
  float: right;
`;
