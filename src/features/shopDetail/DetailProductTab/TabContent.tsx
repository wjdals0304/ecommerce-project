import { ProductDescription, Review, Specification } from '@/types/shop';
import DescriptionTab from './DescriptionTab';
import DetailReviewTab from './DetailReviewTab';
import DetailSpesificationTab from './DetailSpesificationTab';

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
