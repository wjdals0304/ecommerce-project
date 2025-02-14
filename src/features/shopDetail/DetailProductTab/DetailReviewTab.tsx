import styled from 'styled-components';
import Image from 'next/image';
import defaultProfile from 'public/images/shop/defaultProfile.svg';
import starIcon from 'public/images/home/star.svg';
import {Review} from '@/types/shop';

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

const CommentContent = styled.div`
  font-size: 16px;
  font-weight: medium;
  color: #8e96a4;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #ffffff;
  padding: 15px;
  border-radius: 15px;
  margin-top: 15px;
`;

const ReviewTitle = styled.span`
  font-size: 16px;
  font-weight: medium;
  color: #001c30;
`;

interface DetailReviewTabProps {
  reviews: Review[];
}

export default function DetailReviewTab({reviews}: DetailReviewTabProps) {
  return (
    <Container>
      {reviews.map(({id, user_name, rating, comment, created_at}) => (
        <div key={id}>
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
                  <Nickname>{user_name}</Nickname>
                </UserHeader>
                <StarContainer>
                  {[...Array(Math.floor(rating))].map((_, index) => (
                    <Image
                      key={index}
                      src={starIcon}
                      alt="starIcon"
                      width={20}
                      height={20}
                    />
                  ))}
                  <span>{rating}</span>
                </StarContainer>
              </UserInfo>
            </ProfileSection>
            <ReviewDate>{new Date(created_at).toLocaleDateString()}</ReviewDate>
          </ReviewContainer>
          <CommentContent>
            <ReviewTitle>댓글:</ReviewTitle>
            {comment}
          </CommentContent>
        </div>
      ))}
    </Container>
  );
}
