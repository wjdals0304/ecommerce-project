import {useState} from 'react';
import styled from 'styled-components';
import {CartProcessTabType} from './TabContent';
import TabContent from './TabContent';
import CartItem from './CartItem';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f7f8;
`;

const InnerContainer = styled.div<{index: number}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
  padding: 15px 15px 0;

  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0%;
    width: 33.3%;
    height: 3px;
    transform: translateX(${({index}) => index * 100}%);
    background-color: #ee9322;
    transition: transform 0.3s ease-in-out;
  }
`;

const TabContentContainer = styled.div`
  max-width: 1240px;
  margin: 50px auto;
`;

const tabItems = [
  {
    title: 'Shopping Cart',
    description: 'Organize Your List of items',
  },
  {
    title: 'Shipping & Checkout',
    description: 'Organize Your List of items',
  },
  {
    title: 'Confirmation',
    description: 'Examine and Send in Your Order.',
  },
];

export default function CartProcessTab() {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(
    CartProcessTabType.ShoppingCart,
  );

  const goToNextStep = () => {
    setActiveTabIndex(prevTabIndex => {
      if (prevTabIndex === tabItems.length - 1) {
        return prevTabIndex;
      }
      return prevTabIndex + 1;
    });
  };

  return (
    <Container>
      <InnerContainer index={activeTabIndex}>
        {tabItems.map(({title, description}, index) => (
          <CartItem
            key={index}
            index={index}
            title={title}
            description={description}
          />
        ))}
      </InnerContainer>
      <TabContentContainer>
        <TabContent activeTabIndex={activeTabIndex} onNextStep={goToNextStep} />
      </TabContentContainer>
    </Container>
  );
}
