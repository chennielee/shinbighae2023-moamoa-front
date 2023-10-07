import styled from "@emotion/styled";

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  position: sticky;
  width: 100%;
  margin: 26% auto 5%;
  background-color: white;
`;

export const TeamName = styled.div`
  font-size: xxx-large;
  font-weight: 600;
`;

export const TeamDetail = styled.div`
  font-size: large;
  margin-top: 6%;
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
  height: 100%;
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
