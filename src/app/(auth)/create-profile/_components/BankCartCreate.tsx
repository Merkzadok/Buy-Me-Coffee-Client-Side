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

const createBankCartSchema = Yup.object({
  country: Yup.string().required(),
});

export const CreateBankCartForm = () => {

  const formik = useFormik({
    initialValues: {
      country: "",
    },
    validationSchema: createBankCartSchema,
    onSubmit: (values) => {
      console.log("values bank cart:", values);
    },
  });

  const { values, setFieldValue, handleSubmit } = formik;

//   console.log(formik.setFieldValue);
  

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
            <SelectTrigger className="w-full">
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
          {/* <Button type="submit">submit</Button> */}
        </form>

        <div className="flex w-full gap-3 ">
          <div className="w-1/2">
            <p>First name</p>
            <Input />
          </div>

          <div className="w-1/2">
            <p>Last name</p>
            <Input />
          </div>
        </div>

        <div>
          <p>Enter card number</p>
          <Input />
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
            <Input/>
          </div>
          <div>
            <p>Year</p>
            <Input />
          </div>
          <div>
            <p>CVC</p>
            <Input />
          </div>
        </div>
      </div>
    </div>
  );
};
