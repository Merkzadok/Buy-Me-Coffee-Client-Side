"use client";

import { useEffect, useState } from "react";
import { ExploreUserSection } from "./ExploreUserSectionItem";
import { NoUser } from "./NoUsers";
import { UserSearchInput } from "./UserSearchInput";

import axios from "axios";

export const ExplorePage = () => {
  const [users, setUsers] = useState([]);

  const getExplore = async () => {
    try {
      const response = await axios.get("http://localhost:4001/profile/explore");

      const data = await response.data;

      setUsers(data?.usersProfile);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getExplore();
  }, []);

  return (
    <div className=" py-10 flex flex-col gap-6">
      <p className="font-semibold text-xl">Explore creators</p>
      <div>
        <UserSearchInput />
      </div>

      {users.length != 0 ? (
        users?.map((item, i) => (
          <div key={i} className=" w-full">
            <ExploreUserSection item={item} />
          </div>
        ))
      ) : (
        <div className="py-6 w-[100%]">
          <NoUser />
        </div>
      )}
    </div>
  );
};
