import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  text-align: center;
  padding: 20px;
  margin-top: 40%;
`;

export const AppLogo = styled.img`
  max-width: 100px;
  margin-bottom: 3%;
`;

export const AppName = styled.div`
  font-size: xxx-large;
  margin-top: 10px;
  font-weight: 600;
`;

export const AskContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-top: 30px;
`;

export const Input = styled.input`
  width: 68%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  height: 20px;
`;

export const GenderLabel = styled.label`
  margin-top: 10px;
  font-size: 16px;
`;
export const GenderCheckboxContainer = styled.div`
  display: flex;
  gap: 10px;
  font-size: 16px;

  label {
    display: flex;
    align-items: center;

    input[type="checkbox"] {
      margin-right: 5px;
    }

    span.bold {
      font-weight: bold;
    }
  }
  margin-bottom: 10px;
`;

export const DoubleCheck = styled.div`
  cursor: pointer;
  color: #007bff;
  text-decoration: underline;
  margin-top: 10px;
`;

export const MakeAccBtn = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  margin-top: 10px;
`;

export const MemberCheck = styled.div`
  margin-top: 20px;
  color: #007bff;
  cursor: pointer;
`;
