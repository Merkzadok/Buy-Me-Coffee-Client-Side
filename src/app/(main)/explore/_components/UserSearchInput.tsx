import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const UserSearchInput = () => {
  return (
    <div className="flex items-center border-1 rounded-lg border-zinc-200  w-[210px] p-1 gap-1">
      <Search className="text-muted-foreground stroke-[1] w-[20px] h-[20px] " />
      <Input className="w-[234px] border-none p-0" placeholder="Search users..." />
    </div>
  );
};
