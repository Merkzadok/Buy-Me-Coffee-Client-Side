"use client";


import { useState } from "react";
import { LogInEmailPassword } from "./_components/login";




const Page = () => {
//   const [currentStep, setCurrentStep] = useState(0);

//   const StepComponent = [LogInEmailPassword][currentStep];

  return (
    <div className="flex justify-center mt-10">
      <LogInEmailPassword />
    </div>
  );
};

export default Page;
