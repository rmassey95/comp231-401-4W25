import { redirect } from "next/navigation";
import { DEFAULT_ORG_ID } from "@/lib/constants";

export default function Page() {
  redirect(`/organization/${DEFAULT_ORG_ID}`);
}
