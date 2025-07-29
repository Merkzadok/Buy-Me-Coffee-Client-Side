import React, { useRef } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Camera } from "lucide-react";
import CoverImageUploader from "./profileImage";

type FormFieldTypes = {
  name: string;
  placeholder: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  value: string;
  inputError?: boolean | string;
  inputErrorMessage?: string;
};

type CreateUserProfileTypes = {
  profileNameinputProps: FormFieldTypes;
  profileAboutMeInputProps: FormFieldTypes;
  profileURLInputProps: FormFieldTypes;
  profileImageInputProps: FormFieldTypes;
};

export const CreateUserProfile = ({
  profileNameinputProps,
  profileAboutMeInputProps,
  profileURLInputProps,
  profileImageInputProps,
}: CreateUserProfileTypes) => {
  //   console.log("CREATEUSER : ", profileNameinputProps);
  //   console.log(profileImageInputProps);

  const inputElement = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    inputElement.current?.click();
  };

  const inputNameBorderErrorStyle = profileNameinputProps.inputError
    ? "border-red-500"
    : "";

  const inputBorderAboutErrorStyle = profileAboutMeInputProps.inputError
    ? "border-red-500 resize-none w-[510px] h-[130px]"
    : "resize-none w-[510px] h-[130px]";

  const inputBorderURLErrorStyle = profileURLInputProps.inputError
    ? "border-red-500"
    : "";

  const inputBorderImageErrorStyle = profileImageInputProps.inputError
    ? "flex justify-center items-center w-[160px] h-[160px] border-2 border-dashed rounded-full border-red-500"
    : "flex justify-center items-center w-[160px] h-[160px] border-2 border-dashed rounded-full ";

  return (
    <div>
      <div>
        <p className="mb-[12px] text-sm">Add photo</p>
        <CoverImageUploader />

        {/* <Input
          {...profileImageInputProps}
          type="file"
          ref={inputElement}
          className="hidden"
        />

        <div onClick={focusInput} className={inputBorderImageErrorStyle}>
          <Camera className="text-gray-400 font-thin" />
        </div> */}

        {/* {profileImageInputProps.inputError && (
          <p className="text-sm text-red-500 mt-1">
            {profileImageInputProps.inputErrorMessage}
          </p>
        )} */}
      </div>

      <div className="flex flex-col gap-3">
        <div>
          <p className="text-sm mb-[8px]">Name</p>
          <Input
            // id={profileNameinput.name}
            // name={profileNameinput.name}
            // onChange={profileNameinput.onChange}
            // onBlur={profileNameinput.onBlur}
            // className={inputBorderErrorStyle}
            // placeholder={profileNameinput.placeholder}
            // value={profileNameinput.value}
            // {...profileNameinput}
            type="text"
            {...profileNameinputProps}
            className={inputNameBorderErrorStyle}
          />
          {profileNameinputProps.inputError && (
            <p className="text-sm text-red-500 mt-1">
              {profileNameinputProps.inputErrorMessage}
            </p>
          )}
        </div>

        <div>
          <p className="text-sm mb-[8px]">About</p>
          <Textarea
            {...profileAboutMeInputProps}
            className={inputBorderAboutErrorStyle}
          />
          {profileAboutMeInputProps.inputError && (
            <p className="text-sm text-red-500 mt-1">
              {profileAboutMeInputProps.inputErrorMessage}
            </p>
          )}
        </div>

        <div>
          <p className="text-sm mb-[8px]">Social media URL</p>
          <Input
            type="url"
            {...profileURLInputProps}
            className={inputBorderURLErrorStyle}
          />
          {profileURLInputProps.inputError && (
            <p className="text-sm text-red-500 mt-1">
              {profileURLInputProps.inputErrorMessage}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
