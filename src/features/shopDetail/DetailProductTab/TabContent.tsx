import DescriptionTab from './DescriptionTab';
import DetailSpesificationTab from './DetailSpesificationTab';
import DetailReviewTab from './DetailReviewTab';
import styled from 'styled-components';

const ContentContainer = styled.div`
  padding: 20px;
`;

export enum ShopDetailTabType {
  Description = 'description',
  Specification = 'specification',
  Review = 'review',
}

interface TabContentProps {
  activeTab: ShopDetailTabType;
}

export default function TabContent({activeTab}: TabContentProps) {
  return (
    <ContentContainer>
      {activeTab === ShopDetailTabType.Description && <DescriptionTab />}
      {activeTab === ShopDetailTabType.Specification && (
        <DetailSpesificationTab />
      )}
      {activeTab === ShopDetailTabType.Review && <DetailReviewTab />}
    </ContentContainer>
  );
}
