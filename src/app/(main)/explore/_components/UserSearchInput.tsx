
import { Search } from "lucide-react";

export const UserSearchInput = () => {
  return (
    <div className="flex items-center border-1 rounded-lg border-zinc-200  w-[210px] p-2 gap-1">
      <Search className="text-muted-foreground stroke-[1] w-[20px] h-[20px] " />
      <input className="border-none p-0 outline-none" placeholder="Search users..." />
    </div>
  );
};
