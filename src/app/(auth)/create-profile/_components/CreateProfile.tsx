"use client";

import { CreateUserProfile } from "@/components/userInfo/createProfileInfo/Create-updateProfile";

import { Button } from "@/components/ui/button";

import { useFormik } from "formik";

import * as Yup from "yup";

import { useRef, useState } from "react";

import { Input } from "@/components/ui/input";

import { Camera } from "lucide-react";

import { ProfileImageUploader } from "@/components/userInfo/createProfileInfo/profileImageuploader";

const createUserSchema = Yup.object({
  profileImage: Yup.string().required("Please enter image"),

  name: Yup.string().required("Name is Please enter name"),

  about: Yup.string().required("Please enter info about yourself"),

  socialURL: Yup.string().url("Please enter a social link").required(),
});

type createProfileType = {
  handleNext: () => void;
};

export const CreateProfile = ({ handleNext }: createProfileType) => {
  const formik = useFormik({
    initialValues: {
      profileImage: "",

      name: "",

      about: "",

      socialURL: "",
    },

    validationSchema: createUserSchema,

    onSubmit: (values) => {
      handleNext();

      console.log("L create profile: ", values);
    },
  });

  const {
    handleBlur,

    handleChange,

    handleSubmit,

    errors,

    touched,

    values,

    setFieldValue,
  } = formik;

  const getFieldProps = (name: keyof typeof values) => ({
    name,

    // placeholder: getPlaceHolder(name),

    onChange: handleChange,

    onBlur: handleBlur,

    value: values[name],

    inputError: touched[name] && errors[name],

    inputErrorMessage: errors[name],
  }); //Butets () => ({})

  // const getPlaceHolder = (name: string) => {
  // switch (name) {
  // case "profileImage":
  // return "";
  // case "name":
  // return "Enter your name here";
  // case "about":
  // return "Write about yourself here";
  // case "socialURL":
  // return "https://";
  // default:
  // return "";
  // }

  // }; //placeholder heseg

  return (
    <div className="w-[100%] h-[100vh] flex flex-col justify-center items-center ">
      <form onSubmit={handleSubmit} className="flex gap-6 flex-col">
        <p className="text-2xl font-semibold">Complete your profile page</p>
        <ProfileImageUploader
          value={values.profileImage}
          touchedErr={!!touched.profileImage}
          error={errors.profileImage || ""}
          setImageField={(url: string) => setFieldValue("profileImage", url)}
        />
        <CreateUserProfile
          profileNameinputProps={getFieldProps("name")}
          profileAboutMeInputProps={getFieldProps("about")}
          profileURLInputProps={getFieldProps("socialURL")}
          profileImageInputProps={getFieldProps("profileImage")}
        />
        <div className="text-right mt-[24px]">
          <Button className="w-1/2">Continue</Button>
        </div>
      </form>
    </div>
  );
};
