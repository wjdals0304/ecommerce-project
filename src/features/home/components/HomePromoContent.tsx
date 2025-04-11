import { FlashDeal } from '@/shared/types/home';
import styled from 'styled-components';

import HomePromoContentDeal from './HomePromoContentDeal';
interface HomePromoContentProps {
  flashDeals: FlashDeal[];
}

export default function HomePromoContent({
  flashDeals,
}: HomePromoContentProps) {
  return (
    <Products>
      {flashDeals.map(flashDeal => {
        return (
          <HomePromoContentDeal key={flashDeal.id} flashDeal={flashDeal} />
        );
      })}
    </Products>
  );
}

const Products = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 25px;
`;
