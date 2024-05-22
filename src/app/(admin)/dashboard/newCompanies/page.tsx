import React from 'react';
import Header from '@/app/components/Header';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <>
      <Header>Dashboard / NewCompanies</Header>
      <div>Some additional info </div>
    </>
  );
}
