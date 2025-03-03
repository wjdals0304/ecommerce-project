import {ProfileData} from '@/types/home';
import styled from 'styled-components';

const ProfileInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  margin: 0 auto;
  width: 100%;
  align-items: flex-start;
  padding: 30px;
  gap: 10px;
`;

const ProfileInfoItem = styled.div`
  display: flex;
  gap: 15px;
  width: 100%;
`;

export default function ProfileInfo({profileData}: {profileData: ProfileData}) {
  const {fullName, email, phoneNumber} = profileData;

  return (
    <ProfileInfoContainer>
      <ProfileInfoItem>
        <span>이름:</span>
        <span>{fullName}</span>
      </ProfileInfoItem>
      <ProfileInfoItem>
        <span>이메일:</span>
        <span>{email}</span>
      </ProfileInfoItem>
      <ProfileInfoItem>
        <span>전화번호:</span>
        <span>{phoneNumber}</span>
      </ProfileInfoItem>
    </ProfileInfoContainer>
  );
}
