import styled from 'styled-components';
import {useState} from 'react';
import DescriptionTab from './DescriptionTab';
import DetailSpesificationTab from './DetailSpesificationTab';
import DetailReviewTab from './DetailReviewTab';

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

const ContentContainer = styled.div`
  padding: 20px;
`;

export default function DetailProductTab() {
  const [activeTab, setActiveTab] = useState<
    'description' | 'specification' | 'review'
  >('description');

  const renderContent = () => {
    switch (activeTab) {
      case 'description':
        return <DescriptionTab />;
      case 'specification':
        return <DetailSpesificationTab />;
      case 'review':
        return <DetailReviewTab />;
    }
  };

  return (
    <Container>
      <TabContainer>
        <Tab
          isActive={activeTab === 'description'}
          onClick={() => setActiveTab('description')}
        >
          Description
        </Tab>
        <Tab
          isActive={activeTab === 'specification'}
          onClick={() => setActiveTab('specification')}
        >
          Spesification
        </Tab>
        <Tab
          isActive={activeTab === 'review'}
          onClick={() => setActiveTab('review')}
        >
          Review
        </Tab>
      </TabContainer>
      <ContentContainer>{renderContent()}</ContentContainer>
    </Container>
  );
}
