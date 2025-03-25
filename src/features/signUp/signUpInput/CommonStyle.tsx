import { css } from 'styled-components';
import styled from 'styled-components';

export const inputStyles = css<{ isError: boolean }>`
  width: 100%;
  height: 58px;
  border: 1px solid ${({ isError }) => (isError ? '#FF0000' : '#b6bbc4')};
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
