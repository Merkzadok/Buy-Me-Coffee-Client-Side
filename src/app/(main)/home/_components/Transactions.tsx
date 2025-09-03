import { FilterProps } from "@/types/types";
import { formatDistanceToNow } from "date-fns";
import Image from "next/image";

export const Transactions = ({ filteredAmounts }: FilterProps) => {
  return (
    <div className="mt-3">
      <div className="border-2 h-[660px] border-[#E4E4E7] rounded-lg overflow-y-auto">
        {filteredAmounts.map((item, index) => (
          <div className="px-6 " key={index}>
            <div className="pt-8">
              <div className=" flex justify-between">
                <div className="flex gap-4 items-center">
                  <Image
                    src={item.donor.profile.avatarImage}
                    alt="profile"
                    className="w-10 h-10 rounded-full"
                    width={40}
                    height={40}
                  />
                  <div>
                    <p className="font-medium text-md">
                      {item.donor.profile.name || "Anonymous"}
                    </p>
                    <p className="font-normal text-sm text-gray-600">
                      {item.donor.profile.socialMediaURL}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="font-bold flex justify-end">${item.amount}</p>
                  <p className="text-[#71717A] text-[12px]">
                    {formatDistanceToNow(new Date(item.createdAt), {
                      addSuffix: true,
                    })}
                  </p>
                </div>
              </div>
              <div className="mt-4 ">
                <p className="font-normal text-md">
                  {item.specialMesssage || ""}
                </p>
              </div>
            </div>
            <div className="mt- w-[835px]"></div>
          </div>
        ))}
      </div>
    </div>
  );
};
