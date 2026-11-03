import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { FullFaceArticle } from '@/components/fullface/FullFaceArticle';
import { fullFaceMetadata } from '@/components/fullface/fullFaceMetadata';
import { getFullFacePage } from '@/data/fullFace';
import { CLINIC } from '@/data/clinic';

const page = getFullFacePage('sobre');

export const metadata: Metadata = page ? fullFaceMetadata(page, CLINIC.photo) : {};

export default function SobrePage() {
  if (!page) notFound();
  return (
    <FullFaceArticle
      page={page}
      retrato={{
        src: CLINIC.photo,
        alt: 'Dra. Vanessa Sanabria Bevilaqua, cirurgiã-dentista, no Instituto Oni Face em Uberlândia',
      }}
    />
  );
}
