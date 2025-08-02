import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="mx-30 my-11">
        <Sidebar />
      </div>
    </div>
  );
}
