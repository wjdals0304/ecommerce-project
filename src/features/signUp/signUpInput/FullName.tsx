import {useState} from 'react';
import styled from 'styled-components';
import {inputStyles, ErrorMessage} from '../signUpInput/CommonStyle';

const FullNameInput = styled.input<{isValid: boolean}>`
  ${inputStyles};
`;

const FullNameContainer = styled.div`
  position: relative;
`;

export default function FullName({
  setIsFullNameValid,
}: {
  setIsFullNameValid: (isValid: boolean) => void;
}) {
  const [fullName, setFullName] = useState('');
  const [isFullNameValidLocal, setIsFullNameValidLocal] = useState(true);
  const [fullNameError, setFullNameError] = useState('');

  const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isValid = /^[a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣\s]*$/.test(value);
    setIsFullNameValidLocal(isValid);
    setIsFullNameValid(isValid);
    setFullName(value);
    setFullNameError(isValid ? '' : '이름은 문자만 포함할 수 있습니다.');
  };

  return (
    <FullNameContainer>
      <FullNameInput
        placeholder="이름 (예: 홍길동)"
        value={fullName}
        onChange={handleFullNameChange}
        isValid={isFullNameValidLocal}
        name="fullName"
        type="text"
      />
      {!isFullNameValidLocal && <ErrorMessage>{fullNameError}</ErrorMessage>}
    </FullNameContainer>
  );
}
