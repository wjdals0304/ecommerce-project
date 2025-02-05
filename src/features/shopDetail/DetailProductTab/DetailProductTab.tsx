import styled from 'styled-components';
import {useState} from 'react';
import TabContent, {ShopDetailTabType} from './TabContent';

const Container = styled.div`
  max-width: 1240px;
  height: auto;
  margin: 0 auto;
  padding: 25px 0;
`;

const TabContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #e0e0e0;
`;

const Tab = styled.div<{isActive: boolean}>`
  flex: 1;
  padding: 15px;
  text-align: center;
  cursor: pointer;
  background-color: ${props => (props.isActive ? '#F7D358' : 'D7D7D7')};
  font-weight: ${props => (props.isActive ? 'bold' : 'normal')};
`;

export default function DetailProductTab() {
  const [activeTab, setActiveTab] = useState<ShopDetailTabType>(
    ShopDetailTabType.Description,
  );

  return (
    <Container>
      <TabContainer>
        <Tab
          isActive={activeTab === ShopDetailTabType.Description}
          onClick={() => setActiveTab(ShopDetailTabType.Description)}
        >
          Description
        </Tab>
        <Tab
          isActive={activeTab === ShopDetailTabType.Specification}
          onClick={() => setActiveTab(ShopDetailTabType.Specification)}
        >
          Spesification
        </Tab>
        <Tab
          isActive={activeTab === ShopDetailTabType.Review}
          onClick={() => setActiveTab(ShopDetailTabType.Review)}
        >
          Review
        </Tab>
      </TabContainer>
      <TabContent activeTab={activeTab} />
    </Container>
  );
}
