import { Suspense } from "react";
import { ExplorePage } from "./_components/ExplorePage";
import { Header } from "@/components/Header";

const Explore = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />

      <div className="max-w-[1200px]">
        <ExplorePage />
      </div>
    </Suspense>
  );
};
export default Explore;
