"use client";

import { useState } from "react";
import { SignUpUserName } from "./_components/signUp";
import { SignUpEmailPassword } from "./_components/signUpPassword";
const Page = () => {
  const [step, setStep] = useState(0);
  const [userName, setUserName] = useState("");

  const handleNext = () => setStep(step + 1);
  const onChangeUserName = (inputUserName: string) =>
    setUserName(inputUserName);

  const stepComponents = [
    <SignUpUserName
      key={0}
      handleNext={handleNext}
      onChangeUserName={onChangeUserName}
    />,
    <SignUpEmailPassword key={1} userName={userName} />,
  ];

  return stepComponents[step];
};

export default Page;
