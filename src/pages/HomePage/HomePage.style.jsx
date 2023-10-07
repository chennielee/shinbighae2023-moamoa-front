import styled from "@emotion/styled";

export const Head = styled.div`
  position: fixed;
  width: 100%;
  text-align: center;
  background-color: white;
  padding-top: 30%;
`;

export const Title = styled.div`
  font-size: xx-large;
  margin-bottom: 10px;
`;

export const Ask = styled.div`
  font-size: x-large;
  font-weight: 600;
  color: blue;
  margin: auto;
  cursor: pointer;
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
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
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
