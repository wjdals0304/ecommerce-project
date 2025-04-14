import ProfileContent from '@/features/profile/ProfileContent';
import { API_ENDPOINTS } from '@/shared/config/apiEndPoints';
import { getRequest } from '@/shared/lib/apiClient';
import { getAuthHeaders } from '@/shared/lib/headerUtils';
import { ProfileData } from '@/shared/types/home';
import Footer from '@/shared/ui/Footer';
import Navigation from '@/shared/ui/Navigation';
import { GetServerSideProps } from 'next';

export default function Profile({ profileData }: { profileData: ProfileData }) {
  return (
    <>
      <Navigation />
      <ProfileContent profileData={profileData} />
      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async context => {
  try {
    const response = await getRequest<ProfileData>({
      url: API_ENDPOINTS.AUTH_ME,
      config: {
        headers: getAuthHeaders(context),
      },
    });
    const profileData = response.data;

    return {
      props: {
        profileData,
      },
    };
  } catch {
    return {
      redirect: {
        destination: '/signin?redirect=/profile',
        permanent: false,
      },
    };
  }
};
