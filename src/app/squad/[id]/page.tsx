'use client';

import { Loading } from '@/app/components/Loading';
import dynamic from 'next/dynamic';
import { useParams } from 'next/navigation';

const SquadDetail = dynamic(() => import('../../components/SquadDetail'), { ssr: false });

export default function SquadPage() {
  const { id } = useParams();

  if (!id) {
    return <Loading />;
  }

  return <SquadDetail squadId={id as string} />;
}
