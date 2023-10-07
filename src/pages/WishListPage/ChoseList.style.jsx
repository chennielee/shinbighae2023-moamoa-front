import styled from "@emotion/styled";

export const MainContainer = styled.div`
  width: 100%; /* 전체 너비로 설정 */
  margin: 0 auto;
  padding: 20px; /* 여백 추가 */
  border: 1px solid #ccc; /* 테두리 추가 */
  border-radius: 8px; /* 모서리를 둥글게 만듭니다. */
  background-color: white; /* 배경색을 흰색으로 설정합니다. */
  margin-bottom: 8%;
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
`;

export const Heart = styled.div`
  width: 8%;
`;

export const Naming = styled.div`
  font-size: xx-large;
  font-weight: 400;
  display: block;
  width: 100%;
`;
