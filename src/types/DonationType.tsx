export type DonationItemType = {
  amount: number;
  specialMesssage: string;
  socialURLOrBuyMeACoffee: string;
  donorId: number;
  recipientId: number;
  createdAt: string;
  updatedAt: string;
};
// export type UserWithDonatonType = {
//   id: string;
//   username: string;
//   donations: DonationItemType[];
//   profile: ProfileType;
// };

export type ProfileType = {
  id: number;
  name: string;
  about: string;
  avatarImage: string;
  backgroundImage: string;
  socialMediaURL: string;
  successMessage: string;
  userId: number;
  createdAt: string;
  updatedAt: string;
};

// export type DonationUserDataType = {
//   userProfile: ProfileType;
//   username: string;
// };

export type DonationUserUIType = {
  isEditable: boolean;
  userData: ProfileType;
};

export type UserType = {
  id: number;
  email: string;
  username: string;
  password: string;
  profileId: number;
  createdAt: string;
  updatedAt: string;
};
