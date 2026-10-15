import { permanentRedirect } from "next/navigation";

export const metadata = {
  title: "Tutor Profile — Trainbow HUB",
  description: "Tutor booking is managed via personal concierge matching.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function TutorDetailPage() {
  permanentRedirect("/request-tutor");
}
