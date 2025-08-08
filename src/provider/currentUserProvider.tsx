"use client";

import { UserType } from "@/types/DonationType";
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { toast } from "sonner";

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
    const token = localStorage.getItem("token") as string;
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/profile/current-user`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUserProvider(response?.data?.user);
    } catch (error) {
      toast.error("Error");
    }
  };

  useEffect(() => {
    getCurrentUserByAccessToken();
  }, []);

  return (
    <UserContext.Provider value={{ userProvider }}>
      {children}
    </UserContext.Provider>
  );
}
