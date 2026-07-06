import { permanentRedirect } from "next/navigation";

type NoteRedirectProps = {
  params: Promise<{ slug: string }>;
};

export default async function NoteRedirectPage({ params }: NoteRedirectProps) {
  const { slug } = await params;
  permanentRedirect(`/blogs/${slug}`);
}
