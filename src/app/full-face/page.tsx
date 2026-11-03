import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { FullFaceArticle } from '@/components/fullface/FullFaceArticle';
import { fullFaceMetadata } from '@/components/fullface/fullFaceMetadata';
import { getFullFacePage } from '@/data/fullFace';

const page = getFullFacePage('full-face');

export const metadata: Metadata = page ? fullFaceMetadata(page) : {};

export default function FullFacePilarPage() {
  if (!page) notFound();
  return <FullFaceArticle page={page} comMapa comVideos />;
}
