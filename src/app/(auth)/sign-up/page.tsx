"use client";

import { useState } from "react";
import { SignUpUserName } from "./_components/signUp";
import { SignUpEmailPassword } from "./_components/signUpPassword";


const Page = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const StepComponent = [SignUpUserName, SignUpEmailPassword][currentStep];

  return (
    <div className="flex justify-center mt-10">
      <StepComponent setCurrentStep={setCurrentStep} />
    </div>
  );
};

export default Page;
