"use client";

import { Button } from "@/components/ui/button";
import { useFormik } from "formik";
import * as Yup from "yup";

import { CreateUserProfile } from "@/components/userInfo/createProfileInfo/CreateUpdateProfile";
import { ProfileImageUploader } from "@/components/userInfo/createProfileInfo/profileImageuploader";

import axios from "axios";
import { useContext, useState } from "react";
import { UserContext } from "@/provider/currentUserProvider";

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
  const [loading, setLoading] = useState(false);

  const { userProvider } = useContext(UserContext);

  console.log("CREATE PROFILE USERPROVIDER:", userProvider);
  
  const url = process.env.BACKEND_URL || "http://localhost:4001";
  const createProfilePost = async (
    profileImage: string,
    about: string,
    name: string,
    socialURL: string
  ) => {
    try {
      await axios.post(`${url}/profile/${userProvider.id}`, {
        avatarImage: profileImage,
        about,
        name,
        socialMediaURL: socialURL,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      profileImage: "",
      name: "",
      about: "",
      socialURL: "",
    },

    validationSchema: createUserSchema,

    onSubmit: async (values) => {
      // if (!userProvider.id) {
      //   alert("User data is not loaded yet. Please try again.");
      //   return;
      // }
      setLoading(true);

      await createProfilePost(
        values.profileImage,
        values.about,
        values.name,
        values.socialURL
      );

      handleNext();

      console.log("L create profile: ", values);

      setLoading(false);
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
          <Button type="submit" disabled={loading}>
            {loading ? "...loading" : "Continue"}
          </Button>
        </div>
      </form>
    </div>
  );
};
