import React from 'react';
import Toolbar from '@/app/components/Toolbar';
import SearchInput from '@/app/components/Search-input';
import AddCompanyButton from '@/app/components/Add-company-button';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <Toolbar action={<AddCompanyButton />}>
      <SearchInput />
    </Toolbar>
  );
}
