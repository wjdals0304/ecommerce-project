import { ProductDescription, Review, Specification } from '@/shared/types/shop';
import styled from 'styled-components';
import TabContent, { ShopDetailTabType } from './TabContent';
const Container = styled.div`
  width: 1240px;
  height: auto;
  margin: 0 auto;
  padding: 25px 0;
`;

const TabContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #e0e0e0;
`;

const TabContentContainer = styled.div`
  padding: 20px;
`;

const Tab = styled.div<{ isActive: boolean }>`
  flex: 1;
  padding: 15px;
  text-align: center;
  cursor: pointer;
  background-color: ${({ isActive }) => (isActive ? '#F7D358' : 'D7D7D7')};
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
`;

interface DetailProductTabProps {
  activeTab: ShopDetailTabType;
  onTabClick: (tab: ShopDetailTabType) => void;
  reviews: Review[];
  specifications: Specification[];
  descriptions: ProductDescription[];
}

export default function DetailProductTab({
  specifications,
  descriptions,
  activeTab,
  onTabClick,
  reviews,
}: DetailProductTabProps) {
  return (
    <Container>
      <TabContainer>
        <Tab
          isActive={activeTab === ShopDetailTabType.Description}
          onClick={() => onTabClick(ShopDetailTabType.Description)}
        >
          상품 설명
        </Tab>
        <Tab
          isActive={activeTab === ShopDetailTabType.Specification}
          onClick={() => onTabClick(ShopDetailTabType.Specification)}
        >
          상품 상세
        </Tab>
        <Tab
          isActive={activeTab === ShopDetailTabType.Review}
          onClick={() => onTabClick(ShopDetailTabType.Review)}
        >
          리뷰
        </Tab>
      </TabContainer>
      <TabContentContainer>
        <TabContent
          activeTab={activeTab}
          reviews={reviews}
          specifications={specifications}
          descriptions={descriptions}
        />
      </TabContentContainer>
    </Container>
  );
}
