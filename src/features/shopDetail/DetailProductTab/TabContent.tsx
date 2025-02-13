import DescriptionTab from './DescriptionTab';
import DetailSpesificationTab from './DetailSpesificationTab';
import DetailReviewTab from './DetailReviewTab';
import styled from 'styled-components';
import {Review, Specification, ProductDescription} from '@/types/shop';

export enum ShopDetailTabType {
  Description = 'description',
  Specification = 'specification',
  Review = 'review',
}

interface TabContentProps {
  activeTab: ShopDetailTabType;
}

interface TabContentProps {
  activeTab: ShopDetailTabType;
  reviews: Review[];
  specifications: Specification[];
  descriptions: ProductDescription[];
}

export default function TabContent({
  activeTab,
  reviews,
  specifications,
  descriptions,
}: TabContentProps) {
  switch (activeTab) {
    case ShopDetailTabType.Description:
      return <DescriptionTab descriptions={descriptions} />;
    case ShopDetailTabType.Specification:
      return <DetailSpesificationTab specifications={specifications} />;
    case ShopDetailTabType.Review:
      return <DetailReviewTab reviews={reviews} />;
  }
}
