export type DonationItemType = {
  amount: number;
  specialMesssage: string;
  socialURLOrBuyMeACoffee: string;
  donorId: number;
  recipientId: number;
  createdAt: string;
  updatedAt: string;
};
export type UserDataType = {
  id: string;
  username: string;
  donations: DonationItemType[];
  profile:ProfileType
};


export type ProfileType = {
  name: string;
  about: string;
  avatarImage: string;
  backgroundImage: string;
  socialMediaURL: string;
  successMessage: string;
};

export type DonationUserUIType = {
  isEditable: boolean;
  userData: UserDataType;
};
