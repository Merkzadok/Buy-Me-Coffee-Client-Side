import { Button } from "@/components/ui/button";
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

export const EditProfile = ({
  username,
  profileId,
}: {
  username: string;
  profileId: number;
}) => {
  const [profileInput, setProfileInput] = useState<CreateProfileType>({
    profileImage: "",
    name: "",
    about: "",
    socialURL: "",
  });


  const getUserProfile = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/profile/view/${username}`
      );


      const data = response.data.userProfile as CreateProfileAPIType;


      setProfileInput({
        profileImage: data.avatarImage || "",
        name: data.name || "",
        about: data.about || "",
        socialURL: data.socialMediaURL || "",
      });
    } catch (error) {
      toast.error("Error");
      
    }
  };

  useEffect(() => {
    if (!username) return;
    getUserProfile();
  }, [username]);

  const settingsProfileUpdate = async (
    profileImage: string,
    name: string,
    about: string,
    socialURL: string
  ) => {
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/profile/${profileId}`,
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
      profileImage: profileInput.profileImage,
      name: profileInput.name,
      about: profileInput.about,
      socialURL: profileInput.socialURL,
    },
    enableReinitialize: true,
    validationSchema: createUserSchema,
    onSubmit: async (values) => {
      await settingsProfileUpdate(
        values.profileImage,
        values.name,
        values.about,
        values.socialURL
      );
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

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 border-1 rounded-lg border-zinc-200"
    >
      <p className="text-[16px] font-bold pb-6">Personal Info</p>
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

      <Button className="w-full mt-6">Save Changes</Button>
    </form>
  );
};
