"use client";

import { UserType } from "@/types/DonationType";
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

type userContextType = {
  userProvider: UserType;
};

export const UserContext = createContext({} as userContextType);

export default function UserContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [userProvider, setUserProvider] = useState({} as UserType);

  const getCurrentUserByAccessToken = async () => {
    const token =localStorage.getItem("token") as string;
    try {
      const response = await axios.get(
        "http://localhost:4001/profile/current-user",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log(response?.data);

      setUserProvider(response?.data?.user);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log("USER PROVIDER:", userProvider);

  useEffect(() => {
    getCurrentUserByAccessToken();
  }, []);

  return (
    <UserContext.Provider value={{ userProvider }}>
      {children}
    </UserContext.Provider>
  );
}

// {
//     "user": {
//         "id": 13,
//         "email": "test89@gmail.com",
//         "username": "L-era67",
//         "password": "$2b$10$6ahHFys6BaXd/Il5YT7TM.12BjT7Rjfhi1XiPrlS8rZAKKRsCwv9C",
//         "profileId": 16,
//         "createdAt": "2025-08-04T03:53:54.958Z",
//         "updatedAt": "2025-08-04T05:04:35.990Z"
//     }
// }
