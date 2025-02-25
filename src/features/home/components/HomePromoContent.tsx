import {FlashDeal} from '@/types/home';
import styled from 'styled-components';

import HomePromoContentDeal from './HomePromoContentDeal';
interface HomePromoContentProps {
  flashDeals: FlashDeal[];
}

interface handleAddToCartProps {
  event: React.MouseEvent<HTMLButtonElement>;
  id: number;
}

export default function HomePromoContent({flashDeals}: HomePromoContentProps) {
  return (
    <Products>
      {flashDeals.map(flashDeal => {
        return <HomePromoContentDeal flashDeal={flashDeal} />;
      })}
    </Products>
  );
}

const Products = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 25px;
`;
