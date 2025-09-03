"use client";

import { useState } from "react";
import { CreateProfile } from "./CreateProfile";
import { CreateBankCartForm } from "./BankCartCreate";

export const UserInfoCreate = () => {
  const [step, setStep] = useState(0);

  const handleNext = () => setStep(step + 1);

  const stepComponents = [
    <CreateProfile key={0} handleNext={handleNext} />,
    <CreateBankCartForm key={1} />,
  ];

  return stepComponents[step];
};
