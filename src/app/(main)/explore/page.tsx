import { Suspense } from "react";
import { ExplorePage } from "./_components/ExplorePage";

const Explore = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="max-w-[1200px]">
        <ExplorePage />
      </div>
    </Suspense>
  );
};
export default Explore;
