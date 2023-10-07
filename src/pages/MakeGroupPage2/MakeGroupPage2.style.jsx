import styled from "@emotion/styled";

export const ChoiceWho = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const Option = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  border: 1px black solid;
  width: 80%;
  margin: 2% auto;
  height: 65px;
  border-radius: 10px;
`;

export const OptionImg = styled.img`
  float: left;
  width: 15%;
  padding-left: 10px;
`;

export const OptionContent = styled.div`
  font-size: x-large;
  font-weight: 500;
  padding-top: 18px;
  padding-left: 24px;
`;
export const Next = styled.button`
  height: 30px;
  width: 50%;
  border: 1px solid black;
  text-align: center;
  margin: 10% auto;
`;
