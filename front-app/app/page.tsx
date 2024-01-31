"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { DateInput, Button, Loader, ErrorMessage, Title } from "./components";
import { addDays } from "./utils/utils";
import { Container, DateInputsContainer, SubContainer } from "./styles";

interface FormData {
  startDate: string;
  endDate: string;
}

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [daysDifference, setDaysDifference] = useState<number>(0);
  const [minDate, setMinDate] = useState<string>("");

  const schema = yup.object().shape({
    startDate: yup.string().required("Start date is required"),
    endDate: yup.string().required("End date is required"),
  });

  const {
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { isSubmitting, isSubmitSuccessful, errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const selectedStartDate = watch("startDate");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get("http://localhost:3001/api/date");
        setValue("startDate", response.data.date);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (selectedStartDate) {
      const newMinDate = addDays(new Date(selectedStartDate), 1).toString();
      setMinDate(newMinDate);
      setValue("endDate", "");
    }
  }, [selectedStartDate]);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const start = new Date(data.startDate);
    const end = new Date(data.endDate);
    setDaysDifference(
      Math.abs((end.getTime() - start.getTime()) / (1000 * 3600 * 24))
    );
  };

  if (isLoading) return <Loader />;

  return (
    <Container>
      <Title>Date difference Calculator</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DateInputsContainer>
          <Controller
            name="startDate"
            control={control}
            render={({ field }) => (
              <DateInput
                label="Start date:"
                value={field.value}
                onChange={(e) => {
                  field.onChange(e.target.value);
                }}
                isSelected={errors.startDate === undefined}
              />
            )}
          />
          <Controller
            name="endDate"
            control={control}
            render={({ field }) => (
              <DateInput
                label="End date:"
                value={field.value}
                minDate={minDate}
                onChange={(e) => field.onChange(e.target.value)}
                isSelected={errors.endDate === undefined}
              />
            )}
          />
        </DateInputsContainer>
        <SubContainer>
          <Button type="submit">
            {isSubmitting ? "Calculating..." : "Calculate"}
          </Button>
          {isSubmitSuccessful && <p>Days Difference: {daysDifference}</p>}
        </SubContainer>
      </form>
      {(errors.startDate || errors.endDate) && (
        <ErrorMessage>Please select all inputs!</ErrorMessage>
      )}
    </Container>
  );
}
