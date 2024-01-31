import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 10px;
`;

export const StyledLabel = styled.label`
  margin-bottom: 5px;
  align-self: center;
`;

export const StyledInputDate = styled.input<{ isSelected?: boolean }>`
  padding: 10px;
  margin: 10px;
  border: ${(props) => (props.isSelected ? "1px solid #ddd" : "2px solid #FF0033")};
  border-radius: 5px;
`;
