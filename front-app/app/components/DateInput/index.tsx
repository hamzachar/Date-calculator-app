import React from "react";
import { Container, StyledInputDate, StyledLabel } from "./styles";

interface DateInputProps {
  label: string;
  value: string;
  minDate?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSelected: boolean;
}

const DateInput: React.FC<DateInputProps> = ({
  label,
  value,
  minDate,
  onChange,
  isSelected,
}) => {
  return (
    <Container>
      <StyledLabel htmlFor={label}>{label}</StyledLabel>
      <StyledInputDate
        id={label}
        type="date"
        value={value}
        min={minDate}
        onChange={onChange}
        isSelected={isSelected}
      />
    </Container>
  );
};

export default DateInput;
