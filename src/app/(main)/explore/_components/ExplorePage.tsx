"use client";

import { useEffect, useState } from "react";
import { ExploreUserSection } from "./ExploreUserSectionItem";
import { NoUser } from "./NoUsers";
import { UserSearchInput } from "./UserSearchInput";

import axios from "axios";
import { Button } from "@/components/ui/button";
import { ProfileWithUserNameType } from "@/types/DonationType";

type exploreType = {
  usersProfile: ProfileWithUserNameType[];
  totalUsers: number;
  totalPage:number
};

export const ExplorePage = () => {
  const [users, setUsers] = useState<null | exploreType>(null);
  const [page, setPage] = useState<number>(1);

  const getExplore = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4001/profile/explore?page=${page}`
      );
      console.log("responseee:", response.data.totalUsers);

      const data = response.data as exploreType;
      console.log(data);

      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // if (!users) return;
    getExplore();
  }, [page]);
  console.log("page:", page);

  return (
    <div className=" py-10 flex flex-col gap-6">
      <p className="font-semibold text-xl">Explore creators</p>
      <div>
        <UserSearchInput />
      </div>

      {users?.usersProfile.length != 0 ? (
        users?.usersProfile.map((item, i) => (
          <div key={i} className=" w-full">
            <ExploreUserSection item={item} />
          </div>
        ))
      ) : (
        <div className="py-6 w-[100%]">
          <NoUser />
        </div>
      )}

      <div>
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Previous
        </Button>
        <Button
          onClick={() => setPage(page + 1)}
          disabled={page === users?.totalPage}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
