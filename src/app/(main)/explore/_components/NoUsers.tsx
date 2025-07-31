import { UserRound } from "lucide-react";

export const NoUser = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div className="w-[64px] h-[64px] bg-secondary rounded-full flex justify-center items-center">
        <UserRound />
      </div>
      <p>No creators have signed up yet</p>
    </div>
  );
};
