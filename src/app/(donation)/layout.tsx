import { Header } from "@/components/Header";
import Link from "next/link";

export default function DonationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
    </div>
  );
}
