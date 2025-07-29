"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputMask from "react-input-mask";
import { Button } from "@/components/ui/button";
import React, { useRef } from "react";
import { useRouter } from "next/navigation";

const createBankCartSchema = Yup.object({
  country: Yup.string().required(),
  name: Yup.string().required(),
  lastName: Yup.string().required(),
  bankNumber: Yup.number().required(),
  month: Yup.string().required(),
  year: Yup.string().required(),
  CVC: Yup.string().required(),
});

export const CreateBankCartForm = () => {
  const { push } = useRouter();

  const formik = useFormik({
    initialValues: {
      country: "",
      name: "",
      lastName: "",
      bankNumber: "",
      month: "",
      year: "",
      CVC: "",
    },
    validationSchema: createBankCartSchema,
    onSubmit: (values) => {
      console.log("values bank cart:", values);
      push("/");
    },
  });

  const {
    values,
    setFieldValue,
    handleSubmit,
    handleBlur,
    handleChange,
    touched,
    errors,
  } = formik;

  const cardCountryInputProps = {
    onBlur: handleBlur,
    value: values.country,
    inputError: touched.country && errors.country,
    inputErrorMessage: errors.country,
  };

  const cardNameinputProps = {
    name: "name",
    placeholder: "Enter your name here",
    onChange: handleChange,
    onBlur: handleBlur,
    value: values.name,
    inputError: touched.name && errors.name,
    inputErrorMessage: errors.name,
  };

  const cardLasNameinputProps = {
    name: "lastName",
    placeholder: "Enter your lastName here",
    onChange: handleChange,
    onBlur: handleBlur,
    value: values.lastName,
    inputError: touched.lastName && errors.lastName,
    inputErrorMessage: errors.lastName,
  };

  const bankCardNumbersinputProps = {
    name: "bankNumber",
    placeholder: "Enter your numbers here",
    onChange: handleChange,
    onBlur: handleBlur,
    value: values.bankNumber,
    inputError: touched.bankNumber && errors.bankNumber,
    inputErrorMessage: errors.bankNumber,
  };

  const bankCardMonthinputProps = {
    // name: "month",
    // placeholder: "MM",
    // onChange: handleChange,
    onBlur: handleBlur,
    value: values.month,
    inputError: touched.month && errors.month,
    inputErrorMessage: errors.month,
  };

  const bankCardYearinputProps = {
    // name: "year",
    // placeholder: "YYYY",
    // onChange: handleChange,
    onBlur: handleBlur,
    value: values.year,
    inputError: touched.year && errors.year,
    inputErrorMessage: errors.year,
  };

  const bankCardCVCProps = {
    name: "CVC",
    placeholder: "CVC",
    onChange: handleChange,
    onBlur: handleBlur,
    value: values.CVC,
    inputError: touched.CVC && errors.CVC,
    inputErrorMessage: errors.CVC,
  };

  //   console.log(formik.setFieldValue);

  const bankCardCountrySelectErrorStyle = cardCountryInputProps.inputError
    ? "w-full border-red-500"
    : "w-full";

  const bankCardnNameErrorStyle = cardNameinputProps.inputError
    ? "border-red-500"
    : "";

  const bankCardLasNameStyle = cardLasNameinputProps.inputError
    ? "border-red-500"
    : "";

  const bankCardNumberStyle = bankCardNumbersinputProps.inputError
    ? "border-red-500"
    : "";

  const bankCardMonthStyle = bankCardMonthinputProps.inputError
    ? "border-red-500 w-[180px]"
    : "w-[180px]";

  const bankCardYearError = bankCardYearinputProps.inputError
    ? "border-red-500 w-[120px]"
    : "w-[120px]";

  const bankCardCVCstyle = bankCardCVCProps.inputError ? "border-red-500" : "";

  return (
    <div className="w-[100%] h-[100vh] flex flex-col justify-center items-center ">
      <div className="flex gap-6 flex-col">
        <p className="text-2xl font-semibold">
          How would you like to be paid?{" "}
        </p>
        <p className="text-sm text-muted-foreground font-normal">
          Enter location and payment details
        </p>

        <form onSubmit={handleSubmit}>
          <p>Select country</p>
          <Select
            value={values.country}
            onValueChange={(value) => setFieldValue("country", value)}
          >
            <SelectTrigger className={bankCardCountrySelectErrorStyle}>
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Countries</SelectLabel>
                <SelectItem value="mongolia">Mongolia</SelectItem>
                <SelectItem value="china">China</SelectItem>
                <SelectItem value="usa">United States</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="canada">Canada</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          {touched.country && errors.country && (
            <p className="text-sm text-red-500 mt-1">{errors.country}</p>
          )}

          <div className="flex w-full gap-3 ">
            <div className="w-1/2">
              <p>First name</p>
              <Input
                className={bankCardnNameErrorStyle}
                {...cardNameinputProps}
              />
              {touched.name && errors.name && (
                <p className="text-sm text-red-500 mt-1">{errors.name}</p>
              )}
            </div>

            <div className="w-1/2">
              <p>Last name</p>
              <Input
                className={bankCardLasNameStyle}
                {...cardLasNameinputProps}
              />
              {touched.lastName && errors.lastName && (
                <p className="text-sm text-red-500 mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div>
            <p>Enter card number</p>
            <Input
              {...bankCardNumbersinputProps}
              className={bankCardNumberStyle}
            />

            {touched.bankNumber && errors.bankNumber && (
              <p className="text-sm text-red-500 mt-1">{errors.bankNumber}</p>
            )}

            {/* <InputMask
            mask="9999-9999-9999-9999"
            placeholder="1234-5678-9012-3456"
          >
            {(inputProps) => (
              <Input
                {...inputProps}
                // className="border border-gray-300 rounded px-3 py-2"
              />
            )}
          </InputMask> */}
          </div>

          <div className="flex gap-4">
            <div>
              <p>Expires</p>
              <Select
                value={values.month}
                onValueChange={(value) => setFieldValue("month", value)}
              >
                <SelectTrigger className={bankCardMonthStyle}>
                  <SelectValue placeholder="Month" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Months</SelectLabel>
                    <SelectItem value="01">January</SelectItem>
                    <SelectItem value="02">February</SelectItem>
                    <SelectItem value="03">March</SelectItem>
                    <SelectItem value="04">April</SelectItem>
                    <SelectItem value="05">May</SelectItem>
                    <SelectItem value="06">June</SelectItem>
                    <SelectItem value="07">July</SelectItem>
                    <SelectItem value="08">August</SelectItem>
                    <SelectItem value="09">September</SelectItem>
                    <SelectItem value="10">October</SelectItem>
                    <SelectItem value="11">November</SelectItem>
                    <SelectItem value="12">December</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* <Input/> */}
              {touched.month && errors.month && (
                <p className="text-sm text-red-500 mt-1">{errors.month}</p>
              )}
            </div>

            <div>
              <p>Year</p>
              <Select
                value={values.year}
                onValueChange={(value) => setFieldValue("year", value)}
              >
                <SelectTrigger className={bankCardYearError}>
                  <SelectValue placeholder="YYYY" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2025">2025</SelectItem>
                  <SelectItem value="2026">2026</SelectItem>
                  <SelectItem value="2027">2027</SelectItem>
                </SelectContent>
              </Select>
              {touched.year && errors.year && (
                <p className="text-sm text-red-500 mt-1">{errors.year}</p>
              )}
            </div>

            <div>
              <p>CVC</p>
              <Input
                maxLength={4}
                className={bankCardCVCstyle}
                {...bankCardCVCProps}
              />

              {touched.CVC && errors.CVC && (
                <p className="text-sm text-red-500 mt-1">{errors.CVC}</p>
              )}
            </div>
          </div>
          <Button type="submit">submit</Button>
        </form>
      </div>
    </div>
  );
};
