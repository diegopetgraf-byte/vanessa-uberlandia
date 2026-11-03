import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { FullFaceArticle } from '@/components/fullface/FullFaceArticle';
import { fullFaceMetadata } from '@/components/fullface/fullFaceMetadata';
import { FULL_FACE_SUBPAGES } from '@/data/fullFace';

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return FULL_FACE_SUBPAGES.map((p) => ({ slug: p.slug }));
}

const find = (slug: string) => FULL_FACE_SUBPAGES.find((p) => p.slug === slug);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = find(slug);
  if (!page) return {};
  return fullFaceMetadata(page);
}

export default async function FullFaceSubPage({ params }: Props) {
  const { slug } = await params;
  const page = find(slug);
  if (!page) notFound();
  return <FullFaceArticle page={page} />;
}
