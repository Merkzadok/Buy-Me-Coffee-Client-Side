import { UserContext } from "@/provider/currentUserProvider";
import { FilterProps } from "@/types/types";
import { useContext, useEffect, useState } from "react";

export const Transactions = ({ filteredAmounts }: FilterProps) => {
  const time = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    hour12: false,
  });
  const [donors, setDonors] = useState<number[]>([]);
  const { userProvider } = useContext(UserContext);

  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const response = await fetch(
          `http://localhost:4001/donation/received/${userProvider.id} `
        );
        const data = await response.json();
        console.log("Donors fetched:", data);
        setDonors(data);
      } catch (error) {
        console.error("Error fetching donors:", error);
      }
      fetchDonors();
    };
  }, []);

  return (
    <div className="mt-3">
      <div className="border-2 h-[660px] border-[#E4E4E7] rounded-lg overflow-y-auto">
        {filteredAmounts.map((item, index) => (
          <div className="p-6" key={index}>
            <div className="p-3">
              <div className=" flex justify-between">
                <div className="flex gap-4 items-center">
                  <img
                    src="https://i.pinimg.com/736x/5a/97/a6/5a97a635e8e75a7c619de0b3d8561ade.jpg"
                    alt="profile"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-medium text-md">{}</p>
                    <p className="font-normal text-sm text-gray-600">
                      buymeacoffee.com/baconpancakes1
                    </p>
                  </div>
                </div>
                <div>
                  <p className="font-bold flex justify-end">
                    ${filteredAmounts.map((item) => item.amount).join(", ")}
                  </p>
                  <p className="text-[#71717A] text-[12px]">{time} hours ago</p>
                </div>
              </div>
              <div className="mt-4 ">
                <p className="font-normal text-md">
                  Thank you for being so awesome everyday!
                </p>
              </div>
            </div>
            <div className="mt-4 w-[835px]"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

//  <div className="p-6">
//           <div className="p-3">
//             <div className=" flex justify-between">
//               <div className="flex gap-4 items-center">
//                 <img
//                   src="https://i.pinimg.com/736x/5a/97/a6/5a97a635e8e75a7c619de0b3d8561ade.jpg"
//                   alt="profile"
//                   className="w-10 h-10 rounded-full"
//                 />
//                 <div>
//                   <p className="font-medium text-md">Jake</p>
//                   <p className="font-normal text-sm text-gray-600">
//                     buymeacoffee.com/baconpancakes1
//                   </p>
//                 </div>
//               </div>
//               <div>
//                 <p className="font-bold flex justify-end">
//                   ${filteredAmounts.map((item) => item.amount).join(", ")}
//                 </p>
//                 <p className="text-[#71717A] text-[12px]">{time} hours ago</p>
//               </div>
//             </div>
//             <div className="mt-4 ">
//               <p className="font-normal text-md">
//                 Thank you for being so awesome everyday!
//               </p>
//             </div>
//           </div>
//           <div className="mt-4 w-[835px]"></div>
//         </div>
