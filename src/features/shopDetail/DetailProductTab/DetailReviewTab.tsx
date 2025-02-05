import styled from 'styled-components';
import Image from 'next/image';
import defaultProfile from 'public/images/shop/defaultProfile.svg';
import starIcon from 'public/images/home/star.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 25px;
`;

const ReviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
`;

const ProfileSection = styled.div`
  display: flex;
  gap: 15px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const UserHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Nickname = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #001c30;
`;

const Country = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #8e96a4;
`;

const StarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const ReviewDate = styled.span`
  font-size: 16px;
  font-weight: medium;
  color: #8e96a4;
`;

const ReviewContent = styled.div`
  font-size: 16px;
  font-weight: medium;
  color: #8e96a4;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #ffffff;
  padding: 15px;
  border-radius: 15px;
`;

const ReviewTitle = styled.span`
  font-size: 16px;
  font-weight: medium;
  color: #001c30;
`;

export default function DetailReviewTab() {
  return (
    <Container>
      <ReviewContainer>
        <ProfileSection>
          <Image
            src={defaultProfile}
            alt="defaultProfile"
            width={60}
            height={60}
          />
          <UserInfo>
            <UserHeader>
              <Nickname>John Doe</Nickname>
              <Country>UK</Country>
            </UserHeader>
            <StarContainer>
              <Image src={starIcon} alt="starIcon" width={20} height={20} />
              <Image src={starIcon} alt="starIcon" width={20} height={20} />
              <Image src={starIcon} alt="starIcon" width={20} height={20} />
              <Image src={starIcon} alt="starIcon" width={20} height={20} />
              <span>4.5</span>
            </StarContainer>
          </UserInfo>
        </ProfileSection>
        <ReviewDate>2024.01.01</ReviewDate>
      </ReviewContainer>
      <ReviewContent>
        <ReviewTitle>Comment:</ReviewTitle>
        Hi , I'm so glad you like our products. Your best rating is our biggest
        support. Don't forget to share with your friends, family or relatives.
        Have a nice day, waiting for your next order
      </ReviewContent>
    </Container>
  );
}
