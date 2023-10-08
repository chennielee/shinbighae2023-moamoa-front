import styled from "@emotion/styled";
import Rec from "../../images/rectangle.svg";
import Ecl from "../../images/eclipse.svg";

export const Group = styled.div`
  height: 150px;
  width: 95%;
  margin: 10% auto 10% auto;
  padding: 10px;
  border-radius: 30px;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.1);
`;

export const GroupTitle = styled.div`
  height: 8px;
  margin: 10px;
  margin-bottom: 20px;
  margin-top: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 40%;
`;

export const GroupTitleName = styled.div`
  margin: auto;
  height: 8px;
  margin-bottom: 15px;
  font-size: 23px;
  font-weight: bold;
`;

export const IsGroup = styled.div`
  margin: 3px auto;
  font-size: 23px;
`;

export const GroupProfit = styled.div`
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const ProfitIntro = styled.div`
  font-size: 16px;
`;

export const ProfitNumPositive = styled.div`
  font-size: 16px;
  color: red;
`;

export const ProfitNumNegative = styled.div`
  font-size: 16px;
  color: blue;
`;

export const GroupAim = styled.div`
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const GroupAimIntro = styled.div`
  font-size: 16px;
  width: 50%;
`;

export const GroupAimPercentage = styled.div`
  width: 185px;
  height: 5px;
  border-radius: 5px;
  background-image: url(${Rec});
`;

export const GroupAimPercentageMove = styled.div`
  margin-top: -4px;
  width: 20px;
  height: 20px;
  background-image: url(${Ecl});
`;
