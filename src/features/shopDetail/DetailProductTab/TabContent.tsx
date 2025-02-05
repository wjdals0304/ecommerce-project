import DescriptionTab from './DescriptionTab';
import DetailSpesificationTab from './DetailSpesificationTab';
import DetailReviewTab from './DetailReviewTab';
import styled from 'styled-components';

export enum ShopDetailTabType {
  Description = 'description',
  Specification = 'specification',
  Review = 'review',
}

interface TabContentProps {
  activeTab: ShopDetailTabType;
}

export default function TabContent({activeTab}: TabContentProps) {
  switch (activeTab) {
    case ShopDetailTabType.Description:
      return <DescriptionTab />;
    case ShopDetailTabType.Specification:
      return <DetailSpesificationTab />;
    case ShopDetailTabType.Review:
      return <DetailReviewTab />;
  }
}
