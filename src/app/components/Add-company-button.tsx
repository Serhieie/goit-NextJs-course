'use client';

import React from 'react';
// import dynamic from 'next/dynamic';
import Button from '@/app/components/Button';
import { useRouter } from 'next/navigation';

//динамічний імпорт для відкладенного завантаження
// const CompanyFormModal = dynamic(() => import('./Company-form-modal'), {
//   ssr: false,
// });

export default function AddCompanyButton() {
  const router = useRouter();
  return (
    <Button onClick={() => router.push('/companies/new', { scroll: false })}>
      Add company
    </Button>
  );
}
