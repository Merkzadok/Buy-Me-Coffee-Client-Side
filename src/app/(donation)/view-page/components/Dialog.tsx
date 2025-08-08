"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { CreateUserProfile } from "@/components/userInfo/createProfileInfo/CreateUpdateProfile";
import { ProfileImageUploader } from "@/components/userInfo/createProfileInfo/profileImageuploader";
import { UserContext } from "@/provider/currentUserProvider";
import { CreateProfileAPIType, CreateProfileType } from "@/types/DonationType";
import axios from "axios";
import { useFormik } from "formik";
import { useContext, useEffect, useState } from "react";
import { toast } from "sonner";
import * as Yup from "yup";

const createUserSchema = Yup.object({
  profileImage: Yup.string().required("Please enter image"),
  name: Yup.string().required("Name is Please enter name"),
  about: Yup.string().required("Please enter info about yourself"),
  socialURL: Yup.string().url("Please enter a social link").required(),
});

export function DialogDemo() {
  const { userProvider } = useContext(UserContext);

  const [donationProfileUpdate, setDonationProfileUpdate] =
    useState<CreateProfileType>({
      profileImage: "",
      name: "",
      about: "",
      socialURL: "",
    });

  const getProfileDonation = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/profile/view/${userProvider.username}`
      );

      const data = response.data.userProfile as CreateProfileAPIType;

      setDonationProfileUpdate({
        profileImage: data?.avatarImage || "",
        name: data?.name || "",
        about: data?.about || "",
        socialURL: data?.socialMediaURL || "",
      });
    } catch (error) {
          toast.error("Error");
    }
  };

  useEffect(() => {
    if (!userProvider || !userProvider.username) return;
    getProfileDonation();
  }, [userProvider]);

  const ViewEditProfile = async (
    about: string,
    name: string,
    profileImage: string,
    socialURL: string
  ) => {
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/profile/${userProvider.profileId}`,
      {
        avatarImage: profileImage,
        name,
        about,
        socialMediaURL: socialURL,
      }
    );

  
  };

  const formik = useFormik({
    initialValues: {
      profileImage: donationProfileUpdate?.profileImage,
      name: donationProfileUpdate?.name,
      about: donationProfileUpdate?.about,
      socialURL: donationProfileUpdate?.socialURL,
    },
    enableReinitialize: true,
    validationSchema: createUserSchema,

    onSubmit: async (values) => {
     
      await ViewEditProfile(
        values.about,
        values.name,
        values.profileImage,
        values.socialURL
      );

      // await ViewEditProfile(
      //   values.about,
      //   values.name,
      //   values.profileImage,
      //   values.socialURL
      // );
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
  }); //Butets () => ({})

  //sm:max-w-[425px]
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit page</Button>
      </DialogTrigger>

      <DialogContent className="p-6">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>

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
            // profileImageInputProps={getFieldProps("profileImage")}
          />

          <DialogFooter>
            <DialogClose asChild>
              <div>
                <Button variant="outline">Cancel</Button>
                <Button type="submit">Save changes</Button>
              </div>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
