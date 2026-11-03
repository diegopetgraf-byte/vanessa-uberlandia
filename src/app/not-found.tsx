import type { Metadata } from 'next';
import NotFoundClient from '@/components/NotFoundClient';

export const metadata: Metadata = {
    title: 'Página não encontrada | Instituto Oni Face',
    description: 'A página que você está procurando não existe.',
    robots: {
        index: false,
        follow: true,
    },
};

export default function NotFound() {
    return <NotFoundClient />;
}
