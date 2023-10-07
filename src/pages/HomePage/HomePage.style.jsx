import styled from "@emotion/styled";

export const Head = styled.div`
  position: fixed;
  width: 100%;
  text-align: center;
  background-color: white;
  padding-top: 25%;
`;

export const Title = styled.div`
  font-size: 45px;
  margin-bottom: 20px;
  font-weight: bold;
`;

export const Ask = styled.div`
  font-size: 16px;
  text-decoration: underline;
  color: #1f65ff;
  margin: auto;
  cursor: pointer;
`;

export const MakeGroup = styled.div`
  position: sticky;
  z-index: 3;
  bottom: 12%;
  font-size: larger;
  margin: 0 auto;
  width: 200px;
  text-align: center;
  height: 5%;
  background-color: #1f65ff;
  color: white;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 5px 5px 10px 0px rgba(155, 159, 176, 1);
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
  margin: 50% auto;
  height: 100%;
  overflow: auto;
`;

export const SelectOption = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: sticky;
  border-top: 1px gray solid;
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
