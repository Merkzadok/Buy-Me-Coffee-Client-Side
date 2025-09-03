import { DonationPage } from "@/components/donation/DonationPage";
import { Header } from "@/components/Header";

export default async function UsersProfile({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  const UserName = username;

  return (
    <div>
      <Header /> <DonationPage isEditable={false} username={UserName} />
    </div>
  );
}
