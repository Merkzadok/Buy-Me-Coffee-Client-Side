import { Header } from "@/components/Header";
import { CreateBankCartForm } from "./_components/BankCartCreate";
import { CreateProfile } from "./_components/CreateProfile";
import { UserInfoCreate } from "./_components/UserProInfo";

export default function page() {
  return (
    <div>
      <Header />
      {/* <CreateProfile/> */}
      {/* <CreateBankCartForm /> */}
      <UserInfoCreate />
    </div>
  );
}
