import styled from "@emotion/styled";

export const MainBox = styled.div`
  width: 80%;
  border: 1px solid black;
  text-align: center;
  margin: 20px auto; /* 상단과 하단 여백을 조절 */
  padding: 20px; /* 내용을 더 잘 보이도록 패딩 추가 */
  border-radius: 10px;
  overflow: auto;
  margin-top: 5%;
`;

export const Title = styled.div`
  font-weight: bold; /* 제목 텍스트를 더 강조 */
  font-size: 24px; /* 제목 텍스트 크기 조절 */
  margin-bottom: 10px; /* 아래쪽 여백 추가 */
`;

export const Profits = styled.div`
  float: left;
`;

export const ProfitNum = styled.div`
  padding-left: 10px;
`;

export const ProfitArr = styled.div`
  display: flex;
  align-items: center; /* 내용을 수직 가운데 정렬 */
  justify-content: center; /* 내용을 수평 가운데 정렬 */
  font-size: 18px; /* 수익률 관련 텍스트 크기 조절 */
`;

export const GainBox = styled.div`
  display: flex;
  flex-direction: row; /* 내용을 세로로 배치 */
  border: 1px solid black;
  border-radius: 8px;
  margin-top: 20px; /* 위쪽 여백 추가 */
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
