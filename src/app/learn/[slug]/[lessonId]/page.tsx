import { redirect } from "next/navigation";

export default function LegacyLearnRedirectPage({
  params,
}: {
  params: { slug: string; lessonId: string };
}) {
  const { slug, lessonId } = params;
  redirect(`/courses/${slug}/lessons/${lessonId}`);
}
