import styled from "@emotion/styled";

export const Group = styled.div`
  border: 1px solid black;
  height: 20%;
  width: 100%;
  margin: 30% auto 10% auto;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
`;

export const GroupTitle = styled.div`
  height: 8px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 40%;
`;

export const GroupTitleName = styled.div`
  margin: auto;
  height: 8px;
  margin-top: 6px;
  margin-bottom: 6px;
  font-size: x-large;
  font-weight: 600;
`;

export const IsGroup = styled.div`
  margin: 3px auto;
  font-size: large;
`;

export const GroupProfit = styled.div`
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

export const ProfitIntro = styled.div`
  font-size: larger;
`;

export const ProfitNum = styled.div`
  font-size: larger;
`;

export const GroupAim = styled.div`
  height: 8px;
  font-size: larger;
  margin-left: 5%;
`;
