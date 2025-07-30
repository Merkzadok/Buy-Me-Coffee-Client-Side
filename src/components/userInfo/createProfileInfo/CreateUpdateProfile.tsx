
import { Input } from "../../ui/input";
import { Textarea } from "../../ui/textarea";



type FormFieldTypes = {
  name: string;
  // placeholder: string;
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
  // profileImageInputProps: FormFieldTypes;
};

export const CreateUserProfile = ({
  profileNameinputProps,
  profileAboutMeInputProps,
  profileURLInputProps,
}: CreateUserProfileTypes) => {
  
  const {
    inputError: nameInputerror,
    inputErrorMessage: nameInputErrMsg,
    ...nameInputProps
  } = profileNameinputProps;

  const {
    inputError: aboutInputerror,
    inputErrorMessage: aboutInputErrMsg,
    ...aboutInputProps
  } = profileAboutMeInputProps;

  const {
    inputError: urlInputerror,
    inputErrorMessage: urlInputErrMsg,
    ...urlInputProps
  } = profileURLInputProps;

  //   console.log("CREATEUSER : ", profileNameinputProps);
  //   console.log(profileImageInputProps);

  const inputNameBorderErrorStyle = nameInputerror ? "border-red-500" : "";

  const inputBorderAboutErrorStyle = aboutInputerror
    ? "border-red-500 resize-none  h-[130px]"
    : "resize-none h-[130px]";

  const inputBorderURLErrorStyle = urlInputerror
    ? "border-red-500"
    : "";

  return (
    <div>
      <div className="flex flex-col gap-3">
        <div>
          <p className="text-sm mb-[8px]">Name</p>
          <Input
            type="text"
            {...nameInputProps}
            className={inputNameBorderErrorStyle}
            placeholder="Enter your name here"
          />
          {nameInputerror && (
            <p className="text-sm text-red-500 mt-1">{nameInputErrMsg}</p>
          )}
        </div>

        <div>
          <p className="text-sm mb-[8px]">About</p>
          <Textarea
            {...aboutInputProps}
            className={inputBorderAboutErrorStyle}
            placeholder="Write about yourself here"
          />
          {aboutInputerror && (
            <p className="text-sm text-red-500 mt-1">{aboutInputErrMsg}</p>
          )}
        </div>

        <div>
          <p className="text-sm mb-[8px]">Social media URL</p>
          <Input
            type="url"
            {...urlInputProps}
            className={inputBorderURLErrorStyle}
            placeholder="https://"
          />
          {urlInputerror&& (
            <p className="text-sm text-red-500 mt-1">
              {urlInputErrMsg}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
