import {CartResponse} from '@/types/cart';
import styled from 'styled-components';
import Image from 'next/image';
import trashIcon from 'public/images/shop/trash.svg';
import {deleteRequest, getStoredToken} from '@/utils/apiClient';
import {API_ENDPOINTS} from '@/config/ApiEndPoints';
import {useRouter} from 'next/router';

const ProductItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`;

const ProductDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px;
  flex: 1 0 352px;
`;

const ProductImage = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 15px;
  object-fit: cover;
  background-color: #d7d7d7;
`;

const ProductTitle = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #001c30;
`;

const ProductPrice = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #56af2c;
  flex: 1 0 133px;
  padding: 10px;
`;

const ProductQTY = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #001c30;
  flex: 1 0 81px;
  padding: 10px;
`;

const ProductSubTotal = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #001c30;
  flex: 1 0 133px;
  padding: 10px;
`;

const TrashIconButton = styled.button`
  flex: 1 0 47px;
  height: 44px;
  border: none;
  background-color: transparent;
  padding: 10px;
`;

const TrashIconImage = styled(Image)`
  width: 22px;
  height: 22px;
`;

export default function ShoppingCartItem({cart}: {cart: CartResponse}) {
  const {items} = cart;
  const router = useRouter();
  const handleTrashIconClick = async (productId: number) => {
    try {
      const token = getStoredToken();
      const response = await deleteRequest({
        url: `${API_ENDPOINTS.CART}/${productId}`,
        config: {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      });
      router.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return items.map(({id, product, quantity}) => {
    const {id: productId, name, price, images} = product;
    const totalPrice = price * quantity;
    return (
      <ProductItemContainer key={id}>
        <ProductDetail>
          <ProductImage src={images[0]} alt={name} width={72} height={72} />
          <ProductTitle>{name}</ProductTitle>
        </ProductDetail>
        <ProductPrice>{price.toLocaleString()}원</ProductPrice>
        <ProductQTY>{quantity}</ProductQTY>
        <ProductSubTotal>{totalPrice.toLocaleString()}원</ProductSubTotal>
        <TrashIconButton onClick={() => handleTrashIconClick(productId)}>
          <TrashIconImage src={trashIcon} alt="trash" />
        </TrashIconButton>
      </ProductItemContainer>
    );
  });
}
