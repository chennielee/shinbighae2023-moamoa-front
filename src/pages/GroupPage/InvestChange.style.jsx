import styled from "@emotion/styled";

export const MainBox = styled.div`
  height: 150px;
  width: 85%;
  margin: 10% auto 10% auto;
  padding: 25px;
  border-radius: 30px;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.3);
`;

export const Title = styled.div`
  font-weight: bold; /* 제목 텍스트를 더 강조 */
  font-size: 25px; /* 제목 텍스트 크기 조절 */
  margin-bottom: 10px; /* 아래쪽 여백 추가 */
  text-align: center;
`;

export const Profits = styled.div`
  float: left;
  font-weight: bold;
`;

export const ProfitNum = styled.div`
  padding-left: 280px;
  color: red;
`;

export const ProfitArr = styled.div`
  display: flex;
  align-items: center; /* 내용을 수직 가운데 정렬 */
  justify-content: center; /* 내용을 수평 가운데 정렬 */
  font-size: 18px; /* 수익률 관련 텍스트 크기 조절 */
  margin-top: 10px;
`;

export const GainBox = styled.div`
  display: flex;
  flex-direction: row; /* 내용을 세로로 배치 */
  border-radius: 10px;
  padding: 3px;
  margin-top: 20px; /* 위쪽 여백 추가 */
  background-color: #f2f2f2;
`;

export const A = styled.div`
  display: flex;
  flex-direction: row;
  margin: 8px;
`;

export const Topic = styled.div`
  margin: 4%;
  padding-left: 3%;
  font-weight: bold; /* 주제 텍스트를 더 강조 */
  display: contents;
`;

export const Answer = styled.div`
  padding-left: 10px; /* 답변 텍스트와 주제 텍스트 사이의 간격 조절 */
`;
