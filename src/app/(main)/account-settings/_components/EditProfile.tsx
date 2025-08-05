import { Button } from "@/components/ui/button";
import { CreateUserProfile } from "@/components/userInfo/createProfileInfo/CreateUpdateProfile";
import { ProfileImageUploader } from "@/components/userInfo/createProfileInfo/profileImageuploader";
import { useFormik } from "formik";
import * as Yup from "yup";

const createUserSchema = Yup.object({
  profileImage: Yup.string().required("Please enter image"),
  name: Yup.string().required("Name is Please enter name"),
  about: Yup.string().required("Please enter info about yourself"),
  socialURL: Yup.string().url("Please enter a social link").required(),
});

export const EditProfile = () => {
  const formik = useFormik({
    initialValues: {
      profileImage: "",
      name: "~L Bolormaa",
      about:
        "I’m a typical person who enjoys exploring different things. I also make music art as a hobby. Follow me along.",
      socialURL: "",
    },
    validationSchema: createUserSchema,
    onSubmit: (values) => {
      console.log("~L Setting profile edit:", values);
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
