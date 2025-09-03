import { DonationPage } from "@/components/donation/DonationPage";

export default async function UsersProfile({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  const UserName = username;

  return <DonationPage isEditable={false} username={UserName} />;
}
