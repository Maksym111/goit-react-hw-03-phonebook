import styled from '@emotion/styled';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 300px;
  padding: 20px;

  border: 2px solid black;
  border-radius: 10px;
`;

const Title = styled.h2`
  align-self: flex-start;
  font-weight: 400;
  font-size: 24px;
`;

const Input = styled.input`
  width: 200px;
  padding: 5px 10px;

  border: 1px solid black;
  border-radius: 4px;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  :hover,
  :focus {
    border-color: #2c9cdd;
    outline: none;
  }

  :focus {
    box-shadow: gray 0px 4px 8px;
  }
`;

const BtnAdd = styled.button`
  width: 100px;
  margin-left: 20px;
  padding: 5px 10px;

  border: 1px solid black;
  border-radius: 4px;

  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  :hover {
    box-shadow: gray 0px 4px 8px;
  }
`;

export { Form, Title, Input, BtnAdd };
