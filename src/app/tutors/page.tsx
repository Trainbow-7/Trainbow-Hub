import { permanentRedirect } from "next/navigation";

export const metadata = {
  title: "Tutor Matching — Trainbow HUB",
  description: "Request a personally matched tutor through Trainbow HUB concierge service.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function TutorsPage() {
  permanentRedirect("/request-tutor");
}
