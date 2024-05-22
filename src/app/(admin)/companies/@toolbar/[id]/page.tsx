import Toolbar from '@/app/components/Toolbar';
import SearchInput from '@/app/components/Search-input';
import AddPromotionButton from '@/app/components/Add-promotion-button';

export interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  return (
    <Toolbar action={<AddPromotionButton companyId={params.id} />}>
      <SearchInput />
    </Toolbar>
  );
}
