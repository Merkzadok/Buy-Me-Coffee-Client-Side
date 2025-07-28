import { Header } from "@/components/Header";
import { Popover } from "@/components/ui/popover";
import { Coffee } from "lucide";
import Donation from "./(donation)/page";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Donation/>
    </div>
  );
}
