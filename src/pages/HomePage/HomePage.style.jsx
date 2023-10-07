import styled from "@emotion/styled";

export const Head = styled.div`
  position: fixed;
  width: 100%;
  margin: 32% auto 10% auto;
  text-align: center; /* 텍스트 가운데 정렬 */
`;

export const Title = styled.div`
  font-size: xx-large;
  margin-bottom: 10px; /* 아래 여백 추가 */
`;

export const Ask = styled.div`
  font-size: x-large;
  font-weight: 600;
  color: blue;
  margin: auto;
  cursor: pointer; /* 포인터 커서로 변경하여 클릭 가능한 스타일로 표시 */
`;

export const MakeGroup = styled.div`
  position: sticky;
  z-index: 3;
  bottom: 10%;
  font-size: larger;
  margin: 0 auto;
  border: 1px solid black;
  width: 200px;
  text-align: center;
  height: 5%;
  margin: auto;
  background-color: white; /* 배경색 추가 */
  padding: 10px; /* 내부 여백 추가 */
  border-radius: 10px; /* 둥근 테두리 추가 */
  cursor: pointer; /* 포인터 커서로 변경하여 클릭 가능한 스타일로 표시 */
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2); /* 그림자 효과 추가 */
`;

export const Options = styled.div`
  width: 100%;
  z-index: 2;
  background-color: white;
  bottom: 0px;
  height: 12%;
  position: fixed;
  padding-top: 3%;
`;

export const Container = styled.div`
  width: 80%;
  margin: 10% auto;
  height: auto; /* 높이 자동 조절 */
  overflow: auto;
`;

export const SelectOption = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: sticky;
  border-top: 1px black solid;
  width: 100%;
  z-index: 2;
  bottom: 8%;
  background-color: white;
`;

export const InvestBtn = styled.img`
  position: relative;
  bottom: -20px;
  width: 30px;
`;

export const GroupBtn = styled.img`
  position: relative;
  bottom: -20px;
  width: 30px;
`;
export const UserBtn = styled.img`
  position: relative;
  bottom: -20px;
  width: 30px;
`;
