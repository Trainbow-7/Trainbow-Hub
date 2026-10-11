import { redirect } from "next/navigation";

export default function AuthoringRedirectPage() {
  redirect("/dashboard/tutor");
}
