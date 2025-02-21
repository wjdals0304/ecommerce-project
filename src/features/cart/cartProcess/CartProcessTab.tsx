import {useState} from 'react';
import styled from 'styled-components';
import {CartProcessTabType} from './TabContent';
import TabContent from './TabContent';
import CartItem from './CartItem';
import {CartResponse} from '@/types/cart';

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
    title: '장바구니',
    description: '주문하고 싶은 상품을 담아주세요.',
  },
  {
    title: '배송 및 결제',
    description: '상품 목록을 정리하세요.',
  },
  {
    title: '주문 확인',
    description: '주문을 검토하고 제출하세요.',
  },
];

export default function CartProcessTab({cart}: {cart: CartResponse}) {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(
    CartProcessTabType.ShoppingCart,
  );
  const [orderId, setOrderId] = useState<string>('');

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
        <TabContent
          activeTabIndex={activeTabIndex}
          onNextStep={goToNextStep}
          cart={cart}
          orderId={orderId}
          setOrderId={setOrderId}
        />
      </TabContentContainer>
    </Container>
  );
}
