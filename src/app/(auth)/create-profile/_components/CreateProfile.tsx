"use client";

import { CreateUserProfile } from "@/components/userInfo/Create-updateProfile";
import { Button } from "@/components/ui/button";
import { useFormik } from "formik";
import * as Yup from "yup";

const createUserSchema = Yup.object({
  profileImage: Yup.string().required("Please enter image"),
  name: Yup.string().required("Name is Please enter name"),
  about: Yup.string().required("Please enter info about yourself"),
  socialURL: Yup.string().url("Please enter a social link").required(),
});

export const CreateProfile = ({ handleNext }: any) => {
  const formik = useFormik({
    initialValues: {
      profileImage: "",
      name: "",
      about: "",
      socialURL: "",
    },
    validationSchema: createUserSchema,
    onSubmit: (values) => {

      console.log(values);
      handleNext();
    },
  });
  // console.log("formik", formik);

  const { handleBlur, handleChange, handleSubmit, errors, touched, values } =
    formik;

  const profileImageInputProps = {
    name: "profileImage",
    placeholder: "https://",
    onChange: handleChange,
    onBlur: handleBlur,
    value: values.profileImage,
    inputError: touched.profileImage && errors.profileImage,
    inputErrorMessage: errors.profileImage,
  };

  const profileNameinputProps = {
    name: "name",
    placeholder: "Enter your name here",
    onChange: handleChange,
    onBlur: handleBlur,
    value: values.name,
    inputError: touched.name && errors.name,
    inputErrorMessage: errors.name,
  };

  const profileAboutMeInputProps = {
    name: "about",
    placeholder: "Write about yourself here",
    onChange: handleChange,
    onBlur: handleBlur,
    value: values.about,
    inputError: touched.about && errors.about,
    inputErrorMessage: errors.about,
  };

  const profileURLInputProps = {
    name: "socialURL",
    placeholder: "https://",
    onChange: handleChange,
    onBlur: handleBlur,
    value: values.socialURL,
    inputError: touched.socialURL && errors.socialURL,
    inputErrorMessage: errors.socialURL,
  };

  return (
    <div className="w-[100%] h-[100vh] flex flex-col justify-center items-center ">
      <form onSubmit={handleSubmit} className="flex gap-6 flex-col">
        <p className="text-2xl font-semibold">Complete your profile page</p>

        <CreateUserProfile
          profileNameinputProps={profileNameinputProps}
          profileAboutMeInputProps={profileAboutMeInputProps}
          profileURLInputProps={profileURLInputProps}
          profileImageInputProps={profileImageInputProps}
        />
        <div className="text-right mt-[24px]">
          <Button className="w-1/2">Continue</Button>
        </div>
      </form>
    </div>
  );
};
