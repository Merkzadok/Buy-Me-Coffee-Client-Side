"use client";

import { Button } from "@/components/ui/button";
import { useFormik } from "formik";
import * as Yup from "yup";


import { CreateUserProfile } from "@/components/userInfo/createProfileInfo/CreateUpdateProfile";
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
    onChange: handleChange,
    onBlur: handleBlur,
    value: values[name],
    inputError: touched[name] && errors[name],
    inputErrorMessage: errors[name],
  }); 


  return (
    <div className="w-[100%] h-[100vh] flex flex-col justify-center items-center ">
      <form onSubmit={handleSubmit} className="flex gap-6 flex-col w-[510px]">
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
        />
        <div className="text-right mt-[24px]">
          <Button type="submit">Continue</Button>
        </div>
      </form>
    </div>
  );
};
