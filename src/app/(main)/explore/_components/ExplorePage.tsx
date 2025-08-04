import { ExploreUserSection } from "./ExploreUserSectionItem";
import { NoUser } from "./NoUsers";
import { UserSearchInput } from "./UserSearchInput";

const mockUsers = [
  {
    id: "user_001",
    name: "Space Ranger",
    avatarUrl: "https://i.pinimg.com/736x/de/74/86/de74864e5816d86bf2f4d6485dd3b252.jpg",
    about:
      "All day, every day, we're watching, listening to, reading and absorbing politics. It's exhausting. We then report on what we've seen in a way that's as chill as possible.",
    socialMediaUrl: "https://buymeacoffee.com/baconpancakes1",
  },
  {
    id: "user_002",
    name: "Code Astronaut",
    avatarUrl: "https://i.pinimg.com/736x/ce/df/43/cedf439942e18ca2127e9fe9b55a500a.jpg",
    about:
      "Passionate full-stack developer building beautiful web apps with React and Node.js. Loves space and cats 🐱🚀.",
    socialMediaUrl: "https://twitter.com/codeastronaut",
  },
  {
    id: "user_003",
    name: "Space Ranger",
    avatarUrl: "https://github.com/shadcn.png",
    about:
      "All day, every day, we're watching, listening to, reading and absorbing politics. It's exhausting. We then report on what we've seen in a way that's as chill as possible.",
    socialMediaUrl: "https://buymeacoffee.com/baconpancakes1",
  },
  {
    id: "user_004",
    name: "Design Ninja",
    avatarUrl: "https://i.pinimg.com/736x/96/33/32/9633326e9038d007965b9dbfac121497.jpg",
    about:
      "UX/UI designer with a love for minimal aesthetics and smooth animations. Figma, Framer, and a cup of matcha.",
    socialMediaUrl: "https://dribbble.com/designninja",
  },
];

export const ExplorePage = () => {
  return (
    <div className=" py-10 flex flex-col gap-6">
      <p className="font-semibold text-xl">Explore creators</p>
      <div>
        <UserSearchInput />
      </div>

      {mockUsers.length != 0 ? (
        mockUsers?.map((item, i) => (
          <div key={i} className=" w-full">
            <ExploreUserSection item={item} />
          </div>
        ))
      ) : (
        <div className="py-6 w-[100%]">
          <NoUser />
        </div>
      )}
      {/* <NoUser/> */}
    </div>
  );
};
