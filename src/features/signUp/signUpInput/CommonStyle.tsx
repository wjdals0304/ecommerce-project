import {css} from 'styled-components';
import styled from 'styled-components';

export const inputStyles = css<{isValid: boolean}>`
  width: 100%;
  height: 58px;
  border: 1px solid ${({isValid}) => (isValid ? '#b6bbc4' : '#FF0000')};
  border-radius: 55px;
  padding: 15px 25px;

  &::placeholder {
    color: #ababcb;
  }
`;

export const ErrorMessage = styled.div`
  color: #ff0000;
  font-size: 12px;
  position: absolute;
  bottom: -18px;
  left: 14px;
`;
